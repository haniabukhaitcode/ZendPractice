<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

    protected function _initDB()
    {

        $dbAdapter = Zend_Db::factory('Pdo_Mysql', array(
            'host'     => '127.0.0.1',
            'username' => 'hani',
            'password' => 'Hani.123!@#',
            'dbname'   => 'zf-tutorial'
        ));
        Zend_Db_Table::setDefaultAdapter($dbAdapter);
    }
}
