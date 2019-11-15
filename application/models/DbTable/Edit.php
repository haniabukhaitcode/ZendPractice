<?php

class Application_Model_DbTable_Edit extends Zend_Db_Table_Abstract
{

    protected $_name = 'fetchTagsAlbums';
    protected $_primary = 'id';

    function editAlbum($id, $artist, $title, $tag)
    {
      
        $data = [
            'title' => $title,
            'artist' => $artist,
            'tag' => $tag
        ];
      
        $this->update($data, 'id= ' . $id);
    }
}
