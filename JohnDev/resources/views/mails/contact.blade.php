<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
        <?php
        $nombre = $data["name"];
        $email = $data["email"];
        $phone = $data["phone"];
        $subject = $data["subject"];
        $message = $data["message"];
        ?>
        <p>Nombre: {{$nombre}}</p>
        <p>email: {{$email}}</p>
        <p>phone: {{$phone}}</p>
        <p>subject: {{$subject}}</p>
        <p>message: {{$message}}</p>
</body>
</html>