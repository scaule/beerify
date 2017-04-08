<?php


namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * Temperature
 *
 * @ApiResource
 * @ORM\Table(name="temperature")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TemperatureRepository")
 */
class Temperature
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
     * @ORM\ManyToOne(targetEntity="State", inversedBy="temperatures")
     * @ORM\JoinColumn(name="state_id", referencedColumnName="id")
     */
    private $state;

    /**
     * @var \Float value
     * @ORM\Column(type="float", precision = 3, scale = 2)
     */
    private $value;

    /**
     * @var \DateTime createdAt
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getState()
    {
        return $this->state;
    }

    /**
     * @param mixed $state
     */
    public function setState($state)
    {
        $this->state = $state;
    }

    /**
     * @return value
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param value $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param \DateTime $createdAt
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    }


}