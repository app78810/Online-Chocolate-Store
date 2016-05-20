<!DOCTYPE html>

<html>
    <head>
        <title>Truffle store order page</title>
        <meta charset="UTF-8">
        
        <link type="text/css" rel="stylesheet" href="orderPage.css">
		<script type="text/javascript" src="ordercost.js"> </script>
		<style>
		body {
    background-image: url("orderPage.jpg");
    background-repeat: no-repeat;
    background-position: right;
	
		}
		table 			{margin : auto; align:left;}
		table, td, th 	{width:400px; border-collapse: collapse; align:left; border:2px solid black; text-align:left; padding 10px;}
		thead			{text-align: center; font-family; arial; font-weight: 100;}
		h1				{text-align: center; color: teal}

		
		</style>
        <script type="text/javascript" src="ordercost.js" align="left" > </script>
    </head>
    <body>
	  <div id="top">
            <h1>The Truffle Store Order Form</h1>
			            
               <p> 
            Chocolates
                <select id="chocolatetype" name="chocolatetype">
                        
						<option value="none">None </option>
						<option value="dark chocolate">dark chocolate </option>
						<option value="dark chocolate">dark chocolate (sugar free) </option>
                        <option value="milk chocolate">milk chocolate</option>
						<option value="milk chocolate">milk chocolate (sugar free)</option>
                        <option value="caramel">caramel</option>
                        <option value="nutty">nutty </option>
                </select>
          
				<br>
				<br>
				
            Cookies
                <select id="cookieTypes" name="cookieTypes">
						
						<option value="none">None </option>
                        <option value="peanut butter cookie">peanut butter cookie</option>
						<option value="almond cookie">almond cookie</option>
                        <option value="oatmeal cookie">oatmeal cookie</option>
						<option value="sugarfree almond cookie">sugarfree almond cookie</option>
                        <option value="sugarfree oatmeal cookie">sugarfree oatmeal cookie</option>
       
                </select>		
			</p>
        <fieldset>
            <legend style="color:black" title="select size">Size</legend>
            <input type="radio" name="rad-but" id="2" value="2">2pieces<br>
            <input type="radio" name="rad-but" id="4" value="4">4pieces<br>
            <input type="radio" name="rad-but" id="8" value="8">8pieces<br>
            <input type="radio" name="rad-but" id="16" value="16">16pieces<br>
        </fieldset><br><br>
		
        Quantity(1-4) <input type="number" id="number" min="1" max="4" name="mynum" title="Enter Quantity"><br>
       
	   
        <br> Shipping Address:<input type="text" value="" id="address" title="Enter Shipping Address"><br>
		<br>state:
                <select id="state" name="state" title="Enter state">
						<option value="Missouri">Missouri </option>
                        <option value="Kansas">Kansas </option>
				</select>		
		<br>
		<br>Zip Code:<input type="number" value="" id="zipcode" min="64093" max="64097" title="Enter Zipcode"><br>
		
		<fieldset>
            <legend style="color:black">Shipping Options</legend>
            <input type="checkbox" id="giftwrap">Gift Wrap<br>
            <input type="checkbox" id="fastshipping">Fast Shipping<br>
        </fieldset>
        <br><input type="button" value="Place Order" id="PlaceOrder">
        <br>
        <br>
        <br>
		  <p id="errorMessage" style="color:red" ></p>
          <p id="msg1" style="color:green" ></p>
		</div>  
		<div id="bottom" style="display:none">
		
		</div>
		  <div id="Links">
					<br>
					<br>
				 <h2><a href="home.html">Home</a> </h2>
		
				 <h2><a href="contactUs.html">Contact Us</a></h2>
				
	        </div>  
		  
    </body>
</html>
