$(document).ready(function() {
    $("#registerForm").on('submit', function(e){
        $(".input_user").removeClass("is-invalid");
        $(".input_pass").removeClass("is-invalid");
        $(".feeduser").text("");
        $(".feedpass").text("");
        e.preventDefault();
		var username = $('.input_user').val();
		var pass = $('.input_pass').val();
		if(username!="" && pass!=""){
            $.ajax({
                url: "server.php",
                type: "POST",
                data: {
                    type: "login",
                    username: username,
                    pass: pass						
                },
                cache: false,
                success: function(dataResult){
                    console.log(dataResult);
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $.alert({
                            title: 'Success!',
                            content: 'Login Successful! Redirecting to home',
                            type: 'green',
                            typeAnimated: true,
                            autoClose: 'ok|3000',
                            animation: 'scale',
                            buttons: {
                                ok: function () {
                                    $(window).attr('location','home.php');
                                },
                            },
                            closeAnimation: 'zoom',
                            backgroundDismiss: true,
                            draggable: false,
                            theme: 'material'
                        });
                    }
                    else if(dataResult.statusCode==201){
                        $.alert({
                            title: 'Failed!',
                            content: 'Username/Password is incorrect!',
                            type: 'red',
                            typeAnimated: true,
                            animation: 'scale',
                            closeAnimation: 'zoom',
                            backgroundDismiss: true,
                            draggable: false,
                            theme: 'material'
                        });
                        $(".input_user").addClass("is-invalid");
                        $(".input_pass").addClass("is-invalid");
                    }
                    
                }
            });
		}
		else{
            if(username == ""){
                $(".input_user").addClass("is-invalid");
                $(".feeduser").text("This field is required");
            }
            if(pass == ""){
                $(".input_pass").addClass("is-invalid");
                $(".feedpass").text("This field is required");
            }
		}
    });
});