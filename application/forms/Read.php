<?php
class Application_Form_Read extends Zend_Form
{
    public function init()
    {
        $this->setName('album');
        $id = new Zend_Form_Element_Hidden('id');
        $id->addFilter('Int');

        $title = new Zend_Form_Element_Text('title');
        $title->setLabel('Title')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty');
            $this->addElement($title);

        $artist = new Zend_Form_Element_Select('artist');
        $artist->setLabel('Artist')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty')
            ->addMultiOptions(
                [
                    '0' => "Artist1",
                    '1' => "Artist2",
                    '2' => "Artist3",
                    '3' => "Artist4",
                    '4' => "Artist5",
                    '5' => "Artist6",
                    '6' => "Artist7",
                    '7' => "Artist8",
                    '8' => "Artist9"
                ]
            );
        $this->addElement($artist);

        $tag = new Zend_Form_Element_Multiselect('tag');
        $tag->setLabel('Tag')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty')
            ->addMultiOptions(
                [
                    '0' => "Tag1",
                    '1' => "Tag2",
                    '2' => "Tag3",
                    '3' => "Tag4",
                    '4' => "Tag5",
                    '5' => "Tag6",
                    '6' => "Tag7",
                    '7' => "Tag8",
                    '8' => "Tag9"
                ]
            );
        $this->addElement($tag);

        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setAttrib('id', 'submitbutton');
        $this->addElements([$id, $artist, $title, $tag, $submit]);
    }
}
