#!/usr/bin/python

import requests
import json
from pprint import pprint

class BeerifyApi:

    def __init__(self):
        self.base_url = 'http://localhost'

        #set headers for requests
        self.headers = {'content-type': 'application/ld+json', 'Accept': 'application/ld+json'}

        url = self.base_url + '/beer/current'
        response = requests.get(url)
        self.beer = response.json()
        #print self.beer['name'].encode('utf-8')

    def getCurrentBeer(self):
        return self.beer


    def setTemperature(self, temperature, target):
        url = self.base_url + '/temperatures'
        #we looking for brewing state
        brewingState = None
        for state in self.beer['states']:
            if state['type']['name'] == 'Brewing':
                brewingState = state
        #Now send data to api
        data = '{"value": '+temperature+',"target": '+target+',"state": "/states/'+str(brewingState['id'])+'"}'
        response = requests.post(url, data=data, headers=self.headers)

    def getCartography(self):
        return self.beer['brewingCartography']