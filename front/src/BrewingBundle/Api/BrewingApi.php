<?php
/**
 * Created by PhpStorm.
 * User: scaule
 * Date: 27/02/2017
 * Time: 12:54
 */

namespace BrewingBundle\Api;


use Symfony\Component\VarDumper\VarDumper;

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

    public function getLastBeer(){
        $response = $this->guzzle->get('beer/last');
        
        return json_decode($response->getBody(), true);
    }

    public function getListBeers(){
        $response = $this->guzzle->get('beers');

        return json_decode($response->getBody(), true);
    }

    public function getListBrewingCartographies(){
        $response = $this->guzzle->get('brewing_cartographies');

        return json_decode($response->getBody(), true);
    }

    public function sendBrewingCartography($data){
        $response = $this->guzzle->post('brewing_cartographies',[
           'body' => json_encode($data)
        ]);

        return $response;
    }
}