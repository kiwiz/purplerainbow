import requests
import json
import datetime
import pandas as pd

from estimize_connector import *
from fundamental import *
from psychsignal import *

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
