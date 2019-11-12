<?php

class Application_Model_DbTable_Albums extends Zend_Db_Table_Abstract
{

    protected $_name = 'fetchTagBooks';
    protected $_primary = 'id';

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

    function addAlbum($artist, $title, $tag)
    {
        //array
        $data = [
            'artist' => $artist,
            'title' => $title,
            'tag' => $tag
        ];
        //insert
        $this->insert($data);
    }

    function editAlbum(int $id, $artist, $title, $tag)
    {
        //array
        $data = [
            'artist' => $artist,
            'title' => $title,
            'tag' => $tag
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
