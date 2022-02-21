$(function () {
});

function borderojo() {

    var email = $(".email").val();

    if ($(".nombre").val() == "" || null) {
        $(".nombre").css("border", "2px solid red");
    } else {
        $(".nombre").css("border", "2px solid darkgray");
    }


    if ($(".apellido").val() == "" || null) {
        $(".apellido").css("border", "2px solid red");
    } else {
        $(".apellido").css("border", "2px solid darkgray");
    }


    if ($(".pass").val() == "" || null) {
        $(".pass").css("border", "2px solid red");
    } else {
        $(".pass").css("border", "2px solid darkgray");
    }

    if (email == "" || null || !validateEmail($(".email").val())){
        $(".email").css("border", "2px solid red");
        $(".email").attr("placeholder", "email@ejemplo.com");
    }else{
        $(".email").css("border", "2px solid darkgray");
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
    }