import stocktwits

stocktwit = stocktwits.StockTwits()

stocktwit.change('AAPL')
print(stocktwit.data('AAPL'))
