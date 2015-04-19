from estimize_connector import *
import sqlite3

DAILY_SENTIMENT_SQL = """
CREATE TABLE daily_sentiment(
    id serial,
    stock_symbol primary_key varchar(10),
    date date,
    bearish_index decimal,
    bullish_index decimal
)
"""

SENTIMENT_CHANGE_SQL = """
CREATE TABLE sentiment_change(
    stock_symbol primary_key varchar(10),
    duration smallint,
    tweets_change decimal,
    bearish_increase decimal,
    bullish_increase decimal
)
"""

ANALYSIS_ESTIMATE_SQL = """
CREATE TABLE analysis_estimate (
    revenue DECIMAL,
    fiscal_year INT,
    eps DECIMAL,
    fiscal_quarter INT,
    release_date DATETIME,
    id VARCHAR,

    wallstreet_eps_count INT,
    wallstreet_eps_standard_deviation DECIMAL,
    wallstreet_eps_updated_at DATETIME,
    wallstreet_eps_high DECIMAL,
    wallstreet_eps_low DECIMAL,
    wallstreet_eps_mean DECIMAL,

    wallstreet_revenue_count INT,
    wallstreet_revenue_standard_deviation DECIMAL,
    wallstreet_revenue_updated_at DATETIME,
    wallstreet_revenue_high DECIMAL,
    wallstreet_revenue_low DECIMAL,
    wallstreet_revenue_mean DECIMAL,

    estimize_eps_count INT,
    estimize_eps_standard_deviation DECIMAL,
    estimize_eps_updated_at DATETIME,
    estimize_eps_high DECIMAL,
    estimize_eps_low DECIMAL,
    estimize_eps_mean DECIMAL,

    estimize_revenue_count INT,
    estimize_revenue_standard_deviation DECIMAL,
    estimize_revenue_updated_at DATETIME,
    estimize_revenue_high DECIMAL,
    estimize_revenue_low DECIMAL,
    estimize_revenue_mean DECIMAL
)
"""


conn = sqlite3.connect('dongers')
conn.execute(DAILY_SENTIMENT_SQL)
conn.execute(SENTIMENT_CHANGE_SQL)
conn.execute(ANALYSIS_ESTIMATE_SQL)

store_analysis_estimate_data(conn, get_analysis_estimate_data('AAPL'))
