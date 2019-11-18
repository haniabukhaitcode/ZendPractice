<?php

class Application_Model_DbTable_Add extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';
    
    function addAlbum($artist, $title, $tags)
    {
        $data = [
            'title' => $title,
            'artist' => $artist,
            'tags' => $tags
        ];
        $this->insert($data);
    }
    
}
