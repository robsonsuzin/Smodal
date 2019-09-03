<?php

namespace SuzinCode\Smodal;

/**
 * Class Smodal
 * @package Source\Support
 */
class Smodal
{

    /**
     * @var
     */
    private $smodalname;

    /**
     * @var
     */
    private $sdebug;
    /**
     * @var
     */
    private $smodaltype;
    /**
     * @var
     */
    private $smodalhtml;
    /**
     * @var
     */
    private $smodalwidth;
    /**
     * @var
     */
    private $smodalprint;
    /**
     * @var
     */
    private $smodaleffect;
    /**
     * @var
     */
    private $smodaldata;
    /**
     * @var
     */
    private $sadddata;
    /**
     * @var
     */
    private $sremovedata;
    /**
     * @var
     */
    private $saddattr;
    /**
     * @var
     */
    private $sremoveattr;
    /**
     * @var
     */
    private $saddhtml;
    /**
     * @var
     */
    private $saddclass;
    /**
     * @var
     */
    private $sremoveclass;
    /**
     * @var
     */
    private $sremoveelement;
    /**
     * @var
     */
    private $saddcss;

    /**
     * @var
     */
    private $resultstring;

    /**
     * Smodal constructor.
     */
    public function __construct(string $smodalname = 'app_modal_dialog')
    {
        $this->setSmodalname($smodalname);
    }

    /**
     * @param string $smodalname
     * @return Smodal
     */
    public function setSmodalname(string $smodalname): Smodal
    {
        $this->smodalname = $smodalname;
        return $this;
    }

    /**
     * @param bool $sdebug
     * @return Smodal
     */
    public function setSdebug(bool $sdebug): Smodal
    {
        $this->sdebug = $sdebug;
        return $this;
    }

    /**
     * @param string $smodaltype
     * @return Smodal
     */
    public function setSmodaltype(string $smodaltype): Smodal
    {
        $this->smodaltype = $smodaltype;
        return $this;
    }

    /**
     * @param string $smodalhtml
     * @return Smodal
     */
    public function setSmodalhtml(string $smodalhtml): Smodal
    {
        $this->smodalhtml = $smodalhtml;
        return $this;
    }

    /**
     * @param int $smodalwidth
     * @return Smodal
     */
    public function setSmodalwidth(int $smodalwidth): Smodal
    {
        $this->smodalwidth = $smodalwidth;
        return $this;
    }


    /**
     * @param string $smodalprint
     * @return Smodal
     */
    public function setSmodalprint(string $smodalprint): Smodal
    {
        $this->smodalprint = $smodalprint;
        return $this;
    }


    /**
     * @param string $smodaleffect
     * @return Smodal
     */
    public function setSmodaleffect(string $smodaleffect): Smodal
    {
        $this->smodaleffect = $smodaleffect;
        return $this;
    }

    /**
     * @param string $smodaldata
     * @return Smodal
     */
    public function setSmodaldata(string $smodaldata): Smodal
    {
        $this->smodaldata = $smodaldata;
        return $this;
    }


    /**
     * @param string $element
     * @param string $data
     * @param string $value
     * @return Smodal
     */
    public function setSadddata(string $element, string $data, string $value): Smodal
    {
        $this->sadddata[] = [$element => [$data => $value]];
        return $this;
    }

    /**
     * @param string $element
     * @param string $data
     * @return Smodal
     */
    public function setSremovedata(string $element, string $data): Smodal
    {
        $this->sremovedata[] = [$element => $data];
        return $this;
    }


    /**
     * @param string $element
     * @param string $attr
     * @param string $value
     * @return Smodal
     */
    public function setSaddattr(string $element, string $attr, string $value): Smodal
    {
        $this->saddattr[] = [$element => [$attr => $value]];
        return $this;
    }


    /**
     * @param string $element
     * @param string $attr
     * @return Smodal
     */
    public function setSremoveattr(string $element, string $attr): Smodal
    {
        $this->sremoveattr[] = [$element => $attr];
        return $this;
    }


    /**
     * @param string $element
     * @param string $value
     * @return Smodal
     */
    public function setSaddhtml(string $element, string $value): Smodal
    {
        $this->saddhtml[] = [$element => $value];
        return $this;
    }


    /**
     * @param string $element
     * @param string $class
     * @return Smodal
     */
    public function setSaddclass(string $element, string $class): Smodal
    {
        $this->saddclass[] = [$element => $class];
        return $this;
    }


    /**
     * @param string $element
     * @param string $class
     * @return Smodal
     */
    public function setSremoveclass(string $element, string $class): Smodal
    {
        $this->sremoveclass[] = [$element => $class];
        return $this;
    }


