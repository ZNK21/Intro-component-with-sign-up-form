$(function () {
});

var x = "ok"
function validacion() {

    var email = $(".email").val();

    if ($(".nombre").val() === "" || null) {
        $("input").css("border", "2px solid red");
        x = "not";
    } 
    else if ($(".apellido").val() === "" || null) {
        $("input").css("border", "2px solid red");
        x = "not";
    }
    else if (email === "" || null || !validateEmail($(".email").val())) {
        $("input").css("border", "2px solid red");
        $(".email").attr("placeholder", "Email@example.com");
        x = "not";
    }
    else if ($(".pass").val() === "" || null) {
        $("input").css("border", "2px solid red");
        x = "not";
    }
    else {
        $("input").css("border", "2px solid darkgray"); 
        x = "ok"
    }//PROBLEMA CON EL ORDEN DE PASS Y EMAIL



    
}

$(".claim").click(function () {
    validacion();
    if(x === "ok"){
        $(".formulario").submit();
        sessionStorage.setItem("user", ($(".nombre").val()))
        sessionStorage.setItem("mail", ($(".email").val()))
        $(".formulario").trigger("reset");
    }
    else{
        alert("Revisa los datos ingresados")
    }



});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}