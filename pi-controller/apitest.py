#!/usr/bin/python
from beerifyApi import BeerifyApi

if __name__ == "__main__":
    #Initialize lcd and test screen 
    api = BeerifyApi()
    print api.getCartography()['temperatures'][0]['timing']