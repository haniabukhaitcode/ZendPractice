<?php

class Application_Model_DbTable_Edit extends Zend_Db_Table_Abstract
{

    protected $_name = 'fetchTagsAlbums';
    protected $_primary = 'id';

    function editAlbum($id, $artist, $title, $tag)
    {
      
        $data = [
            'artist' => $artist,
            'title' => $title,
            'tag' => $tag
        ];
      
        $this->update($data, 'id= ' . $id);
    }
}
