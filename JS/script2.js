$(function () {
    var user = sessionStorage.getItem("user");
    var mail = sessionStorage.getItem("mail");
    $("#result").text("Hola " + user + " se enviara una confirmacion a tu correo: " + mail + " " ); 
});