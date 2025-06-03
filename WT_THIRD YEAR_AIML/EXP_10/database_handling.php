<!DOCTYPE html>
<html>
<head>
    <title>Student Records</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
            background-color: #f4f4f4;
        }
        h2 {
            color: #444;
        }
        table {
            width: 70%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #999;
        }
        th, td {
            padding: 12px;
            text-align: center;
        }
        th {
            background-color: #4285F4;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #eef;
        }
    </style>
</head>
<body>

<?php
// Connect to MySQL
$con = mysqli_connect("localhost", "user6", "user6");

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Select database
mysqli_select_db($con, "academic");

// Insert data
$sql = "INSERT INTO student (rollno, name, class) 
        VALUES ('$_POST[rollno]', '$_POST[name]', '$_POST[class]')";

if (!mysqli_query($con, $sql)) {
    die("Error inserting record: " . mysqli_error($con));
}

echo "<h2>1 record added successfully!</h2>";

// Retrieve and display data
$result = mysqli_query($con, "SELECT * FROM student");

echo "<h2>Student Records</h2>";
echo "<table>
<tr>
    <th>Roll No</th>
    <th>Name</th>
    <th>Class</th>
</tr>";

while ($row = mysqli_fetch_array($result)) {
    echo "<tr>
            <td>{$row['rollno']}</td>
            <td>{$row['name']}</td>
            <td>{$row['class']}</td>
          </tr>";
}

echo "</table>";

// Close connection
mysqli_close($con);
?>

</body>
</html>