    /**
     * @param string $element
     * @return Smodal
     */
    public function setSremoveelement(string $element): Smodal
    {
        $this->sremoveelement = $element;
        return $this;
    }


    /**
     * @param string $element
     * @param string $css
     * @param string $value
     * @return Smodal
     */
    public function setSaddcss(string $element, string $css, string $value): Smodal
    {
        $this->saddcss[] = [$element => [$css => $value]];
        return $this;
    }

    /**
     * @param mixed $resultstring
     */
    public function setResultstring($resultstring): void
    {
        $this->resultstring = $resultstring;
    }

    /**
     * @return mixed
     */
    private function getResultstring(): ?string
    {
        return $this->resultstring;
    }

    /**
     * @return string
     */
    public function renderString(): string
    {
        $this->setResultstring($this->getResultstring() . $this->createString('smodalname'));
        $this->setResultstring($this->getResultstring() . $this->createString('smodaltype'));
        $this->setResultstring($this->getResultstring() . $this->createString('smodalhtml'));
        $this->setResultstring($this->getResultstring() . $this->createString('smodalwidth'));
        $this->setResultstring($this->getResultstring() . $this->createString('smodalprint'));
        $this->setResultstring($this->getResultstring() . $this->createString('smodaleffect'));
        $this->setResultstring($this->getResultstring() . $this->createString('smodaldata'));
        $this->setResultstring($this->getResultstring() . $this->createString('sadddata'));
        $this->setResultstring($this->getResultstring() . $this->createString('sremovedata'));
        $this->setResultstring($this->getResultstring() . $this->createString('saddattr'));
        $this->setResultstring($this->getResultstring() . $this->createString('sremoveattr'));
        $this->setResultstring($this->getResultstring() . $this->createString('saddhtml'));
        $this->setResultstring($this->getResultstring() . $this->createString('saddclass'));
        $this->setResultstring($this->getResultstring() . $this->createString('sremoveclass'));
        $this->setResultstring($this->getResultstring() . $this->createString('sremoveelement'));
        $this->setResultstring($this->getResultstring() . $this->createString('saddcss'));

        return $this->getResultstring();
    }

    /**
     * @return object
     */
    public function renderObject(): object
    {
        $smodal = new \stdClass();
        $smodal->smodalname = $this->convertString($this->smodalname);
        $smodal->smodaltype = $this->convertString($this->smodaltype);
        $smodal->smodalhtml = $this->convertString($this->smodalhtml);
        $smodal->smodalwidth = $this->convertString($this->smodalwidth);
        $smodal->smodalprint = $this->convertString($this->smodalprint);
        $smodal->smodaleffect = $this->convertString($this->smodaleffect);
        $smodal->smodaldata = $this->convertString($this->smodaldata);
        $smodal->sadddata = $this->convertString($this->sadddata);
        $smodal->sremovedata = $this->convertString($this->sremovedata);
        $smodal->saddattr = $this->convertString($this->saddattr);
        $smodal->sremoveattr = $this->convertString($this->sremoveattr);
        $smodal->saddhtml = $this->convertString($this->saddhtml);
        $smodal->saddclass = $this->convertString($this->saddclass);
        $smodal->sremoveclass = $this->convertString($this->sremoveclass);
        $smodal->sremoveelement = $this->convertString($this->sremoveelement);
        $smodal->saddcss = $this->convertString($this->saddcss);
        $smodal->sdebug = $this->sdebug;
        return $smodal;
    }

    /**
     * @param $name
     * @return string
     */
    private function createString($name): ?string
    {
        $result = "";
        if ($this->$name) {
            $result = "{$name}='{$this->convertString($this->$name)}' ";
            $this->setResultstring($this->getResultstring() . $result);
        }
        return $result;
    }

    /**
     * @param $options
     * @return string|null
     */
    private function convertStringForeach($options): ?string
    {
        $result = '';
        foreach ($options as $option) {
            foreach ($option as $subkey => $subvalue) {
                if (is_int($subkey)) {
                    $result .= "{$subvalue}|";
                } else {
                    if (!is_array($subvalue)) {
                        $result .= "{$subkey}::{$subvalue}|";
                    } else {
                        foreach ($subvalue as $ssbkey => $ssvalue) {

                            $result .= "{$subkey}::{$ssbkey}=={$ssvalue}|";
                        }
                    }
                }
            }
        }
        return $result;
    }

    /**
     * @param $options
     * @return string
     */
    private function convertString($options): string
    {

        $result = "";
        if (!is_array($options)) {
            $result .= $options;
        } else {
            $result .= $this->convertStringForeach($options);
            $result = substr($result, 0, -1);
        }

        return $result;
    }


}