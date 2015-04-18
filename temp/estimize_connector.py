from estimize import *

rd_keys = ['consensus_revenue_estimate', 'consensus_eps_estimate', 'wallstreet_eps_estimate', 'wallstreet_revenue_estimate']

def get_analysis_estimate_data(ticker):
    releases = request_releases_for_company("AAPL")
    ret = []
    for release in releases:
#        if release['fiscal_year'] >= 
        for k in rd_keys:
            del release[k]

        details = request_release_consensus(release['id'])
        if not (details['wallstreet']['eps'] or details['estimize']['eps'] or details['wallstreet']['revenue'] or details['estimize']['revenue']):
            continue

        for a in ['estimize', 'wallstreet']:
            for b in details[a].keys():
                if 'revisions' in details[a][b]:
                    del details[a][b]['revisions']
        ret.append(release.update(details))

    return ret
