<?php

namespace BrewingBundle\Controller;

use BrewingBundle\Form\BrewingCartographyType;
use BrewingBundle\Form\BeerType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\VarDumper\VarDumper;

class SetterController extends Controller
{
    /**
     * Build a new cartography
     *
     * @Route("/build/cartography", name="build_cartography")
     */
    public function buildCartographyAction(Request $request){

        $form = $this->createForm(BrewingCartographyType::class);
        $form->handleRequest($request);

        if ($form->isValid()) {
            //Now we call api to register new brewing cartography
            $data = $form->getData();
            $brewingApi = $this->get('app.brewing.api');
            $brewingApi->sendBrewingCartography($data);
        }

        return $this->render('BrewingBundle:Page:brewingCartography.html.twig', array(
          'form' => $form->createView(),
        ));
    }

    /**
     * Build new beer
     *
     * @Route("/build/beer", name="build_beer")
     */
    public function buildBeerAction(Request $request){

        //get all brewing cartography
        $brewingApi = $this->get('app.brewing.api');
        $brewingCartographies = $brewingApi->getListBrewingCartographies();
        $brewingCartographyToChoice = array();
        foreach ($brewingCartographies as $brewingCartography){
            if(isset($brewingCartographyToChoice[$brewingCartography['name']])){
                $brewingCartographyToChoice[$brewingCartography['name'].' '.$brewingCartography['id']] = $brewingCartography['id'];
            }else{
                $brewingCartographyToChoice[$brewingCartography['name']] = $brewingCartography['id'];
            }
        }
        $form = $this->createForm(BeerType::class, null, ['brewing_cartography'=> $brewingCartographyToChoice]);
        $form->handleRequest($request);

        if ($form->isValid()) {
            //Now we call api to register new Beer

        }

        return $this->render('BrewingBundle:Page:beer.html.twig', array(
          'form' => $form->createView(),
        ));
    }

}
