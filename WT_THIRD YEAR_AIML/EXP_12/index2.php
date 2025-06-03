<?php
// Connection details
$localhost = "localhost:3306";
$dbusername = "root";
$dbpassword = "";
$dbname = "File";

// Connection
$conn = mysqli_connect($localhost, $dbusername, $dbpassword, $dbname);

// Initialize message variable
$message = '';

// Check if form is submitted
if (isset($_POST["submit"])) {
    // Retrieve file title
    $title = $_POST["title"];

    // File name with a random number so that similar files don't get replaced
    $pname = rand(1000, 10000) . "-" . $_FILES["file"]["name"];

    // Temporary file name to store file
    $tname = $_FILES["file"]["tmp_name"];

    // Upload directory path
    $uploads_dir = 'images';

    // Check if the directory exists, if not, create it
    if (!is_dir($uploads_dir)) {
        mkdir($uploads_dir, 0777, true);
    }

    // Move the uploaded file to a specific location
    if (move_uploaded_file($tname, $uploads_dir . '/' . $pname)) {
        // SQL query to insert into database
        $sql = "INSERT INTO fileup (title, image) VALUES ('$title', '$pname')";

        // Execute query
        if (mysqli_query($conn, $sql)) {
            // Set success message
            $message = "File successfully uploaded";
            
        } else {
            // Set error message
            $message = "Error: " . mysqli_error($conn);
        }
    } else {
        // Set error message
        $message = "Failed to move uploaded file. Check your upload directory permissions.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>File Upload</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <label>Title</label>
        <input type="text" name="title">
        <label>File Upload</label>
        <input type="file" name="file">
        <input type="submit" name="submit">
    </form>

    <!-- Display message -->
    <?php if(!empty($message)): ?>
        <p><?php echo $message; ?></p>
    <?php endif; ?>
</body>
</html>

