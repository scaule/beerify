<?php
/**
 * Created by PhpStorm.
 * User: scaule
 * Date: 27/02/2017
 * Time: 12:54
 */

namespace BrewingBundle\Api;


class BrewingApi {

    private $guzzle;

    /**
     * BrewingApi constructor.
     * @param $guzzle
     */
    public function __construct($guzzle)
    {
        $this->guzzle = $guzzle;
    }

    public function getLastBrewing(){
        $client   = $this->guzzle;
        $response = $client->get('brewing/last');
        
        return json_decode($response->getBody(), true);
    }

    public function getProfilById($id){
        $client   = $this->guzzle;
        $response = $client->get('profil/'.$id);
        return json_decode($response->getBody(), true);
    }

    public function getTemperatureFromBrewing($id){
        $client   = $this->guzzle;
        $response = $client->get('temperature/brewing/'.$id);
        return json_decode($response->getBody(), true);
    }

    public function getListProfiles(){
        $client   = $this->guzzle;
        $response = $client->get('profil');
        return json_decode($response->getBody(), true);
    }

    public function getListBrewing(){
        $client   = $this->guzzle;
        $response = $client->get('brewing');
        return json_decode($response->getBody(), true);
    }
}