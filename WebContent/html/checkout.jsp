<!DOCTYPE html>
<html>
    <head>
        <title>Truffle Chocolate - Checkout Page</title>
        <meta charset="UTF-8">
        
		<style>
		body {
    background-image: url("");
    background-repeat: no-repeat;
    background-attachment: fixed;
	background-color: rgba(236, 223, 13, 0.57);
}
</style>
		 <link type="text/css" rel="stylesheet" href="webcss.css">
        <script type="text/javascript" src="createAccount.js"> </script>  
</head>
<body>
<div id="menu-bar">
<div id="menu-content" class="clearfix">

<ul  class="nav">
<li class="menu"><a href="home.html">Home</a></li>	
<li class="menu"><a href="homePage.html">Menu</a></li>
<li class="menu"><a href="Aboutus.html">About US</a></li>
<li class="menu"><a href="contactUs.html">Contact US</a></li>

</ul> <!-- end ul#nav -->
</div> <!-- end #menu-content-->
</div>
<center>
	<div id="top">
	<h1 style="center;color:blue">Enter Your Shipping Address</h1>

		<br> <table><tr><td> * mark fields are mandatory </td></tr>
		         	
			  </table>
			  
	<table>

		<form action="${pageContext.request.contextPath}/CheckoutServlet" method="POST">
			<input name="DarkChoco_quan" type="hidden" value="<%=request.getParameter("DarkChoco_quan")%>"/>
			
			<tr> <p id="errorMessage" style="color:red" ></p>
			<td><label  >First Name*:</label></td>
                <td><input name="firstname" placeholder="first name" type="text"/></td>
            </tr>
			<tr> <p id="errorMessage" style="color:red" ></p>
			<td><label >Last Name*:</label></td>
                <td><input name="lastname" placeholder="Last name" type="text"/></td>
            </tr>
			<tr>
				<td><label for="EmailAddress" >Email*:</label> </td>
                <td><input name="EmailAddress" name="EmailAddress" type="text"  placeholder="xxxxxx@xxx.com" /> </td> 
			</tr>
			<tr>
				<td> <label >Contact number:</label></td>
				<td><input name="number" type="text" placeholder="(555)555-5555" /> </td> 
			</tr>
			<tr>
				<td> <label >Address:</label></td>
				<td><input name="address" type="text" placeholder="Enter the Address" /> </td> 
			</tr>
			<tr>
				<td> <label > City :</label></td>
				<td><input name="city" type="text"  /> </td> 
			</tr>
			
			<tr>
				<td> <label >State :</label></td>
				<td><select name="state" name="state" style= "width: 173px;">
                        
						<option value="none">None </option>
						<option value="">Kansas </option>
						<option value="">Texas </option>
                        <option value="">missouri</option>
						<option value="">Nebraska</option>
                        
                </select></td>
			</tr>
			<tr>
				<td> <label > Zip Code :</label></td>
				<td><input name="zipcode" type="text" id="zipcode" min="64093" max="64097" /> </td> 
			</tr>
			
		
        </table>
		
		<div>
		<h1 style="center;color:blue">Enter Your card Details</h1>
		</div>
		<table>
			<tr> <p id="errorMessage" style="color:red" ></p>
			<td><label  >Enter Cardholder Name *</label></td>
                <td><input id="cardname" placeholder="Card Holder name" type="text"/></td>
            </tr>
			<tr>
			<td><label >Card Number *</label></td>
                <td><input name="cardnumber" placeholder="Last name" type="text"/></td>
            </tr>
			<tr>
				<td><label for="expiration">Expiration*</label> </td>
                <td><select name="month" name="month" style= "width: 173px;">
                        
						<option value="">select month </option>
						<option value="">January </option>
						<option value="">February </option>
                        <option value="">march</option>
						<option value="">April</option>
						<option value="">may</option>
						<option value="">June</option>
						<option value="">July</option>
						<option value="">August</option>
						<option value="">September</option>
						<option value="">October</option>
						<option value="">November</option>
						<option value="">December</option>
						
                        
                </select></td>
				
				<td><select name="year" name="year" style= "width: 173px;">
                        
						<option value="none">select year </option>
						<option value="">2016 </option>
						<option value=""> 2017</option>
                        <option value="">2018</option>
						<option value="">2019</option>
                        
                </select></td>
			</tr>
			<tr>
				<td><label for="secuirtyCode" >Security Code</label> </td>
                <td><input name="securityCode" name="securitycode" type="text"  placeholder="xxx" /> </td> 
			</tr>
		</table>
		<div>	<tr>
				<td colspan="2"> <br>
					 
				<br> <center><input type="submit" value="Proceed To Checkout" id="createAccount"> </center> </td> 
			</tr>
		</div>
		</form>
			<p> Need help? <a href="contactUs.html"><h3> Contact Us <h3></a> </p>
	</div>
	<div id="bottom" style="display:none;align:center" ><br><br><br>
	<h1><p> <a href="home.html">Sign In </a> to place an order   </p><h1>
	
	</div>
</center>	
    </body>
</html>