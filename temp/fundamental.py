import requests
import json
import datetime

def get_market_data(ticker):

    agg      = []
    currTime = datetime.datetime.now()
    currDate = currTime.date()
    apiKey   = 'huFif6YjwJKCfmKXIZn1E1xy'

    endDelta  = datetime.timedelta( 365 )
    oneDay    = datetime.timedelta( 1 )
    oneWk     = datetime.timedelta( 7 )
    Dt        = currDate - endDelta

    while Dt <= currDate:
        query = 'https://api.tagnifi.com/markets?relative_period=0&company={0}&date={1}'.format( ticker, '{0}-{1}-{2}'.format(Dt.year, Dt.strftime("%m"), Dt.strftime("%d")) )
        
        r = requests.get( query, auth=( apiKey, '' ), verify=False )

        try:
            j = r.json()
        except ValueError:
            err = True
    
        vol   = j.get( 'markets' )[0].get( 'prices' )[0].get( 'volume' )
        close = j.get( 'markets' )[0].get( 'prices' )[0].get( 'close' )

        structure = {
            'ticker' : ticker,
            'date'   : Dt
        }
        structure[ 'vol'   ] = vol
        structure[ 'close' ] = close

        Dt = Dt + oneWk
#        print( currDate )

        agg.append( structure )

    return agg

#print( datetime.datetime.now() )
#d = get_market_data('msft')
#print( d )
#print( datetime.datetime.now() )

def get_fundamental_data(ticker):

    fields = ['ConsolidatedNetIncomeLoss', 'TotalAssets', 'TotalLiabilities'];

    mapping = {
        'TotalLiabilities':'total_liabilities',
        'ConsolidatedNetIncomeLoss':'consolidated_net_income_loss',
#        'ChangeCashEquivalents':'cashflow',
        'TotalAssets':'total_assets',
    }

    currYear = datetime.datetime.now().year
    apiKey   = 'huFif6YjwJKCfmKXIZn1E1xy'
    agg = []

    for y in range( currYear - 2, currYear + 1 ):

        cumFields = {
            'ConsolidatedNetIncomeLoss' : 0
        }

        for q in range( 1, 5 ):

            structure = {}
            err       = False

            for f in fields:
                if q < 4:
                    query = 'https://api.tagnifi.com/fundamentals?tag={0}&company={1}&fiscal_year={2}&fiscal_quarter={3}&period_type=quarter'.format(f, ticker, y, q)
                else:
                    query = 'https://api.tagnifi.com/fundamentals?tag={0}&company={1}&fiscal_year={2}&period_type=annual'.format(f, ticker, y)
                
                r = requests.get( query, auth=( apiKey, '' ), verify=False )

                try:
                    j = r.json()
                except ValueError:
                    err = True
#                    print( '\n\n' )
#                    print( query )
                    continue

                n = mapping[ f ]
                v = j.get( 'fundamentals' )[0].get( 'tags' )[0].get( 'value' )
            
                if q == 4 and f in cumFields.keys():
                    v -= cumFields[ f ]
                elif f in cumFields.keys():
                    cumFields[ f ] += v

                structure[ n ] = v

            if err == False:
                structure[ 'ticker' ] = ticker
                structure[ 'fiscal_year' ] = y
                structure[ 'fiscal_qtr'  ] = q
                agg.append( structure )

    return agg

def store_fundamental_data(conn, data):
    for row in data:
        ks = row.keys()
        vs = row.values()
        ret = conn.execute('INSERT INTO `analysis_fundamental`(%s) VALUES(%s)' % (
            ','.join(ks), ','.join((['?']*len(ks)))
        ), vs)
        conn.commit()

#r = get_fundamental_data('ko')
#print( r )



