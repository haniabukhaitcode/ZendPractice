<?php

class Application_Model_DbTable_Delete extends Zend_Db_Table_Abstract
{

    protected $_name = 'albums';
    protected $_primary = 'id';


    function deleteAlbum(int $id)
    {
        $this->delete('id= ' . $id);
        //delete
    }
}
