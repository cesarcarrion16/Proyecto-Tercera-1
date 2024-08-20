<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Desplegable</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./styles/main.css">
</head>

<body>
    <header>
        <img class="logo" src="./img/Logo.png" alt="">
        <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
        <nav class="nav" id="nav">
            <button id="cerrar" class="cerrar-menu"><i class="bi bi-x-lg"></i></button>
            <ul class="nav-list">
                <li><a href="./index.php">Inicio</a></li>
                <li><a href="./quienes_somos.php">¿Quienes somos?</a></li>
                <li><a href="./servicios.php">Servicios</a></li>
                <li><a href="./que_hacemos.php">¿Que hacemos?</a></li>
                <li><a href="./contactos.php">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <script src="./script/hamburger-icon.js"></script>
    
</body>

</html>