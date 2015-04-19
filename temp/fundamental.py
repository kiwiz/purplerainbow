import requests
import json

def get_fundamental_data(ticker):

    fields = ['NetIncomeCashFlow']
#, 'ConsolidatedNetIncomeLoss', 'TotalAssets', 'TotalLiabilities'];

    mapping = {
        'Total Liabilities':'total_liabilities',
        'Consolidated Net Income (Loss)':'consolidated_net_income_loss',
        'Net Income':'net_income',
        'Total Assets':'total_assets',
        'ticker':'ticker',
    }

    currYear = 2015
    apiKey   = 'huFif6YjwJKCfmKXIZn1E1xy'
    agg = []

    for y in range( currYear - 2, currYear ):
        for q in range( 1, 5 ):

            map = {}
            map[ 'ticker' ] = ticker
            map[ 'fiscal_year' ] = y
            map[ 'fiscal_qtr'  ] = q

            for f in fields:
                query = 'https://api.tagnifi.com/fundamentals?tag={0}&company={1}&fiscal_year={2}&fiscal_quarter={3}&period_type=quarter'.format(f, ticker, y, q)
                r = requests.get( query, auth=( apiKey, '' ), verify=False )
                j = r.json()

                n = j.get( 'fundamentals' )[0].get( 'tags' )[0].get( 'name' )
                n = mapping[ n ]
                v = j.get( 'fundamentals' )[0].get( 'tags' )[0].get( 'value' )
            
                map[ n ] = v

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

r = get_fundamental_data('msft')
print( r )



