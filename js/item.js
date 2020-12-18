var itemDetails = "";
var cartDetails = "";
var cartval = 0;
var days = 0;
var username = "";
var dateStart;
var dateEnd;

var picker = new Litepicker({
    element: document.getElementById('litepicker'),
    firstDay:1,
    format:'D MMM, YYYY',
    lang:'en-US',
    numberOfMonths:2,
    numberOfColumns:2,
    splitView:true,
    inlineMode:true,
    singleMode:false,
    autoApply:true,
    showTooltip:false,
    useResetBtn:true,
    mobileFriendly:true,
    onSelect: function(date1, date2) {
        dateStart = date1;
        dateEnd = date2;
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        Difference_In_Days += 1;
        days = Difference_In_Days;
        $('.mdays').text("Number of Days: " + Difference_In_Days);
        $('.mrentc').text("Rent: " + ((parseFloat(itemDetails[0].price) + parseFloat(itemDetails[0].deposit) + 500)*Difference_In_Days) + " Rs");
    }
});

$(document).ready(function() {
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

    $('.btnEx').click(function(){
        if(username != ""){
            if(sessionStorage.getItem("cartID") == null){
                $.ajax({
                    url: "server.php",
                    type: "POST",
                    data: {
                        type: "addtocart",
                        username:username,
                        itemID: $(document).getUrlParam("p"),
                        itemName: itemDetails[0].itemName,
                        pic: itemDetails[0].pic,
                        price: itemDetails[0].price,
                        deposit: itemDetails[0].deposit,
                        days: days,
                        count: $('.inputDec').val(),
                        dateStart: dateStart.toString(),
                        dateEnd: dateEnd.toString(),
                    },
                    cache: false,
                    success: function(dataResult){
                        console.log(dataResult);
                        var dataResult = JSON.parse(dataResult);
                        if(dataResult.statusCode==200){
                            $.alert({
                                title: 'Success!',
                                content: 'Added to cart!',
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
                            $('#cartBtn').text(` Cart (${cartval + 1})`);
                            $(`<i class="fa fa-shopping-cart"></i>`).prependTo($('#cartBtn'));
                        }
                    }
                });
            } else {
                $.ajax({
                    url: "server.php",
                    type: "POST",
                    data: {
                        type: "editcart",
                        id: sessionStorage.getItem("cartID"),
                        username:username,
                        itemID: $(document).getUrlParam("p"),
                        itemName: itemDetails[0].itemName,
                        pic: itemDetails[0].pic,
                        price: itemDetails[0].price,
                        deposit: itemDetails[0].deposit,
                        days: days,
                        count: $('.inputDec').val(),
                        dateStart: dateStart.toString(),
                        dateEnd: dateEnd.toString(),
                    },
                    cache: false,
                    success: function(dataResult){
                        console.log(dataResult);
                        var dataResult = JSON.parse(dataResult);
                        if(dataResult.statusCode==200){
                            $.alert({
                                title: 'Success!',
                                content: 'Item edited! Redirecting to cart',
                                type: 'green',
                                typeAnimated: true,
                                autoClose: 'ok|3000',
                                buttons: {
                                    ok: function () {
                                        sessionStorage.removeItem("cartID");
                                        $(window).attr('location','cart.php');
                                    },
                                },
                                animation: 'scale',
                                closeAnimation: 'zoom',
                                backgroundDismiss: true,
                                draggable: false,
                                theme: 'material'
                            });
                        }
                    }
                });
            }
        } else {
            $.alert({
                title: 'Error!',
                icon: 'fa fa-warning',
                content: 'Login to add to cart!',
                type: 'red',
                typeAnimated: true,
                animation: 'scale',
                closeAnimation: 'zoom',
                backgroundDismiss: true,
                draggable: false,
                theme: 'material'
            });
        }
    });

    // Fetch items
    $.ajax({
        url: "server.php",
        type: "POST",
        data: {
            type: "fetchitem",
            id: $(document).getUrlParam("p")
        },
        cache: false,
        success: function(dataResult){
            var dataReslt = JSON.parse(dataResult);
            itemDetails = dataReslt;
            console.log(dataReslt);
            $('.mpic').attr('src','images/items/' + dataReslt[0].pic);
            $('.zoomple').attr('href','images/items/' + dataReslt[0].pic);
            $('.mtitle').text(dataReslt[0].itemName);
            $('.mdesc').text(dataReslt[0].description);
            $('.mrent').text(dataReslt[0].price + "/day");
            $('.mrentm').text(dataReslt[0].price*30 + "/month");
            $('.mrentw').text(dataReslt[0].price*7 + "/week");
            $('.mdeposit').text("Refundable Deposit: " + dataReslt[0].deposit);
            $('.mstock').text("Stock: ");
            $(`<span style="color: green;">${dataReslt[0].stock}</span>`).appendTo($($('.mstock')));
            similar();
        }
    });

    if(sessionStorage.getItem("cartID") != null){
        $.ajax({
            url: "server.php",
            type: "POST",
            data: {
                type: "editcartitem",
                id: sessionStorage.getItem("cartID")
            },
            cache: false,
            success: function(dataResult){
                var dataReslt = JSON.parse(dataResult);
                cartDetails = dataReslt;
                console.log(dataReslt);
                $('.inputDec').val(dataReslt[0].count)
                picker.setDateRange(new Date(dataReslt[0].dateStart),new Date(dataReslt[0].dateEnd))
            }
        });
    }

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

    $('.zoomple').zoomple({ 
        offset : {x:20,y:20},
        zoomWidth : 350,
        zoomHeight : 350,
        roundedCorners : false,
        attachWindowToMouse: false,
        appendTimestamp: false,
        showCursor: true,
        windowPosition : {x:'right',y:'top'}
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
                cartnum()
            }
            else if(dataResult.statusCode==201){
                $('#loginBtn').text("Login")
                $('#dropdownMenuButton').text("Account")
                $('#profBtn').hide()
                $('#cartBtn').text(` Cart (0)`);
                $(`<i class="fa fa-shopping-cart"></i>`).prependTo($('#cartBtn'));
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

    $('#comments-container').comments({
        profilePictureURL: 'https://viima-app.s3.amazonaws.com/media/public/defaults/user-icon.png',
        enableAttachments: false,
        enableHashtags: false,
        enableUpvoting: false,
        enablePinging: false,
        getComments: function(success, error) {
            $.ajax({
                type: 'post',
                url: 'server.php',
                data: {
                    type: 'getcomments',
                    PID: $(document).getUrlParam("p")
                },
                success: function(commentsArray) {
                    var arr = JSON.parse(commentsArray)
                    for (let i = 0; i < arr.length; i++) {
                        arr[i] = JSON.parse(arr[i])
                    }
                    success(arr)
                },
                error: error
            });
        },
        postComment: function(commentJSON, success, error) {
            if(username == ""){
                commentJSON.fullname = "Anonymous";
            } else{
                commentJSON.fullname = username;
                $.ajax({
                  type: 'post',
                  url: 'server.php',
                  data: {
                      type: 'postcomment',
                      comment: commentJSON,
                      commentID: commentJSON.id,
                      PID: $(document).getUrlParam("p")
                  },
                  success: function(comment) {
                        success(JSON.parse(comment))
                  },
                  error: error
                });
            }
          },
          putComment: function(commentJSON, success, error) {
            var tmpD = new Date(commentJSON.modified)
            commentJSON.modified = tmpD.toISOString()
            console.log(commentJSON)
            $.ajax({
              type: 'post',
              url: 'server.php',
              data: {
                type: 'updatecomment',
                comment: commentJSON,
                commentID: commentJSON.id,
                PID: $(document).getUrlParam("p")
            },
              success: function(comment) {
                success(JSON.parse(comment))
              },
              error: error
            });
          },
          deleteComment: function(commentJSON, success, error) {
            $.ajax({
              type: 'post',
              url: 'server.php',
              data: {
                type: 'deletecomment',
                comment: commentJSON,
                commentID: commentJSON.id,
                PID: $(document).getUrlParam("p")
            },
              success: success,
              error: error
            });
          }
    });
});

function similar(){
    // get similar items
    $.ajax({
        url: "server.php",
        type: "POST",
        data: {
            type: "similaritems",
            query: itemDetails[0].subCategory
        },
        cache: false,
        success: function(dataResult){
            console.log(dataResult);
            var dataReslt = JSON.parse(dataResult);
            var mRow = $(`<div class="row around-xs"></div>`).appendTo($('.mHead'));
            for (let index = 0; index < dataReslt.length; index++) {
                var card = $(`<div class="card" id="card${dataReslt[index].id}"></div>`).appendTo($(mRow));
                var ahref = $('<a href="#" class="dylink"></a>').appendTo(card);
                var img = $('<img class="card-img-top dyimg lazy" data-src="">').appendTo(ahref);
                var cardbody = $('<div class="card-body"></div>').appendTo(card);
                var cardtitle1 = $('<h6 class="card-title dytxt"></h6>').appendTo(cardbody);
                var cardtitle2 = $('<h5 class="card-title text-left dyprice"></h5>').appendTo(cardbody);
                img.attr('data-src', 'images/items/' + dataReslt[index].pic);
                ahref.attr('href', 'item.php?p=' + dataReslt[index].id);
                cardtitle1.text(dataReslt[index].itemName);
                cardtitle2.text(dataReslt[index].price + "Rs");
            }
            $('.lazy').Lazy();
        }
    });
}