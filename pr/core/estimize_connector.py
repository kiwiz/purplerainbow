from estimize import *
import collections
import sqlite3

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
