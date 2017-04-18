<?php

namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Beer
 *
 * @ApiResource(attributes={"denormalization_context"={"groups"={"beer"}}})
 * @ORM\Table(name="beer")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BeerRepository")
 */
class Beer
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     * @Groups({"beer"})
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var \DateTime
     * @Groups({"beer"})
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity="State", mappedBy="beer")
     */
    private $states;


    /**
     * @ORM\ManyToOne(targetEntity="BrewingCartography")
     */
    private $brewingCartography;


    /**
     * @ORM\ManyToOne(targetEntity="FermentingCartography")
     */
    private $fermentingCartography;

    /**
     * Beer constructor.
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Beer
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     *
     * @return Beer
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @return mixed
     */
    public function getStates()
    {
        return $this->states;
    }

    /**
     * @param mixed $states
     */
    public function setStates($states)
    {
        $this->states = $states;
    }

    /**
     * @return mixed
     */
    public function getBrewingCartography()
    {
        return $this->brewingCartography;
    }

    /**
     * @param mixed $brewingCartography
     */
    public function setBrewingCartography($brewingCartography)
    {
        $this->brewingCartography = $brewingCartography;
    }

    /**
     * @return mixed
     */
    public function getFermentingCartography()
    {
        return $this->fermentingCartography;
    }

    /**
     * @param mixed $fermentingCartography
     */
    public function setFermentingCartography($fermentingCartography)
    {
        $this->fermentingCartography = $fermentingCartography;
    }
}

