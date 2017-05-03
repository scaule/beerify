<?php
namespace AppBundle\Controller;


use AppBundle\Entity\Beer;
use AppBundle\Entity\State;
use AppBundle\Entity\Temperature;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Tests\JsonSerializableObject;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\VarDumper\VarDumper;

class BrewingController extends Controller
{

    /**
     * @Route("/beer/last")
     */
    public function getLastBeerAction()
    {
        $beer = $this->getDoctrine()
          ->getRepository('AppBundle:Beer')
          ->findOneBy(
            array(),
            array('id' => 'DESC')
          );
        $encoders = array(new JsonEncoder());
        $normalizer = new ObjectNormalizer();
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });
        $normalizers = array($normalizer);
        $serializer = new Serializer($normalizers, $encoders);
        $currentBeer = $serializer->serialize($beer, 'json');
        
        return new Response($currentBeer);
    }

    /**
     * @Route("/beer/current")
     */
    public function getCurrentBeerAction()
    {
        $beer = $this->getDoctrine()
          ->getRepository('AppBundle:Beer')
          ->findOneBy(
            array('isCurrent' => true),
            array('id' => 'DESC')
          );

        $encoders = array(new JsonEncoder());
        $normalizer = new ObjectNormalizer();
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });
        $normalizers = array($normalizer);
        $serializer = new Serializer($normalizers, $encoders);
        $currentBeer = $serializer->serialize($beer, 'json');

        return new Response($currentBeer);
    }

    /**
     * @Route("/test")
     */
    public function testAction()
    {
        $em = $this->getDoctrine()->getManager();
        $beer = new Beer();
        $beer->setName('tt');
        $state = new State();
        $state->setTemperatures(array(new Temperature()));
        $beer->setStates(array($state));
        $em->persist($state);
        $em->persist($beer);
        $em->flush();
    }

}