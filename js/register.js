$(document).ready(function() {
    $("#registerForm").on('submit', function(e){
        $(".input_user").removeClass("is-invalid");
        $(".input_first_name").removeClass("is-invalid");
        $(".input_last_name").removeClass("is-invalid");
        $(".input_email").removeClass("is-invalid");
        $(".input_pass1").removeClass("is-invalid");
        $(".input_pass2").removeClass("is-invalid");
        $(".feeduser").text("");
        $(".feedfname").text("");
        $(".feedlname").text("");
        $(".feedemail").text("");
        $(".feedpass1").text("");
        $(".feedpass2").text("");
        e.preventDefault();
        var firstName = $('.input_first_name').val();
		var lastName = $('.input_last_name').val();
		var email = $('.input_email').val();
		var username = $('.input_user').val();
		var pass1 = $('.input_pass1').val();
		var pass2 = $('.input_pass2').val();
		if(firstName!="" && email!="" && username!="" && lastName!="" && pass1!="" && pass2!=""){
            if (pass1 != pass2) {
                $(".input_pass2").addClass("is-invalid");
                $(".feedpass2").text("Passwords don't match!");
            } else {
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
                {
                    if (pass1.match(/[a-z]/g) && pass1.match(/[A-Z]/g) && pass1.match(/[0-9]/g) && pass1.match(/[^a-zA-Z\d]/g) && pass1.length >= 8)
                    {
                        $.ajax({
                            url: "server.php",
                            type: "POST",
                            data: {
                                type: "register",
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                username: username,
                                pass1: pass1						
                            },
                            cache: false,
                            success: function(dataResult){
                                console.log(dataResult);
                                var dataResult = JSON.parse(dataResult);
                                if(dataResult.statusCode==200){
                                    $.alert({
                                        title: 'Success!',
                                        content: 'Registration Successful! Redirecting to login',
                                        type: 'green',
                                        typeAnimated: true,
                                        autoClose: 'ok|3000',
                                        buttons: {
                                            ok: function () {
                                                $(window).attr('location','home.php');
                                            },
                                        },
                                        animation: 'scale',
                                        closeAnimation: 'zoom',
                                        backgroundDismiss: true,
                                        draggable: false,
                                        theme: 'material'
                                    });
                                    $(window).attr('location','login.html');
                                }
                                else if(dataResult.statusCode==201){
                                    if (dataResult.msg == "username exists") {
                                        $(".input_user").addClass("is-invalid");
                                        $(".feeduser").text("This username is taken");
                                    } else if(dataResult.msg == "email exists") {
                                        $(".input_email").addClass("is-invalid");
                                        $(".feedemail").text("This email is already in use");
                                    } else if(dataResult.msg == "error") {
                                        $.alert({
                                            title: 'Failed!',
                                            icon: 'fa fa-warning',
                                            content: 'Failed to register! Please try again!',
                                            type: 'red',
                                            typeAnimated: true,
                                            animation: 'scale',
                                            closeAnimation: 'zoom',
                                            backgroundDismiss: true,
                                            draggable: false,
                                            theme: 'material'
                                        });
                                    }
                                }
                                
                            }
                        });
                    }
                    else{
                        $.alert({
                            title: 'Error!',
                            icon: 'fa fa-warning',
                            content: 'Password requires 1 uppercase character, 1 lowercase character, 1 digit, 1 special character and a minimum of 8 characters',
                            type: 'red',
                            typeAnimated: true,
                            animation: 'scale',
                            closeAnimation: 'zoom',
                            backgroundDismiss: true,
                            draggable: false,
                            theme: 'material'
                        });                        
                        $(".input_pass1").addClass("is-invalid");
                        $(".feedpass1").text("Password does not match criteria!");
                    }
                }
                else{
                    $(".input_email").addClass("is-invalid");
                    $(".feedemail").text("Invalid email");
                }
                 
            }
		}
		else{
            if(username == ""){
                $(".input_user").addClass("is-invalid");
                $(".feeduser").text("This field is required");
            }
            if(firstName == ""){
                $(".input_first_name").addClass("is-invalid");
                $(".feedfname").text("This field is required");
            }
            if(lastName == ""){
                $(".input_last_name").addClass("is-invalid");
                $(".feedlname").text("This field is required");
            }
            if(email == ""){
                $(".input_email").addClass("is-invalid");
                $(".feedemail").text("This field is required");
            }
            if(pass1 == ""){
                $(".input_pass1").addClass("is-invalid");
                $(".feedpass1").text("This field is required");
            }
            if(pass2 == ""){
                $(".input_pass2").addClass("is-invalid");
                $(".feedpass2").text("This field is required");
            }
		}
    });
});