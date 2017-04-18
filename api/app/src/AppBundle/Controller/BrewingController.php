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
        $normalizers = array(new GetSetMethodNormalizer());
        $serializer = new Serializer($normalizers, $encoders);

        return new Response($serializer->serialize($beer, 'json'));
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