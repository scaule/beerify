<?php

namespace BrewingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\VarDumper\VarDumper;

class ListerController extends Controller
{

    /**
     * List all brewing cartography
     *
     * @Route("/", name="index")
     */
    public function indexAction()
    {
        $brewingApi = $this->get('app.brewing.api');
        $beers = $brewingApi->getListBeers();

        return $this->render('BrewingBundle:Page:index.html.twig',['beers' => $beers]);
    }

    /**
     * List all brewing cartography
     *
     * @Route("/list/brewing-cartography", name="brewing_cartography_list")
     */
    public function listCartographyAction(){
        $brewingApi = $this->get('app.brewing.api');
        $brewingCartography = $brewingApi->getListBrewingCartographies();
        return $this->render('BrewingBundle:Page:listBrewingCartography.html.twig',['brewing_cartographies' => $brewingCartography]);
    }

    /**
     * get last brewing
     *
     * @Route("/api/brewing/last", name="get_last_brewing")
     */
    public function getCurrentBeerBrewingAction(){
        $brewingApi = $this->get('app.brewing.api');
        $currentBeer = $brewingApi->getLastBeer();

        return new JsonResponse($currentBeer);
    }
}
