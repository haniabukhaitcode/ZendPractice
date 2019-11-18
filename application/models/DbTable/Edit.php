<?php

class Application_Model_DbTable_Edit extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';


    function editAlbum($id, $artist_id, $title, $tags)
    {

        $data = [
            'title' => $title,
            'artist_id' => $artist_id,
            'tags' => $tags
        ];

        $this->update($data, 'id= ' .  $id);
    }
}
