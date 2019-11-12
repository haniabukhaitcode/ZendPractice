<?php
class Application_Form_Album extends Zend_Form
{
    public function init($options = null)
    {
        $this->setName('album');
        $id = new Zend_Form_Element_Hidden('id');
        $id->addFilter('Int');

        // return response as data key contains array of albums


        $artist = new Zend_Form_Element_Select('artist');
        $artist->setLabel('Artist')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty')
            ->addMultiOptions(['']);
        $this->addElement($artist);

        $title = new Zend_Form_Element_Text('title');
        $title->setLabel('Title')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty');

        $tag = new Zend_Form_Element_Text('tag');
        $tag->setLabel('Tag')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty');

        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setAttrib('id', 'submitbutton');

        $this->addElements([$id, $artist, $title, $tag, $submit]);
    }
}
