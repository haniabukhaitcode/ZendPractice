<?php

class Application_Model_DbTable_Albums extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';

    function getAlbum(int $id)
    {
        //fetch
        $row = $this->fetchRow('id= ' . $id);
        //check
        if (!$row) {
            throw new Exception("WTF wrong $id");
        }
        return $row->toArray();
    }

    function addAlbum($artist, $title)
    {
        //array
        $data = [
            'artist' => $artist,
            'title' => $title
        ];
        //insert
        $this->insert($data);
    }

    function editAlbum(int $id, $artist, $title)
    {
        //array
        $data = [
            'artist' => $artist,
            'title' => $title
        ];
        //update
        $this->update($data, 'id= ' . $id);
    }

    function deleteAlbum(int $id)
    {
        $this->delete('id= ' . $id);
        //delete
    }
}
