<?php

class Application_Model_DbTable_Add extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';
    function addAlbum($artist, $title, $tag)
    {
        $data = [
            'artist' => $artist,
            'title' => $title,
            'tag' => $tag
        ];
        $this->insert($data);
    }
    
}
