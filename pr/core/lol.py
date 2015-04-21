import requests
import json
import datetime
import pandas as pd

from estimize import *
import collections
import sqlite3

def quarterly_data(ticker):
    fundamentals = get_fundamental_data(ticker)
    df_fund = pd.DataFrame(fundamentals)
    estimize = get_analysis_estimate_data(ticker)
    df_estimize = pd.DataFrame(estimize)
    df_estimize = df_estimize.sort(columns='release_date').reset_index(drop=True)
    df_quarterly = pd.merge(df_estimize, df_fund, left_on=['fiscal_quarter', 'fiscal_year'], right_on=['fiscal_qtr', 'fiscal_year'])
    return df_quarterly

def daily_data(ticker):
    sentiment = get_stock_sentiment_data(ticker)
    df_sent = pd.DataFrame(sentiment)
    #bullish_index
    df_sent.columns = ['date', 'bullish_index', 'bearish_index', 'bull_bear_difference', 'no_bull_tweets', 'no_bear_tweets']
    df_sent['date'] = pd.to_datetime(df_sent['date'])
    df_sent.set_index('date')
    #df_sent['Date'] = df_sent.apply(lambda x: x['row'].strftime('%Y%m%d'), axis=1)
    return df_sent

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



rd_keys = ['consensus_revenue_estimate', 'consensus_eps_estimate', 'wallstreet_eps_estimate', 'wallstreet_revenue_estimate']

def flatten(d, parent_key='', sep='_'):
    items = []
    for k, v in d.items():
        new_key = parent_key + sep + k if parent_key else k
        if isinstance(v, collections.MutableMapping):
            items.extend(flatten(v, new_key, sep=sep).items())
        else:
            items.append((new_key, v))
    return dict(items)

def get_analysis_estimate_data(ticker):
    releases = request_releases_for_company("AAPL")
    ret = []
    for release in releases:
        for k in rd_keys:
            del release[k]

        details = request_release_consensus(release['id'])
        if not (details['wallstreet']['eps'] or details['estimize']['eps'] or details['wallstreet']['revenue'] or details['estimize']['revenue']):
            continue

        for a in ['estimize', 'wallstreet']:
            for b in details[a].keys():
                if 'revisions' in details[a][b]:
                    del details[a][b]['revisions']
        release.update(details)
        ret.append(flatten(release))

    return ret

def store_analysis_estimate_data(conn, data):
    for row in data:
        ks = row.keys()
        vs = row.values()
        ret = conn.execute('INSERT INTO `analysis_estimate`(%s) VALUES(%s)' % (
            ','.join(ks), ','.join((['?']*len(ks)))
        ), vs)
        conn.commit()


class PsychSignal(object):
    key = 'fth150ddb474d646b2330eb808a3b7bb29f13'
    BASE_URL = 'https://api.psychsignal.com/v2/historical_sentiments?api_key='
    KEY_URL = BASE_URL + key
    now = datetime.datetime.now()
    to_date = datetime.datetime.now().strftime("%Y-%m-%d")
    sources = 'stocktwits'
    symbol = ''
    update = ''
    days = -1

    def __init__(self):
        return

    def data(self, symbol):
        days = 365 * 3
        from_date = self.now - datetime.timedelta(days)
        from_date_s = from_date.strftime("%Y-%m-%d")
        params = {'update':'1d','to':self.to_date,'from':from_date_s,'sources':self.sources,'symbols':self.symbol}
        FINAL_URL = self._build_url(params)

        data = self._make_request(FINAL_URL)
        if not data:
            print 'No data'
            return None

        datalist = []

        for i in range(0,len(data)):
            val = data[i].get('timestamp_utc')
            dateval = val[0:val.index('T')]
            bull = data[i].get('bullish_intensity')
            bear = data[i].get('bearish_intensity')
            bull_bear = data[i].get('bull_minus_bear')
            no_bull = data[i].get('bull_scored_messages')
            no_bear = data[i].get('bear_scored_messages')
            tupledata = [dateval, bull, bear, bull_bear, no_bull, no_bear]
            datalist.append(tupledata)

        return datalist

    def change(self, symbol):
        self.symbol = symbol
        return(self.change_volume('1d'),self.change_volume('7d'),self.change_volume('1m'))
        #return(self.change_volume('1m'))
    def change_volume(self,update):

        if(update=='1d'):
            days = 1
        elif(update=='1m'):
            days = 30
        elif(update == '7d'):
            days = 7

        self.days = days
        self.update = update
        
        from_date = self.now - datetime.timedelta(days)
        from_date_s = from_date.strftime("%Y-%m-%d")
        params = {'update':'1d','to':self.to_date,'from':from_date_s,'sources':self.sources,'symbols':self.symbol}
        FINAL_URL = self._build_url(params)
        data = self._make_request(FINAL_URL)
        if not data:
            print 'No data'
            return None

        nowdata = self.values(data)

        temp_todate = from_date_s
        from_date = from_date - datetime.timedelta(days)
        from_date_s = from_date.strftime("%Y-%m-%d")
        params = {'update':'1d','to':temp_todate,'from':from_date_s,'sources':self.sources,'symbols':self.symbol}
        FINAL_URL = self._build_url(params)

        data = self._make_request(FINAL_URL)
        if not data:
            print 'No data'
            return None

        prevdata = self.values(data)

        change_volume = float(nowdata[0])/(prevdata[0]+1) - 1
        change_bearish = nowdata[1] - prevdata[1]
        change_bullish = nowdata[2] - prevdata[2]

        return (days, change_volume, change_bearish, change_bullish)


    def _build_url(self, params):
        params_string = ''
        for k, v in params.items():
            params_string = params_string + '&' + k + '=' + v

        return (self.KEY_URL + params_string)

    def _make_request(self, url):
        response = requests.get(url, verify=False)
        response.raise_for_status()
        return response.json()

    def values(self,data):
        total_messages = 0
        bearish_intensity = 0
        bullish_intensity = 0
        lendata = len(data)
        for i in range(0,len(data)):
            total_messages = total_messages + data[i].get('total_scanned_messages')
            bearish_intensity = bearish_intensity + data[i].get('bearish_intensity')
            bullish_intensity = bullish_intensity + data[i].get('bullish_intensity')

        return (total_messages,float(bearish_intensity)/lendata, float(bullish_intensity)/lendata)

def get_stock_sentiment_data(ticker):
    ps = PsychSignal()
    ps.change(ticker)
    return ps.data(ticker)

def store_stock_sentiment_data(conn, data):
    for row in data:
        ks = ['date', 'bullish_index', 'bearish_index', 'bull_bear_difference', 'no_bull_tweets', 'no_bear_tweets']
        vs = row
        ret = conn.execute('INSERT INTO `daily_sentiment`(%s) VALUES(%s)' % (
            ','.join(ks), ','.join((['?']*len(ks)))
        ), vs)
        conn.commit()

