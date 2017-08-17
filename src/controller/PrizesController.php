<?php

require_once WWW_ROOT . 'controller' . DS . 'Controller.php';

class PrizesController extends Controller {

  function __construct() {
  }

  public function index() {
    $result = false;
    if(isset($_GET['score']) && is_numeric($_GET['score'])) {
      $result = true;
    }
    header('Content-Type: application/json');
    echo json_encode(array('result' => $result));
    exit();
  }

}
