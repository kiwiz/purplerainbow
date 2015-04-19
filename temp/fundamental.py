import requests
import json

def get_fundamental_data(ticker):

    fields = ['ConsolidatedNetIncomeLoss', 'TotalAssets', 'TotalLiabilities'];

    mapping = {
        'TotalLiabilities':'total_liabilities',
        'ConsolidatedNetIncomeLoss':'consolidated_net_income_loss',
#        'ChangeCashEquivalents':'cashflow',
        'TotalAssets':'total_assets',
    }

    currYear = 2015
    apiKey   = 'huFif6YjwJKCfmKXIZn1E1xy'
    agg = []

    for y in range( currYear - 2, currYear + 1 ):

        cumFields = {
            'ConsolidatedNetIncomeLoss' : 0
        }

        for q in range( 1, 5 ):

            map = {}
            err = False

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

                map[ n ] = v

            if err == False:
                map[ 'ticker' ] = ticker
                map[ 'fiscal_year' ] = y
                map[ 'fiscal_qtr'  ] = q
                agg.append( map )

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



