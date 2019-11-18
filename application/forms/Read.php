<?php
class Application_Form_Read extends Zend_Form
{
    public function init($options = null)
    {
        $this->setName('album')->setAction('');
        $id = new Zend_Form_Element_Hidden('id');
        $id->addFilter('Int');

        $title = new Zend_Form_Element_Text('title');
        $title->setLabel('Title')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty');
        $this->addElement($title);

        $artist_id = new Zend_Form_Element_Select('artist_id');
        $artist_id->setLabel('Artist')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty')
            ->setAttrib("type", "text")
            ->setAttrib("style", "width:100%")
            ->setAttrib("class", "form-control select2-single")
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
        $this->addElement($artist_id);

        $tags = new Zend_Form_Element_Multiselect('tags');
        $tags->setLabel('Tag')
            ->setRequired(true)
            ->addFilter('StripTags')
            ->addFilter('StringTrim')
            ->addValidator('NotEmpty')
            ->setAttrib("class", "form-control tags select2-multiple valid")
            ->setAttrib("aria-invalid", "false")
            ->setAttrib("style", "width:100%;")
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
        $this->addElement($tags);

        $submit = new Zend_Form_Element_Submit('submit');
        $submit->setAttrib('id', 'submitbutton');
        $this->addElements([$id, $artist_id, $title, $tags, $submit]);
    }
}
