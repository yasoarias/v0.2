<?php
session_start();
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$event_id = $data['eventID'];
$user_id = $_SESSION['userID'];

$sql = "INSERT INTO registrations (userID, eventID) VALUES (:userID, :eventID)";
$stmt = $pdo->prepare($sql);
$stmt->execute(['userID' => $user_id, 'eventID' => $event_id]);

echo json_encode(['status' => 'success']);
?>
