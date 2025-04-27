<?php
session_start();

//Előre megadott belépési adatok
$helyes_felhasznalonev = "admin";
$helyes_jelszo = "admin";

//ellenőrzés
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $felhasznalonev = $_POST["username"] ?? '';
    $jelszo = $_POST["password"] ?? '';
    
    if ($felhasznalonev === $helyes_felhasznalonev && $jelszo === $helyes_jelszo) {
        //Sikeres belépés
        $_SESSION["loggedin"] = true;
        $_SESSION["username"] = $felhasznalonev;
        header("Location: index.html");
        exit();

        // Sikertelen belépés
    } else {
        
        echo "<script>alert('Hibás felhasználónév vagy jelszó!'); window.location.href='Belepes.html';</script>";
    }
} else {
    header("Location: Belepes.html");
    exit();
}
