<?php

namespace AppBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * BrewingCartography
 *
 * @ApiResource()
 * @ORM\Table(name="fermenting_cartography")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\FermentingCartographyRepository")
 */
class FermentingCartography
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var boolean
     * @ORM\Column(name="is_default", type="boolean")
     */
    private $isDefault;

    /**
     * @var array
     * @ORM\Column(name="temperatures", type="json_array")
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
     * @return array
     */
    public function getTemperatures()
    {
        return $this->temperatures;
    }

    /**
     * @param array $temperatures
     */
    public function setTemperatures($temperatures)
    {
        $this->temperatures = $temperatures;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return boolean
     */
    public function isIsDefault()
    {
        return $this->isDefault;
    }

    /**
     * @param boolean $isDefault
     */
    public function setIsDefault($isDefault)
    {
        $this->isDefault = $isDefault;
    }
}

