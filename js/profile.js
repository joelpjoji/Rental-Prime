var userDetails = "";
var username = "";

$( document ).ready(function() {

    $('#loginBtn').click(function(){
        if($('#loginBtn').text() == "Logout"){
            $.ajax({
                url: "server.php",
                type: "POST",
                data: {
                    type: "logout"
                },
                cache: false,
                success: function(dataResult){
                    console.log(dataResult);
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $(window).attr('location','home.php');
                    }
                }
            });
        } else {
            $(window).attr('location','login.php');
        }
    });

    $('#regBtn').click(function(){
            $(window).attr('location','register.php');
    });

    $('#profBtn').click(function(){
        $(window).attr('location','profile.php');
    });
    
    $('#profBtn').click(function(){
        $(window).attr('location','profile.php');
    });
    $('#cartBtn').click(function(){
        $(window).attr('location','cart.php');
    });

    // Check logged in
    $.ajax({
        url: "server.php",
        type: "POST",
        data: {
            type: "statuscheckprofile"			
        },
        cache: false,
        success: function(dataResult){
            var dataResult = JSON.parse(dataResult);
            console.log(dataResult);
            if(dataResult.statusCode==200){
                $('#loginBtn').text("Logout");
                username = dataResult.username;
                userDetails = JSON.parse(dataResult.details);
                console.log(userDetails);
                $(".input_first_name").val(userDetails[0].firstName);
                $(".input_last_name").val(userDetails[0].lastName);
                $(".input_email").val(userDetails[0].email);
                $(".input_address").val(userDetails[0].address);
                $(".input_city").val(userDetails[0].city);
                $(".input_state").val(userDetails[0].state);
                $(".input_zip").val(userDetails[0].zipcode);
                $(".input_country").val(userDetails[0].country);
                $('#dropdownMenuButton').text(username)
                $('#profBtn').show()
                cartnum()
            }
            else if(dataResult.statusCode==201){
                $(window).attr('location','login.php');
            }
        }
    });

    function cartnum(){
        $.ajax({
            url: "server.php",
            type: "POST",
            data: {
                type: "cartnum",
                username: username
            },
            cache: false,
            success: function(dataResult){
                var dataResult = JSON.parse(dataResult);
                console.log(dataResult);
                cartval = parseInt(dataResult);
                $('#cartBtn').text(` Cart (${dataResult})`);
                $(`<i class="fa fa-shopping-cart"></i>`).prependTo($('#cartBtn'));
            }
        });
    }
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 250){
            $('.myBtn').fadeIn();
        }else{
            $('.myBtn').fadeOut();
        }
    });
    $('.myBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $("#registerForm").on('submit', function(e){
        $(".input_first_name").removeClass("is-invalid");
        $(".input_last_name").removeClass("is-invalid");
        $(".input_email").removeClass("is-invalid");
        $(".input_address").removeClass("is-invalid");
        $(".input_city").removeClass("is-invalid");
        $(".input_state").removeClass("is-invalid");
        $(".input_zip").removeClass("is-invalid");
        $(".input_country").removeClass("is-invalid");

        $(".feedfname").text("");
        $(".feedlname").text("");
        $(".feedemail").text("");
        $(".feedpass1").text("");
        $(".feedpass2").text("");
        $(".feedaddress").text("");
        $(".feedcity").text("");
        $(".feedstate").text("");
        $(".feedzip").text("");
        $(".feedcountry").text("");

        e.preventDefault();
        var firstName = $('.input_first_name').val();
		var lastName = $('.input_last_name').val();
		var email = $('.input_email').val();
        var address = $(".input_address").val();
        var city = $(".input_city").val();
        var state = $(".input_state").val();
        var zipcode = $(".input_zip").val();
        var country = $(".input_country").val();
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        {
            $.ajax({
                url: "server.php",
                type: "POST",
                data: {
                    type: "updateuser",
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    address: address,
                    city: city,
                    state: state,
                    zipcode: zipcode,
                    country: country		
                },
                cache: false,
                success: function(dataResult){
                    console.log(dataResult);
                    var dataResult = JSON.parse(dataResult);
                    if(dataResult.statusCode==200){
                        $.alert({
                            title: 'Success!',
                            content: 'Successfully updated!',
                            type: 'green',
                            typeAnimated: true,
                            autoClose: 'ok|3000',
                            buttons: {
                                ok: function () {
                                },
                            },
                            animation: 'scale',
                            closeAnimation: 'zoom',
                            backgroundDismiss: true,
                            draggable: false,
                            theme: 'material'
                        });
                        $(".input_first_name").val(firstName);
                        $(".input_last_name").val(lastName);
                        $(".input_email").val(email);
                        $(".input_address").val(address);
                        $(".input_city").val(city);
                        $(".input_state").val(state);
                        $(".input_zip").val(zipcode);
                        $(".input_country").val(country);
                        userDetails[0].firstName = firstName;
                        userDetails[0].lastName = lastName;
                        userDetails[0].email = email;
                        userDetails[0].address = address;
                        userDetails[0].city = city;
                        userDetails[0].state = state;
                        userDetails[0].zipcode = zipcode;
                        userDetails[0].country = country;
                    }
                    else if(dataResult.statusCode==201){
                        if(dataResult.msg == "email exists") {
                            $(".input_email").addClass("is-invalid");
                            $(".feedemail").text("This email is already in use");
                        } else if(dataResult.msg == "error") {
                            $.alert({
                                title: 'Failed!',
                                icon: 'fa fa-warning',
                                content: 'Failed to update! Please try again!',
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
        else
        {
            $(".input_email").addClass("is-invalid");
            $(".feedemail").text("Invalid email");
        }
    });

    $("#passForm").on('submit', function(e){
        $(".input_pass1").removeClass("is-invalid");
        $(".input_pass2").removeClass("is-invalid");
        $(".feedpass1").text("");
        $(".feedpass2").text("");
        e.preventDefault();
		var pass1 = $('.input_pass1').val();
		var pass2 = $('.input_pass2').val();
		if(pass1!="" && pass2!=""){
            if (pass1 != pass2) {
                $(".input_pass1").addClass("is-invalid");
                $(".feedpass1").text("Passwords don't match!");
                $(".input_pass2").addClass("is-invalid");
                $(".feedpass2").text("Passwords don't match!");
            } else {
                if (pass1.match(/[a-z]/g) && pass1.match(/[A-Z]/g) && pass1.match(/[0-9]/g) && pass1.match(/[^a-zA-Z\d]/g) && pass1.length >= 8)
                {
                    $.ajax({
                        url: "server.php",
                        type: "POST",
                        data: {
                            type: "updatepass",
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
                                    content: 'Password Changed!',
                                    type: 'green',
                                    typeAnimated: true,
                                    autoClose: 'ok|3000',
                                    buttons: {
                                        ok: function () {
                                        },
                                    },
                                    animation: 'scale',
                                    closeAnimation: 'zoom',
                                    backgroundDismiss: true,
                                    draggable: false,
                                    theme: 'material'
                                });
                                $(".input_pass1").val("");
                                $(".input_pass2").val("");
                                $(".feedpass1").text("");
                                $(".feedpass2").text("");
                            }
                            else if(dataResult.statusCode==201){
                                if(dataResult.msg == "error") {
                                    $.alert({
                                        title: 'Failed!',
                                        icon: 'fa fa-warning',
                                        content: 'Failed to change password! Please try again!',
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
		}
		else{
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

    $("#addProductForm").on('submit', function(e){
        e.preventDefault();
		var itemName = $('.input_name').val();
		var description = $('.input_desc').val();
		var pic = $('.input_pic').val();
		var company = $('.input_company').val();
		var price = $('.input_price').val();
		var stock = $('.input_stock').val();
		var lightDesc = $('.input_lightDesc').val();
		var category = $('.input_category').val();
		var subCategory = $('.input_subcategory').val();
		var deposit = $('.input_deposit').val();
		$.ajax({
            url: "server.php",
            type: "POST",
            data: {
                type: "addProduct",
                itemName: itemName,
                description: description,
                pic: pic,
                company: company,
                price: price,
                stock: stock,
                lightDesc: lightDesc,
                category: category,
                subCategory: subCategory,
                deposit: deposit
            },
            cache: false,
            success: function(dataResult){
                console.log(dataResult);
                var dataResult = JSON.parse(dataResult);
                if(dataResult.statusCode==200){
                    $.alert({
                        title: 'Success!',
                        content: 'Product Added!',
                        type: 'green',
                        typeAnimated: true,
                        autoClose: 'ok|3000',
                        buttons: {
                            ok: function () {
                            },
                        },
                        animation: 'scale',
                        closeAnimation: 'zoom',
                        backgroundDismiss: true,
                        draggable: false,
                        theme: 'material'
                    });
                    $('.input_name').val("");
                    $('.input_desc').val("");
                    $('.input_pic').val("");
                    $('.input_company').val("");
                    $('.input_price').val("");
                    $('.input_stock').val("");
                    $('.input_lightDesc').val("");
                    $('.input_deposit').val("");
                }
                else if(dataResult.statusCode==201){
                    if(dataResult.msg == "error") {
                        $.alert({
                            title: 'Failed!',
                            icon: 'fa fa-warning',
                            content: 'Failed to add product! Please try again!',
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
    });
});