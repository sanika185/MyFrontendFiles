<!DOCTYPE html>
<html>
<head>
    <title>Student Entry Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            padding: 50px;
        }
        form {
            background-color: #fff;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px #ccc;
            width: 300px;
            margin: auto;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        input[type="text"], input[type="submit"] {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #4285F4;
            color: white;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #357ae8;
        }
    </style>
</head>
<body>

<h2>Enter Student Details</h2>
<form action="database_handling.php" method="post">
    Roll No: <input type="text" name="rollno" required>
    Name: <input type="text" name="name" required>
    Class: <input type="text" name="class" required>
    <input type="submit" value="Add Student">
</form>

</body>
</html>
