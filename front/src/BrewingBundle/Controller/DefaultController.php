<?php

namespace BrewingBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        $brewingApi = $this->get('app.brewing.api');
        $profils = $brewingApi->getListProfiles();
        $brewings = $brewingApi->getListBrewing();
        return $this->render('BrewingBundle:Page:index.html.twig',['profils' => $profils,'brewings' => $brewings]);
    }

    public function getCurrentBrewingAction(){
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
