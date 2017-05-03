#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import yaml
import os
import datetime
from beerifyApi import BeerifyApi
from temperatureSensor import TemperatureSensor
from datetime import datetime

def get_immediate_subdirectories(a_dir):
    return [name for name in os.listdir(a_dir)
            if os.path.isdir(os.path.join(a_dir, name))]

if __name__ == "__main__":
    #Init variables for brewing
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BOARD)
    temperaturePrecision = 2
    cartography = False
    gpioPin = 11
    havetoleave = False
    timer = 0
    currentStep = 1
    currentTime = 0
    timerStarted = False
    startTime = 0
    sleeptime = 0.1
    GPIO.setup(gpioPin, GPIO.OUT, initial = GPIO.HIGH)
    subdir = get_immediate_subdirectories("/sys/bus/w1/devices")
    temperatureSensor = []
    for dir in subdir:
        if(dir != "w1_bus_master1"):
            temperatureSensor.append(TemperatureSensor(dir))

    api = BeerifyApi()
    cartography = api.getCartography()['temperatures']
    print cartography[currentStep]

    while(havetoleave != True):
    	currentTemperature = temperatureSensor[0].read()
    	#Check if we have to start the timer
        if timerStarted != True and ( float(currentTemperature) > float(cartography[currentStep]["temperature"] - temperaturePrecision) and float(currentTemperature) < float(cartography[currentStep]["temperature"] + temperaturePrecision)) :
            print "Start timer !!!!!"
            timerStarted = True
            start_time = time.time()
    	else:
    	    #Update time started we increment time 
    	    if(timerStarted):
               print "up currentTime" 
    	       currentTime += (time.time() - start_time)
    	    
    	    #if time of current step is over we stop time and increment step   
    	    if currentTime >= cartography[currentStep]['timing'] :
                print "step is over so we change step or quit "
    		timerStarted = False
    		currentTime = 0
            currentStep += 1
    		#if we have no more steps we leave 
       		if not currentStep in cartography:
                    print "leave bacause we have no more space"
                    havetoleave = True
       	            break
        #Check if we have to up temperature or not 
        if float(currentTemperature) < float(cartography[currentStep]['temperature']):
            # Start resistance
            GPIO.setup(gpioPin, GPIO.OUT, initial = GPIO.LOW) 
            print "start resistance"
        else:
            GPIO.setup(gpioPin, GPIO.OUT, initial = GPIO.HIGH)
            print "stop resistance"
            # Stop Resistance	
        print "end loop"

    #We stop the fire
    GPIO.setup(gpioPin, GPIO.OUT, initial = GPIO.HIGH)
    print "out because " + str(havetoleave)

    #Get all sensor name 
    #subdir = get_immediate_subdirectories("/sys/bus/w1/devices")
    #temperatureSensor = []
    #for dir in subdir:
    #    if(dir != "w1_bus_master1"):
    #        temperatureSensor.append(TemperatureSensor(dir))
    #havetoleave = false        
    #while(!havetoleave):
