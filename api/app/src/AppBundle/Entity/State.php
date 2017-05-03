<?php
namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;


/**
 * Beer
 *
 * @ApiResource(attributes={"denormalization_context"={"groups"={"state"}}})
 * @ORM\Table(name="state")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\StateRepository")
 */
class State
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
     * @Groups({"state"})
     * @var \DateTime
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @Groups({"state"})
     * @ORM\ManyToOne(targetEntity="Beer", inversedBy="states")
     * @ORM\JoinColumn(name="beer_id", referencedColumnName="id")
     */
    private $beer;

    /**
     * @Groups({"state"})
     * @ORM\ManyToOne(targetEntity="StateType")
     */
    private $type;

    /**
     * @var Temperature $temperatures
     * @ORM\OneToMany(targetEntity="Temperature", mappedBy="state", cascade={"remove", "persist"})
     */
    private $temperatures;

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
    public function getBeer()
    {
        return $this->beer;
    }

    /**
     * @param mixed $beer
     */
    public function setBeer($beer)
    {
        $this->beer = $beer;
    }

    /**
     * @return string
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * @return mixed
     */
    public function getTemperatures()
    {
        return $this->temperatures;
    }

    /**
     * @param mixed $temperatures
     */
    public function setTemperatures($temperatures)
    {
        $this->temperatures = $temperatures;
    }


}