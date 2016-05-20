<!DOCTYPE html>
<html>
   <head>
      <title>Truffle store</title>
      <meta charset="UTF-8">
      <link type="text/css" rel="stylesheet" href="styles/main.css">
	   <link type="text/css" rel="stylesheet" href="styles/webcss.css">
      <style>
         body {
         background-image: url("images/Image1.jpg");
         background-repeat: no-repeat;
         background-attachment: fixed;
         background-position: center;
         background-color: hsla(120,60%,70%,0.3);
         }
		
      </style>
      <script type="text/javascript" src="js/mainPage.js"> </script>
   </head>
   <body>
   		 <nav id="topNav" align="right">
		<p><font face="Arial" size="2"><b>
        <a target="_blank" href="http://www.facebook.com/home.php">
        <img border="0" src="images/facebook.png" width="25" height="25"></a>
		<a target="_blank" href="http://twitter.com"><img border="0" src="images/twitter.png" width="25" height="25"></a></b></font></p>
	  </nav>
      <div id="signIn" align="center">
	  <div id="menu-bar">
<div id="menu-content" class="clearfix">

<ul  class="nav">
<li class="menu"><a href="home.html">Home</a></li>	
<li class="menu"><a href="html/homePage.html">Menu</a></li>
<li class="menu"><a href="html/AboutUS.html">About US</a></li>
<li class="menu"><a href="html/contactUs.html">Contact US</a></li>
<li class="menu"><a href="html/Order.html">Order</a></li>

</ul> <!-- end ul#nav -->
</div> <!-- end #menu-content-->
</div> <!-- end #menu-bar-->
         <marquee behavior="alternate" style="font-style:italic;color:#FFFF00">
            <h1>Welcome to Truffle Store</h1>
         </marquee>
         <p style="color:light pink;font-family:calibri" >
         <h3 style="color:white">
         New Here ...??  <a href="html/account.html" id="signUp">SIGN UP </a> & Create an account
         <h3>
         </p>        
         <fieldset align="center">
            <legend style="color:Black;">
               <h3 style="color:white">SIGN IN</h3>
            </legend>
            <form id="loginForm">
               <table cellpadding="0" cellspacing="10" border="0" align="center">
                  <tr>
                     <td><label id="username" style="color:white"><b>Username:  </label></td>
                     
                     <td><input type="text" id="loginEmail" name="email"></td>
                  </tr>
				  
                  <tr>
                     <td><label for="password" id="loginPasswordLabel" style="color:white"><b>Password:   </label></td>
                     <td><input type="password" id="loginPassword" name="password"></td>
                  </tr>
                  <br>
                  <br>
                  <tr>
                     <td colspan="2">
                        <br>
                        <input type="button"  value="Sign In" id="signIn" onclick="login()">
                        <input type="submit" value="Forgot Password" id="forgotPassword">  
                     </td>
                  </tr>
               </table>
         </fieldset>
		 <p id="errorMessage" style="color:red" ></p>
		 <br><br>
		
      </div>
	  <br/>
	  <br/>	  
      <div id="afterLogin" style="display:none">			 
		  <table>
			  <tr>
				  <td>
					  <h3><a href="home.html" style="color:white">Home</a> </h3>
					  <h3><a href="html/contactUs.html" style="color:white">Contact Us</a></h3>
					  <h3><a href="html/truffleOrder.html" style="color:white">Order a Truffle</a><h3> 
					  <h3><a href="html/homePage.html" style="color:white">Cookie Receipe</a><h3> 									  
				  </td>
			  </tr>
		  </table>
      </div>
      </form>    
   </body>
</html>
