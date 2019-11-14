<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */ }

    public function indexAction()
    {
        $this->view->title = "My Albums";
        //$this->view->username = "hani";
        // action body
    }

    public function albumsAction()
    {
        $albums = new Application_Model_DbTable_Albums();
        $albums = $albums->fetchAll();

        // return response as data key contains array of albums

        $this->_helper->json->sendJson(['data' => $albums->toArray()]);
    }

    function addAction()
    {
        $this->_helper->layout()->disableLayout();
        // $this->_helper->viewRenderer->setNoRender(true);
        $form = new Application_Form_Album();
        $this->view->form = $form;

        if ($this->getRequest()->isPost()) {
            $formData = $this->getRequest()->getPost();
            if ($form->isValid($formData)) {
                $artist = $form->getValue('artist');
                $title = $form->getValue('title');
                $albums = new Application_Model_DbTable_Add();
                $albums->addAlbum($artist, $title);

                $this->_helper->redirector('index');
            } else {
                $form->populate($formData);
            }
        }
    }

    function editAction()
    {
        $this->_helper->layout()->disableLayout();
        // $this->_helper->viewRenderer->setNoRender(true);
        $form = new Application_Form_Album();
        $form->submit->setLabel('Save');
        $this->view->form = $form;

        if ($this->getRequest()->isPost()) {
            $formData = $this->getRequest()->getPost();
            if ($form->isValid($formData)) {
                $id = $form->getValue('id');
                $artist = $form->getValue('artist');
                $title = $form->getValue('title');
                $tag = $form->getValue('tagName');
                $albums = new Application_Model_DbTable_Edit();
                $albums->editAlbum($id, $artist, $title);

                $this->_helper->redirector('index');
            } else {
                $form->populate($formData);
            }
        } else {
            $id = $this->_getParam('id', 0);
            if ($id > 0) {
                $albums = new Application_Model_DbTable_Albums();
                $form->populate($albums->getAlbum($id));
            }
        }
    }

    public function deleteAction()
    {
        if ($this->getRequest()->isPost()) {
            $del = $this->getRequest()->getPost('del');
            if ($del == 'Yes') {
                $id = $this->getRequest()->getPost('id');
                $albums = new Application_Model_DbTable_Delete();
                $albums->deleteAlbum($id);
            }
            $this->_helper->redirector('index');
        } else {
            $id = $this->_getParam('id', 0);
            $albums = new Application_Model_DbTable_Albums();
            $this->view->album = $albums->getAlbum($id);
        }
    }
}
