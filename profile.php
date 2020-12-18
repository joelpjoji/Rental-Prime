<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="css/profile.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" >
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Profile - Rental-Prime</title>
    </head>
    <body>
        <!-- NavBar------------------------- -->
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light
                        justify-content-between"> 
                <a class="navbar-brand" href="home.php"> 
                    <img src= "images/LogoFull(for white bg).png"
                         width="110" height="30" 
                         class="d-inline-block align-top" alt=""></a>
                <button class="navbar-toggler " 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarNavDropdown01" 
                        aria-controls="navbarNavDropdown01"
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        style="outline-color:#fff"> 
                    <span class="navbar-toggler-icon"></span> 
                </button> 
  
                <div class="collapse navbar-collapse" 
                     id="navbarNavDropdown01"> 
  
                    <ul class="navbar-nav"> 
                        
                        <!--dropdown item of menu-->
                        <li class="nav-item dropdown"> 
                            <a class="nav-link dropdown-toggle" 
                               href="#" id="navbarDropdown" 
                               role="button" data-toggle="dropdown"
                               aria-haspopup="true" 
                               aria-expanded="false"><i class="fa fa-map-marker" aria-hidden="true"></i> Kochi</a>
                            <!--dropdown sub items of menu-->
                            <div class="dropdown-menu"
                                 aria-labelledby="navbarDropdown"> 
                                <a class="dropdown-item" href="#"> 
                                  Kochi
                                </a> 
                                <a class="dropdown-item" href="#"> 
                                  Delhi 
                                </a> 
                                <div class="dropdown-divider"></div> 
                                <a class="dropdown-item" href="#"> 
                                  More Locs  
                                </a> 
                            </div> 
                        </li> 
                        <li class="nav-item dropdown exp"> 
                            <a class="nav-link dropdown-toggle" 
                               href="#" id="navbarDropdown" 
                               role="button"
                               data-toggle="dropdown" 
                               aria-haspopup="true" 
                               aria-expanded="false"><i class="fa fa-tag" aria-hidden="true"></i> Categories
                            </a> 
                            
                            <!--dropdown sub items of menu-->
                            <div class="dropdown-menu expMenu" aria-labelledby="navbarDropdown"> 
                                <div class="row">
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Air Compressors%2C Tools %26 Accessories">Air Compressors, Tools & Accessories</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Air Compressors">Air Compressors</a></li>
                                            <li><a class="catlink" href="category.php?c=Nail Guns">Nail Guns</a></li>
                                            <li><a class="catlink" href="category.php?c=Air Tools">Air Tools</a></li>
                                            <li><a class="catlink" href="category.php?c=Combo Kits">Combo Kits</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Power Tools">Power Tools</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Combo Kits">Combo Kits</a></li>
                                            <li><a class="catlink" href="category.php?c=Drills">Drills</a></li>
                                            <li><a class="catlink" href="category.php?c=Saws">Saws</a></li>
                                            <li><a class="catlink" href="category.php?c=Cordless Tools">Cordless Tools</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Welding %26 Soldering Tools">Welding & Soldering Tools</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Welding Machines">Welding Machines</a></li>
                                            <li><a class="catlink" href="category.php?c=Brazing %26 Soldering Equipment">Brazing & Soldering Equipment</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Automotive">Automotive</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Truck Boxes">Truck Boxes</a></li>
                                            <li><a class="catlink" href="category.php?c=Towing %26 Trailers">Towing & Trailers</a></li>
                                            <li><a class="catlink" href="category.php?c=Shop Equipment %26 Lifting">Shop Equipment & Lifting</a></li>
                                            <li><a class="catlink" href="category.php?c=RV Supplies">RV Supplies</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Hand Tools">Hand Tools</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Tool Sets">Tool Sets</a></li>
                                            <li><a class="catlink" href="category.php?c=Cutting Tools">Cutting Tools</a></li>
                                            <li><a class="catlink" href="category.php?c=Wrenches">Wrenches</a></li>
                                            <li><a class="catlink" href="category.php?c=Sockets %26 Accessories">Sockets & Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Tool Storage">Tool Storage</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Tool Chests">Tool Chests</a></li>
                                            <li><a class="catlink" href="category.php?c=Portable Toolboxes">Portable Toolboxes</a></li>
                                            <li><a class="catlink" href="category.php?c=Mobile Workbenches">Mobile Workbenches</a></li>
                                            <li><a class="catlink" href="category.php?c=Tool Bag">Tool Bag</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Woodworking Tools">Woodworking Tools</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Table Saws">Table Saws</a></li>
                                            <li><a class="catlink" href="category.php?c=Routers">Routers</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Power Tool Accessories">Power Tool Accessories</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Saw Blades">Saw Blades</a></li>
                                            <li><a class="catlink" href="category.php?c=Drill Bits">Drill Bits</a></li>
                                            <li><a class="catlink" href="category.php?c=Batteries %26 Chargers">Batteries & Chargers</a></li>
                                            <li><a class="catlink" href="category.php?c=Tool Stands">Tool Stands</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xs">
                                        <div class="bodx"><h6><a class="topcatlink" href="category.php?c=Shop Vacuums">Shop Vacuums</a></h6></div>
                                        <ul>
                                            <li><a class="catlink" href="category.php?c=Small Capacity">Small Capacity</a></li>
                                            <li><a class="catlink" href="category.php?c=Medium Capacity">Medium Capacity</a></li>
                                            <li><a class="catlink" href="category.php?c=Vacuum Accessories">Vacuum Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> 
                        </li> 
                    </ul>
                    <!--Form item of menu for search purpose-->
                    <form class="form-inline mx-auto" action="search.php" method="GET">
                        <input class="form-control"
                               type="search" placeholder="Search"
                               aria-label="Search" id="formSpan" name="q">
                        <button class="btnx" type="submit"><i class="fa fa-search"></i></button>
                    </form>
                    <button class="btny" id="cartBtn" type="button"><i class="fa fa-shopping-cart"></i> Cart(0)</button>
                    <div class="dropdown">
                    <button class="btny dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Account
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" id="profBtn" type="button">Profile</button>
                        <button class="dropdown-item" id="loginBtn" type="button">Login</button>
                        <button class="dropdown-item" id="regBtn" type="button">Register</button>
                    </div>
                    </div>
                </div> 
        </nav>
        <!-- NavBar------------------------- -->

        <!-- FlexCols------------------------- -->
        <div class="contain">
            <div class="row">
                <div class="col-2">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</a>
                        <a class="nav-link" id="v-pills-address-tab" data-toggle="pill" href="#v-pills-address" role="tab" aria-controls="v-pills-address" aria-selected="false">Change Password</a>
                        <a class="nav-link" id="v-pills-addproduct-tab" data-toggle="pill" href="#v-pills-addproduct" role="tab" aria-controls="v-pills-addproduct" aria-selected="false">Add Product</a>
                    </div>
                </div>
                <div class="col-10">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade active show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div class="row center-xs">
                                <div class="col-xs-12">
                                    <img src="images/bgwall.jpg" alt="Profile Image" class="imageb">
                                    <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <form id="registerForm" class="needs-validation" method="POST" name="form1" novalidate>
                                                <input class="form-control input_first_name" type="text" placeholder="First Name">
                                                <div class="invalid-feedback feedfname"></div>
                                                <input class="form-control input_last_name" type="text" placeholder="Last Name">
                                                <div class="invalid-feedback feedlname"></div>
                                                <input class="form-control input_email" type="text" placeholder="Email">
                                                <div class="invalid-feedback feedemail"></div>
                                                <input class="form-control input_address" type="text" placeholder="Address">
                                                <div class="invalid-feedback feedaddress"></div>
                                                <input class="form-control input_city" type="text" placeholder="City">
                                                <div class="invalid-feedback feedcity"></div>
                                                <input class="form-control input_state" type="text" placeholder="State">
                                                <div class="invalid-feedback feedstate"></div>
                                                <input class="form-control input_zip" type="text" placeholder="ZIP Code">
                                                <div class="invalid-feedback feedzip"></div>
                                                <input class="form-control input_country" type="text" placeholder="Country">
                                                <div class="invalid-feedback feedcountry"></div>
                                                <button class="btn btn-primary" type="submit" id="savebtn">Update</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-address" role="tabpanel" aria-labelledby="v-pills-address-tab">
                            <div class="row center-xs">
                                <div class="col-xs-12">
                                    <h4>Change Password</h4>
                                    <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <form id="passForm" class="needs-validation" method="POST" name="form2" novalidate>
                                                <input class="form-control input_pass1" type="password" placeholder="Password">
                                                <div class="invalid-feedback feedpass1"></div>
                                                <input class="form-control input_pass2" type="text" placeholder="Re-enter Password">
                                                <div class="invalid-feedback feedpass2"></div>
                                                <button class="btn btn-primary" type="submit" id="updatebtn" style="margin-bottom: 120px;margin-top: 10px;">Change Password</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-addproduct" role="tabpanel" aria-labelledby="v-pills-addproduct-tab">
                            <div class="row center-xs">
                                <div class="col-xs-12">
                                    <h4>Add Product</h4>
                                    <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <form id="addProductForm" class="needs-validation" method="POST" name="form3" novalidate>
                                                    <input class="form-control input_name" type="text" placeholder="Item name">
                                                    <textarea class="form-control input_desc" type="text" placeholder="Description"></textarea>
                                                    <input class="form-control input_pic" type="text" placeholder="File name">
                                                    <input class="form-control input_company" type="text" placeholder="Company">
                                                    <input class="form-control input_price" type="text" placeholder="Price">
                                                    <input class="form-control input_stock" type="text" placeholder="Stock">
                                                    <textarea class="form-control input_lightDesc" type="text" placeholder="Light Description"></textarea>
                                                    <select class="form-control input_category" id="exampleFormControlSelect1">
                                                        <option>Air Compressors, Tools & Accessories</option>
                                                        <option>Power Tools</option>
                                                        <option>Welding & Soldering Tools</option>
                                                        <option>Automotive</option>
                                                        <option>Hand Tools</option>
                                                        <option>Tool Storage</option>
                                                        <option>Woodworking Tools</option>
                                                        <option>Power Tool Accessories</option>
                                                        <option>Shop Vacuums</option>
                                                    </select>
                                                    <select class="form-control input_subcategory" id="exampleFormControlSelect2">
                                                        <option>Air Compressors</option>
                                                        <option>Nail Guns</option>
                                                        <option>Air Tools</option>
                                                        <option>Combo Kits</option>
                                                        <option>Drills</option>
                                                        <option>Saws</option>
                                                        <option>Cordless Tools</option>
                                                        <option>Welding Machines</option>
                                                        <option>Brazing & Soldering Equipment</option>
                                                        <option>Truck Boxes</option>
                                                        <option>Towing & Trailers</option>
                                                        <option>Shop Equipment & Lifting</option>
                                                        <option>RV Supplies</option>
                                                        <option>Tool Sets</option>
                                                        <option>Cutting Tools</option>
                                                        <option>Wrenches</option>
                                                        <option>Sockets & Accessories</option>
                                                        <option>Tool Chests</option>
                                                        <option>Portable Toolboxes</option>
                                                        <option>Mobile Workbenches</option>
                                                        <option>Tool Bag</option>
                                                        <option>Table Saws</option>
                                                        <option>Routers</option>
                                                        <option>Saw Blades</option>
                                                        <option>Drill Bits</option>
                                                        <option>Batteries & Chargers</option>
                                                        <option>Tool Stands</option>
                                                        <option>Small Capacity</option>
                                                        <option>Medium Capacity</option>
                                                        <option>Vacuum Accessories</option>
                                                    </select>
                                                    <input class="form-control input_deposit" type="text" placeholder="Deposit">
                                                    <button class="btn btn-primary" type="submit" id="addbtn">Add</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- FlexCols------------------------- -->
        
        <!-- BackToTopButton------------------------- -->
        <a class="myBtn" title="Go to top" href="javascript:void(0);"><i class="fa fa-arrow-up"></i></a>
        <!-- BackToTopButton------------------------- -->

        <!-- Footer------------------------- -->
        <footer class="footer-distributed">

			<div class="footer-left">

                <!-- <h3>Rental<span>Prime</span></h3> -->
                <img src="images/LogoFull(for dark bg).png" style="width: 165px;height: 50px;">

				<p class="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">rentalprime &copy; 2019</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> Delhi, India</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contact@rentalprime.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Rental Prime is an online rental platform for machineries &amp; tools.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        <!-- Footer------------------------- -->

        <!-- Script Files------------------------- -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/litepicker/dist/js/main.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="js/profile.js"></script>
        <!-- Script Files------------------------- -->

    </body>
</html>