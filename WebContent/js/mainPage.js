function forgot()
{ var mailId =prompt("We'll email your password, enter your mail id");
  
}

function login()
{  var name = document.getElementById("loginEmail").value;
   var password = document.getElementById("loginPassword").value;
   var errorMessage="";
   
   //var credentials = new Object(); 
	//credentials['pawaramita90'] = "pawaramita9";
	//credentials['deepthi'] = "deepthi9999";
	//credentials['ajay'] = "ajay9999";
   if(name=="" && password=="")
   {  errorMessage+="Username & password fields are blank";
      document.getElementById("errorMessage").innerHTML = errorMessage;
   }   
   else if(!(credentials.hasOwnProperty(name) && credentials[name]==password)) {
		errorMessage+="Username or password is invalid";
        document.getElementById("errorMessage").innerHTML = errorMessage;
   }
   else{
		
		document.getElementById("afterLogin").style.display = "block";
	    document.getElementById("signIn").style.display = "none";
   }
   
   
   
}


window.onload=function()
{
    //document.getElementById("signIn").onclick = login;
	document.getElementById("forgotPassword").onclick = forgot;
	
};

