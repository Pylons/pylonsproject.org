#! /usr/bin/env python

import json
import os
import requests
import sys

TESTMODE=False # set to true when developing to get github api data from a local snapshot
JSON_FILE = '%s/../../src/templates/projects.json' % os.path.dirname(os.path.realpath(__file__))
GITHUB_URL = 'https://api.github.com/orgs/pylons/repos'

def load_github_repos(testmode = False):
    """
        Get public data for all of Pylons' github repos
        Pagination has to be used
        
        Due to rate limiting, use TESTMODE when developing 
    """
    if not testmode:
        repos = []
        
        page = 0
        headers = { 'Accept' : 'application/vnd.github.v3+json', } 
        while True:
            page += 1
            url = "%s?page=%d" % (GITHUB_URL, page)
            r = requests.get(url, headers=headers)        
            data = r.json()
            if 'message' in data and "API rate limit" in data['message']:
                print 'o_O: %s' % data['message']
                return None

            if data:
                repos.extend(data)
            else:
                return repos

    else:
        # grab them from a snapshot file
        snapshot = "%s/github_snapshot.json" % os.path.dirname(os.path.realpath(__file__))
        with open(snapshot) as json_file:
            return json.load(json_file)

def update_projects():
    """
        Update the projects.json file with fresh github data (last updated, watcher count, fork count, ...)

    """
    # load data from github
    github_repos = load_github_repos(testmode=TESTMODE)
    if not github_repos:
        # could not load repo data (probably due to rate limiting), nothing to do here ..
        sys.exit(1)

    # load local projects.json file
    with open(JSON_FILE) as json_file:
        json_data = json.load(json_file)

    # populate it with fresh github data
    for project in json_data['projects']:
        # match by repo url
        github_data = filter(lambda g: g['html_url'] == project['sourceUrl'], github_repos)
        github_data = github_data[0] if github_data else {}

        iso_date = github_data.get('updated_at', '-1')
        # translate ISO 8601 date (ie. 2016-11-28T02:52:08Z) into d.m.y so we don't have to do that in the templates
        # also, because this code will be ran from cron, do that with vanilla python (ie. no dateutils)
        if "T" in iso_date:
            ymd = iso_date.split("T")[0].replace("-0", "-")
            (y, m, d) = ymd.split("-")
            dmy_date = "%s.%s.%s" % (d,m,y)
            project['updated_at'] = dmy_date
        else:
            project['updated_at'] = iso_date
        project['stargazers_count'] = github_data.get('stargazers_count', -1)
        # note: watchers count is currently bugged - the api returns the number of stargazers in this field
        project['watchers_count'] = github_data.get('watchers_count', -1)
        project['forks_count'] = github_data.get('forks_count', -1)
        project['open_issues_count'] = github_data.get('open_issues_count', -1)
        if not project.get('websiteUrl', None):
           project['websiteUrl'] = github_data.get('homepage', '') 
        
    # write it back
    with open(JSON_FILE, 'w') as outfile:
        json.dump(json_data, outfile, indent=2)

    # we crontab friendly :)
    sys.exit(0)    
    
if __name__ == "__main__":
    update_projects() 