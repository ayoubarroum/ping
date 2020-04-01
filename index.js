
function validateEmail(email){
    var regex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validate(){
    var email = $("#email").val();
    var result = $("#result");
if (validateEmail(email)){
 result.text("Well done 👍");
 result.css("color","#2ECC71");
 $("#email").css("border-color","#2ECC71");
} else{
    result.text("Please provide a working email");
    result.css("color","red");
    $("#email").css("border-color","red");


}
return false;
}
$("#validate").on("click",validate);




