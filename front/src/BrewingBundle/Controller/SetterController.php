<?php

namespace BrewingBundle\Controller;

use BrewingBundle\Form\BrewingCartographyType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
}
