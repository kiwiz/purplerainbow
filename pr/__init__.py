from flask import Flask, render_template, request
import datetime, json
import pandas as pd
import core
app = Flask(__name__)

@app.route('/')
def main():
    ticker = request.args.get('ticker')
    if ticker:
#        wow = json.load(open('pr/hack.py'))
#        return render_template('data.html', data=wow)
        try:
            quarterly_df = core.quarterly_data(ticker)
            daily_df = core.daily_data(ticker)

            daily_df = daily_df[daily_df['date'] > datetime.datetime(2013,1,1)]
            daily_df['rolling'] = pd.rolling_mean(daily_df['bull_bear_difference'], 60)

            a = quarterly_df[['consolidated_net_income_loss', 'fiscal_qtr', 'fiscal_year']].to_dict(orient='records')
            b = quarterly_df[['estimize_eps_count', 'fiscal_qtr', 'fiscal_year']].to_dict(orient='records')
            c = json.loads(daily_df[['bull_bear_difference', 'date']].to_json(orient='records'))
            d = json.loads(daily_df[['rolling', 'date']].to_json(orient='records'))
        except:
            return render_template('index.html', title="Purple Rainbow")
        return render_template('data.html', data=[a, b, c, d], title="Purple Rainbow / " + ticker, ticker=ticker)
    return render_template('index.html', title="Purple Rainbow")

@app.route('/about')
def about():
    return render_template('about.html')
