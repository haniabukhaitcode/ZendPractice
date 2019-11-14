<?php

class Application_Model_DbTable_Edit extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';

    function editAlbum($id, $artist, $title)
    {
        //array
        $data = [
            'artist_id' => $artist,
            'title' => $title,

        ];
        //update
        $this->update($data, 'id= ' . $id);
    }
}
