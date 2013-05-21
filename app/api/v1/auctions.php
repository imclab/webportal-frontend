<?php

function getAuctions() {
	try {
		$auctions = ORM::for_table('WA_Auctions')->order_by_desc('name')->find_array();
		echo '{"auctions": ' . json_encode($auctions) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getAuction($id) {
	try {
		$auction = ORM::for_table('WA_Auctions')->where('id', $id)->find_array();
		echo '{"auction": ' . json_encode($auction) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function addAuction() {
	error_log('addAuction\n', 3, '/var/tmp/php.log');
	$request = \Slim\Slim::getInstance()->request();
	$input = json_decode($request->getBody(), true);
	try {
		$auction = ORM::for_table('WA_Auctions')->create();
		$auction-> set($input);
		$auction-> save();
		echo json_encode($auction->as_array());
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateAuction($id) {
	$request = \Slim\Slim::getInstance()->request();
	$input = json_decode($request->getBody(), true);
	try {
		$auction = ORM::for_table('WA_Auctions')->where('id', $id)->find_one();
		$auction-> set($input);
		$auction-> save();
		echo json_encode($auction->as_array());
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteauction($id) {
	try {
		$auction = ORM::for_table('WA_Auctions')->where('id', $id)->find_one();
		$auction-> delete();
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByName($query) {
	try {
		$auctions = ORM::for_table('WA_Auctions')->where('name', $name)->find_array();
		echo '{"auctions": ' . json_encode($auction) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

?>