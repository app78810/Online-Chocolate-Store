function cost()
{
    // Price List
        DARK_CHOCOLATE  = 2.00;
        MILK_CHOCOLATE = 1.75;
		SUGARFREE_DARK_CHOCOLATE  = 4.00;
        SUGARFREE_MILK_CHOCOLATE = 4.00;
        CARAMEL = 2.10;
        NUTTY = 2.25;
		
		PEANUT_BUTTER_COOKIE = 4.00
		ALMOND_COOKIE = 5.00
		OATMEAL_COOKIES = 6.00 
		
		SUGARFREE_ALMOND_COOKIE = 7.00
		SUGARFREE_OATMEAL_COOKIES = 10.00 
			
        GIFT_WRAP = 4.00;
        FAST_SHIPPING = 5.00;
		
        var p = 0.00;      
        var allDataEntered = true;
		var errorMessage = "";
		var zipCode= /^[0-9]{5}$/;
   

   
  if(document.getElementById("chocolatetype").value == "dark chocolate")
  {
      p += DARK_CHOCOLATE;    
      
        if(document.getElementById("fastshipping").checked)
        { 
          msg2 = "Yes";
        }
        else
        {
          msg2 = "No";
        } 
  }
  else if(document.getElementById("chocolatetype").value == "milk chocolate")
  {
      p += MILK_CHOCOLATE;
       if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "No";
       }
  }
  else if(document.getElementById("chocolatetype").value == "caramel")
  {
      p += CARAMEL;
      if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "3 day";
       }
  }
  else if(document.getElementById("chocolatetype").value == "nutty")
  {
      p += NUTTY;
      if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "3 day";
       }
  }

  if(document.getElementById("cookieTypes").value == "peanut butter cookie")
  {
      p += PEANUT_BUTTER_COOKIE;    
      
        if(document.getElementById("fastshipping").checked)
        { 
          msg2 = "Yes";
        }
        else
        {
          msg2 = "No";
        } 
  }
  else if(document.getElementById("cookieTypes").value == "almond cookie")
  {
      p += ALMOND_COOKIE;
       if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "No";
       }
  }
  else if(document.getElementById("cookieTypes").value == "oatmeal cookie")
  {
      p += OATMEAL_COOKIES;
      if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "No";
       }
  }
  else if(document.getElementById("cookieTypes").value == "sugarfree almond cookie") 
  {
      p += SUGARFREE_ALMOND_COOKIE;
      if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "No";
       }
  }
  else if(document.getElementById("cookieTypes").value == "sugarfree oatmeal cookie") 
  {
      p += SUGARFREE_OATMEAL_COOKIES;
      if(document.getElementById("fastshipping").checked)
       {
          msg2 = "Yes";
       }
       else
       {
         msg2 = "No";
       }
  }
  else 
  {
      allDataEntered = false;
      errorMessage+= "You must select the type of truffle you want.<br>";
   }
  
  if(document.getElementById("2").checked)
  {
      p *= 2;
  }
  else if (document.getElementById("4").checked)
  {
      p *=4;
  }
  else if (document.getElementById("8").checked)
  {
      p *=8;
  }
  else if(document.getElementById("16").checked)
  {
      p *=16;
  }
  else 
  {
      allDataEntered = false;
      errorMessage+= "Please select the number of truffle pieces you want.<br>";
  }
  
  if(document.getElementById("number").value == "1")
  {
    p *=1;  
  }
  else if (document.getElementById("number").value == "2")
  {
      p *=2;
  }
  else if (document.getElementById("number").value == "3")
  {
      p *=3;
  }
  else if (document.getElementById("number").value == "4")
  {
      p *=4;
  }
  else 
  {
      allDataEntered = false;
      errorMessage+=  "You must select the quantity of truffle boxes you want.<br>";
  }
  
  var enteredZip =document.getElementById("zipcode").value;
  if(!enteredZip.match(zipCode)){
	allDataEntered = false;
	errorMessage+=  "Please enter valid zip code<br>";
  }
  if(document.getElementById("giftwrap").checked)
  {
      p += GIFT_WRAP; 
  }
  else {
	if(document.getElementById("zipcode").value == "64093") {
		//Dont add to price
	}
	else if(document.getElementById("fastshipping").checked)
	{
		p += FAST_SHIPPING;
	}
  }
  

   if(allDataEntered)
   {
   /*Code to show the completed order details */
   
		/*document.getElementById("errorMessage").innerHTML = ""; 
        var msg = "Thank you for your order. <br> Your order total is $" + p + "<br>"+msg2;
        document.getElementById("msg1").innerHTML = msg;*/
		displayResult(p,msg2);
   }     
   else {
		document.getElementById("errorMessage").innerHTML = errorMessage; 
   }
}

window.onload=function()
{
    document.getElementById("PlaceOrder").onclick = cost;
};

function displayResult(price,message)
{
var shippingDays=document.getElementById("fastshipping").checked?1:3;
var shippingDate="";
if(shippingDays==1)
{
var today = new Date();
shippingDate = new Date(today);
shippingDate.setDate(today.getDate()+1);
}
else
{
var today = new Date();
shippingDate = new Date(today);
shippingDate.setDate(today.getDate()+3);
}
var giftWrap=document.getElementById("giftwrap").checked?"Yes":"No";

var sizes = document.getElementsByName('rad-but');
var size;
for(var i = 0; i < sizes.length; i++){
    if(sizes[i].checked){
        size = sizes[i].value;
    }
}
var address=document.getElementById("address").value+"<br/>"+document.getElementById("state").value+"<br/>"+document.getElementById("zipcode").value;

	var table="<h1 style=\"text-align: left; margin-left: 50px\"> Order Details </h1><table style=\"margin-left: 50px\"><tr><td>Chocolate Name</td><td>"+document.getElementById("chocolatetype").value+"</td></tr>"+
						"<tr><td>Cookie Name</td><td>"+document.getElementById("cookieTypes").value+"</td></tr>"+
						"<tr><td>No of Pieces</td><td>"+size+"</td></tr>"+
						"<tr><td>Quantity</td><td>"+document.getElementById("number").value+"</td></tr>"+
						"<tr><td>Shipping Type</td><td>"+message+"</td></tr>"+
						"<tr><td>Shipping Address</td><td>"+address+"</td></tr>"+
						"<tr><td>Expected Shipping Date</td><td>"+shippingDate+"</td></tr>"+
						"<tr><td>Gift Wrap Required</td><td>"+giftWrap+"</td></tr>"+
						"<tr><td>Total Order Cost</td><td>"+price+"</td></tr>";
		
			/*table+="<tr><td>"+document.getElementById("chocolatetype").value+"</td>"+
			"<td>"+document.getElementById("cookieTypes").value+"</td>"+
			"<td>"+size+"</td>"+
			"<td>"+document.getElementById("number").value+"</td>"+
			"<td>"+message+"</td>"+
			"<td>"+address+"</td>"+
			"<td>"+shippingDate+"</td>"+
			"<td>"+giftWrap+"</td>"+
			"<td>"+price+"</td>"+
			"</tr>"*/
		table+="</table>";
		
		var orderResult=document.getElementById("bottom");
		var topDiv=document.getElementById("top");
		orderResult.innerHTML=table;
		orderResult.style.display = "block";
		topDiv.style.display = "none";
		orderResult.style.marginTop ="100px";
		//topDiv.style.height=10px;
	

}
