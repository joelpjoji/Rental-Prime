var cartDetails = "";

function Bedit(id){
    console.log(id.substring(7,id.length))
    sessionStorage.setItem("cartID",id.substring(7,id.length))
    for (let i = 0; i < cartDetails.length; i++) {
        if(cartDetails[i].id == id.substring(7,id.length))
        {
            $(window).attr('location',`item.php?p=${cartDetails[i].itemID}`);
            break
        }
    }
}
function Brem(id){
    console.log(id.substring(9,id.length))
    $.ajax({
        url: "server.php",
        type: "POST",
        data: {
            type: "removecartitem",
            id: id.substring(9,id.length)
        },
        cache: false,
        success: function(dataResult){
            console.log(dataResult);
            var dataResult = JSON.parse(dataResult);
            if(dataResult.statusCode==200){
                $.alert({
                    title: 'Success!',
                    content: 'Item removed from cart!',
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
            }
            var re = document.getElementsByClassName("card")
            var rse = "card" + id.substring(9,id.length)
            for (let i = 0; i < re.length; i++) {
                if(re[i].id == rse)
                {
                    re[i].remove()
                    break
                }
            }
            for (let i = 0; i < cartDetails.length; i++) {
                if(cartDetails[i].id == id.substring(9,id.length))
                {
                    cartDetails.splice(i,1)
                    break
                }
            }
            calce()
        }
    });
}

function calce(){
    console.log(cartDetails)
    var totR = 0;
    var totD = 0;
    for (let index = 0; index < cartDetails.length; index++) {
        totR += parseFloat(cartDetails[index].price);
        totD += parseFloat(cartDetails[index].deposit);
    }
    $('.toti').text("My cart - " + cartDetails.length + " items")
    $('.totd').text("Refundable Deposit - " + totD + " Rs")
    if(cartDetails.length == 0){
        $('.totc').text("No items in cart")
        $('.totgst').text("GST - ")
        $('.totdf').text("Delivery Fees - ")
    }
    $('#cartBtn').text(` Cart (${cartDetails.length})`);
    $(`<i class="fa fa-shopping-cart"></i>`).prependTo($('#cartBtn'));
}

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
    $('#cartBtn').click(function(){
        $(window).attr('location','cart.php');
    });

    $('#logioBtn').click(function(){
        if($('#logioBtn').text() == "Logout"){
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

    // Check logged in
    $.ajax({
        url: "server.php",
        type: "POST",
        data: {
            type: "statuscheck"				
        },
        cache: false,
        success: function(dataResult){
            console.log(dataResult);
            var dataResult = JSON.parse(dataResult);
            if(dataResult.statusCode==200){
                $('#loginBtn').text("Logout");
                username = dataResult.username;
                $('#dropdownMenuButton').text(username)
                $('#profBtn').show()
                fetchCart()
            }
            else if(dataResult.statusCode==201){
                $('#loginBtn').text("Login")
                $('#dropdownMenuButton').text("Account")
                $('#profBtn').hide()
                $('.toti').text("My cart - " + cartDetails.length + " items")
                $('.totc').text("No items in cart")
                $('.totd').text("Refundable Deposit - 0Rs")
                $('.totgst').text("GST - 0%")
                $('.totdf').text("Delivery Fees - 0Rs")
            }
        }
    });
    
    function fetchCart(){
        // Fetch cart items
        $.ajax({
            url: "server.php",
            type: "POST",
            data: {
                type: "fetchcart",
                username: username
            },
            cache: false,
            success: function(dataResult){
                var dataReslt = JSON.parse(dataResult);
                cartDetails = dataReslt;
                console.log(dataReslt);
                $('.toti').text("My cart - " + dataReslt.length + " items")
                $('.totgst').text("GST - 13%")
                $('.totdf').text("Delivery Fees - 500Rs")
                var totR = 0;
                var totD = 0;
                $('#cartBtn').text(` Cart (${dataReslt.length})`);
                $(`<i class="fa fa-shopping-cart"></i>`).prependTo($('#cartBtn'));
                if(dataReslt.length == 0){
                    $('.itemx').text("No items in your cart")
                    $('.toti').text("My cart - " + cartDetails.length + " items")
                    $('.totc').text("No items in cart")
                    $('.totd').text("Refundable Deposit - " + totD + " Rs")
                    $('.totgst').text("GST - 0%")
                    $('.totdf').text("Delivery Fees - 0Rs")
                }
                for (let index = 0; index < dataReslt.length; index++) {
                    totR += parseFloat(dataReslt[index].price);
                    totD += parseFloat(dataReslt[index].deposit);
                    var card = $(`<div class="card" id="card${dataReslt[index].id}"></div>`).appendTo($('.itemx'));
                    var cardbody = $('<div class="card-body"></div>').appendTo(card);
                    var row = $('<div class="row around-xs"></div>').appendTo(cardbody);
                    var col1 = $('<div class="col-xs-3"></div>').appendTo(row);
                    var col2 = $('<div class="col-xs-3"></div>').appendTo(row);
                    var col3 = $('<div class="col-xs-3"></div>').appendTo(row);
                    var col4 = $('<div class="col-xs-3"></div>').appendTo(row);
                    var img = $('<img src="" class="imageb">').appendTo(col1);
                    var cardtitle = $('<h5 class="card-text"></h5>').appendTo(col2);
                    var cardtext1 = $('<p class="card-text"></p>').appendTo(col2);
                    var cardtext2 = $('<p class="card-text"></p>').appendTo(col3);
                    var cardtext3 = $('<p class="card-text"></p>').appendTo(col3);
                    var cardtext4 = $('<p class="card-text"></p>').appendTo(col4);
                    var cardtext5 = $('<p class="card-text"></p>').appendTo(col4);
                    var btnEdit = $(`<button class="btn btn-primary" id="btnedit${dataReslt[index].id}" onclick="Bedit(this.id)"></button>`).appendTo(cardbody);
                    var btnRemove = $(`<button class="btn btn-danger" id="btnremove${dataReslt[index].id}" onclick="Brem(this.id)"></button>`).appendTo(cardbody);
                    img.attr('src', 'images/items/' + dataReslt[index].pic);
                    cardtitle.text(dataReslt[index].itemName);
                    cardtext1.text("Quantity: " + dataReslt[index].count);
                    cardtext2.text("Refundable Deposit: " + dataReslt[index].deposit);
                    cardtext3.text("Rental Period: " + dataReslt[index].dateStart.substring(0,15) + " to " + dataReslt[index].dateEnd.substring(0,15));
                    cardtext4.text("Rent: " + dataReslt[index].price);
                    cardtext5.text("Days: " + dataReslt[index].days);
                    btnEdit.text("Edit");
                    btnRemove.text("Remove");
                }
                $('.totc').text("Total Rent - " + totR + " Rs")
                $('.totd').text("Refundable Deposit - " + totD + " Rs")
            }
        });
    }
});