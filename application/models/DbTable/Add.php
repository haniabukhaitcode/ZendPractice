<?php

class Application_Model_DbTable_Add extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';
    function addAlbum($artist, $title, $tag)
    {
        $data = [
            'title' => $title,
            'artist' => $artist,
            'tag' => $tag
        ];
        $this->insert($data);
    }
    
}
