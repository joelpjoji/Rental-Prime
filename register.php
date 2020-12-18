<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Sign Up | Rental Prime">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
    <link rel="shortcut icon" href="favicon.ico">
    <title>Sign Up | Rental Prime</title>
    <link href="css/register.css" rel="stylesheet">
</head>
<body>
    <div class="bg">
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src="images/short expanded.png" class="brand_logo" alt="Logo">
                        </div>
                    </div>
                    <form id="registerForm" class="needs-validation" method="POST" name="form1" novalidate>
                        <div class="d-flex flex-row justify-content-center">
                            <div class="input-group m-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user" value="" placeholder="Username">
                                <div class="invalid-feedback feeduser"></div>
                            </div>
                            <div class="input-group m-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-at"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_email" value="" placeholder="Email">
                                <div class="invalid-feedback feedemail"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-center">
                            <div class="input-group m-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_first_name" value="" placeholder="First name">
                                <div class="invalid-feedback feedfname"></div>
                            </div>
                            <div class="input-group m-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_last_name" value="" placeholder="Last name">
                                <div class="invalid-feedback feedlname"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-center">
                            <div class="input-group m-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" class="form-control input_pass1" value="" placeholder="Password">
                                <div class="invalid-feedback feedpass1"></div>
                            </div>
                            <div class="input-group m-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" class="form-control input_pass2" value="" placeholder="Re-enter Password">
                                <div class="invalid-feedback feedpass2"></div>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-center">
                            <div class="d-flex mt-2 login_container">
                                <button type="submit" name="button" class="btn login_btn">Register</button>
                            </div>
                        </div>
                    </form>
                    <div class="mt-4">
                        <div class="d-flex flex-row justify-content-center links">
                            Already have an account? <a href="login.php" class="ml-2">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>
    <script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <script src="js/register.js"></script>
</body>
</html>