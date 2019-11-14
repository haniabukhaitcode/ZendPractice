<?php

class Application_Model_DbTable_Albums extends Zend_Db_Table_Abstract
{

    protected $_name = 'fetchTagAlbums';
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
}
