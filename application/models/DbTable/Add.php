<?php

class Application_Model_DbTable_Add extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';
    
    function addAlbum($artist_id, $title, $tags)
    {
        $data = [
            'title' => $title,
            'artist_id' => $artist_id,
            'tags' => $tags
        ];
        $this->insert($data);
    }
    
}
