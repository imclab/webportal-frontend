<?php

require '../vendor/autoload.php';
require '../config.php';
require 'auctions.php';
require 'users.php';

$app = new \Slim\Slim(array(
    'debug' => true,
	'mode' => 'development'
));

$app->get('/', function () {
	echo "root!";
});

$app->get('/auctions', 'getAuctions');
$app->get('/auctions/:id', 'getAuction');
$app->get('/auctions/search/:query', 'findByName');
$app->post('/auctions', 'addAuction');
$app->put('/auctions/:id', 'updateAuction');
$app->delete('/auctions/:id', 'deleteAuction');

$app->get('/users', 'getUsers');
$app->get('/users/:name', 'getUser');

$app->run();


function authenticate(\Slim\Route $route) {
	$app = \Slim\Slim::getInstance();
	$uid = $app->getEncryptedCookie('uid');
	$key = $app->getEncryptedCookie('key');
	if (validateUserKey($uid, $key) === false) {
		$app->halt(401);
	}
}

function validateUserKey($uid, $key) {

}

?>