<?php

class Application_Model_DbTable_Albums extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';

    function addAlbum($artist, $title)
    {
        $data = [
            'artist' => $artist,
            'title' => $title
        ];
        $this->insert($data);
    }
}
