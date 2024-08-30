<?php
require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$description = $data['description'];
$date = $data['date'];
$location = $data['location'];

$sql = "INSERT INTO events (title, description, date, location) VALUES (:title, :description, :date, :location)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
  'title' => $title,
  'description' => $description,
  'date' => $date,
  'location' => $location
]);

echo json_encode(['status' => 'success']);
?>
