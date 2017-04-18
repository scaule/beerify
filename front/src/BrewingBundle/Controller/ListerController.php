<?php

namespace BrewingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
//VarDumper::dump($brewingCartography);die;
        return $this->render('BrewingBundle:Page:listBrewingCartography.html.twig',['brewing_cartographies' => $brewingCartography]);
    }

    /**
     * get last brewing
     *
     * @Route("/api/brewing/last", name="get_last_brewing")
     */
    public function getCurrentBeerBrewingAction(){
        $brewingApi = $this->get('app.brewing.api');
        $brewing = $brewingApi->getLastBrewing();
        $temperatures = $brewingApi->getTemperatureFromBrewing($brewing['_id']);
        $profil = $brewingApi->getProfilById($brewing['profilId']);

        $profil['temperatures'] = json_decode($profil['temperatures']);
        $profil['timing'] = json_decode($profil['timing']);
        // create date for profil interval
        $startDate = null;

        //clean date
        foreach ($temperatures as $key => $temperature){
            $temperatures[$key]['date'] =  (new \DateTime($temperature['date']))->format('Y-m-d H:i:s');
            if($temperature['value'] > $profil['temperatures'][0]){
                $startDate = new \DateTime($temperature['date']);
                break;
            }
        }
        $profil['dates'] = array();
        $profil['dates'][] = $startDate->format('Y-m-d H:i:s');
        foreach ($profil['timing'] as $timing){
            $startDate->modify('+'.$timing.' minutes');
            $profil['dates'][] = $startDate->format('Y-m-d H:i:s');
        }

        $datas = ['brewing' => $brewing,'temperature' => $temperatures,'profil' => $profil];

        return new JsonResponse($datas);
    }
}
