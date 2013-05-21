<?php

function getUsers() {
	try {
		$users = ORM::for_table('member')->order_by_desc('name')->find_array();
		echo '{"users": ' . json_encode($users) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getUser($name) {
	try {
		$user = ORM::for_table('member')->where('name', $name)->find_array();
		echo '{"user": ' . json_encode($user) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

?>