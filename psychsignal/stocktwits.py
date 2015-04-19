import requests
import datetime

class StockTwits(object):
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
    	days = 10
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
        	val = data[i].get('timestamp_utc');
        	dateval = val[0:val.index('T')]
        	bull = data[i].get('bullish_intensity');
        	bear = data[i].get('bearish_intensity');
        	bull_bear = data[i].get('bull_minus_bear');
        	tupledata = [dateval, bull, bear, bull_bear]
        	datalist.append(tupledata)

        return {symbol:datalist}

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

        print(days, change_volume, change_bearish, change_bullish)
        return (days, change_volume, change_bearish, change_bullish)


    def _build_url(self, params):
        params_string = ''
        for k, v in params.items():
            params_string = params_string + '&' + k + '=' + v

        return (self.KEY_URL + params_string)

    def _make_request(self, url):

        response = requests.get(url)
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
        