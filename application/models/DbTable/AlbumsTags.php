<?php

class Application_Model_DbTable_AlbumsTags extends Zend_Db_Table_Abstract
{

    protected $_name = 'AlbumsTags';


    function getAlbumsTags($album_id, $tag_id)
    {
        //fetch
        $data = [
            'album_id' => $album_id,
            'tag_id' => $tag_id
        ];

        $this->insert($data);
    }
}




// class Application_Model_DbTable_AlbumsTags extends Zend_Db_Table_Abstract
// {

//     protected $_name = 'albums_tags';


//     //fetch
//     protected $data = [
//         'album_id',
//         'tag_id'
//     ];

//     //return $row->toArray();

// }
