<?php

class Application_Model_DbTable_Read extends Zend_Db_Table_Abstract
{

    protected $_name = 'fetchTagsAlbums';
    protected $_primary = 'id';

    function getAlbum($id)
    {
        //fetch
        $row = $this->fetchRow('id= ' . $id);
        //check
        if (!$row) {
            throw new Exception("WTF wrong $id");
        }
        return $row->toArray();
    }
}
