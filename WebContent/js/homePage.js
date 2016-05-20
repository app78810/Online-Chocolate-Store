/*Program By:
		
		Name: Deepthi Krosuru
		Id:
		
		Name:
		Id: 
		
		*/


// variables to hold the directions for cooking a cookie.
var direction1 = "1. In a medium bowl, mix together cocoa, white sugar, and vegetable oil. Beat in eggs one at a time, then stir in the vanilla. Combine the flour, baking powder, and salt; stir into the cocoa mixture. Cover dough, and chill for at least 4 hours.<br>2. Preheat oven to 350 degrees F (175 degrees C). Line cookie sheets with parchment paper. Roll dough into one inch balls. I like to use a number 50 size scoop. Coat each ball in confectioners' sugar before placing onto prepared cookie sheets.<br>3. Bake in preheated oven for 10 to 12 minutes. Let stand on the cookie sheet for a minute before transferring to wire racks to cool.";
var direction2 = "1. In a large pan over low heat, cook butter, sugar and water until butter is melted. Add chocolate chips and stir until partially melted. Remove from heat and continue to stir until chocolate is completely melted. Pour into a large bowl and let stand 10 minutes to cool off slightly.<br>2. At high speed, beat in eggs, one at a time into chocolate mixture. Reduce speed to low and add dry ingredients, beating until blended. Chill dough about 1 hour.<br>3. Preheat oven to 350 degrees F (175 degrees C).<br>4. Roll dough into balls and place on ungreased cookie sheet about 2 inches apart. Bake 8-10 minutes. While cookies are baking unwrap mints and divide each in half. When cookies are brought out of the oven, put 1/2 mint on top of each cookie. Let the mint sit for up to 5 minutes until melted, then spread the mint on top of the cookie. Eat and enjoy!";
var direction3 = "1. Grease a 9x9 inch square pan.<br>2. Melt butter in large saucepan over medium heat. Stir in brown sugar and vanilla. Mix in the oats. Cook over low heat 2 to 3 minutes, or until ingredients are well blended. Press half of mixture into the bottom of the prepared pan. Reserve the other half for topping.<br>3.Meanwhile, melt chocolate chips and peanut butter in a small heavy saucepan over low heat, stirring frequently until smooth. Pour the chocolate mixture over the crust in the pan, and spread evenly with a knife or the back of a spoon.<br>4.Crumble the remaining oat mixture over the chocolate layer, pressing in gently. Cover, and refrigerate 2 to 3 hours or overnight. Bring to room temperature before cutting into bars.";

// variables to hold the quantity of ingredients for one cookie
var ingredients1 = [1,2,0.5,4,2,2,2,0.5,0.5];
var ingredients2 = [0.75,1.5,2,2,2,2.5,1.25,0.5,36];
var ingredients3 = [1,0.5,1,3,1,0.5];

//variables to hold the recepie for 1 cookie.
var ingDesc1 = ingredients1[0]+" cup unsweetened cocoa powder<br>"+ingredients1[1]+" cups white sugar<br>"+ingredients1[2]+" cup vegetable oil<br>"+ingredients1[3]+" eggs<br>"+ingredients1[4]+" teaspoons vanilla extract<br>"+ingredients1[5]+" cups all-purpose flour<br>"+ingredients1[6]+" teaspoons baking powder<br>"+ingredients1[7]+" teaspoon salt<br>"+ingredients1[8]+" cup confectioners sugar";
var ingDesc2 = ingredients2[0]+" cup butter<br>"+ingredients2[1]+" cups packed brown sugar<br>"+ingredients2[2]+" tablespoons water<br>"+ingredients2[3]+" cups semisweet chocolate chips<br>"+ingredients2[4]+" eggs<br>"+ingredients2[5]+" cups all-purpose flour<br>"+ingredients2[6]+" teaspoons baking soda<br>"+ingredients2[7]+" teaspoon salt<br>"+ingredients2[8]+" chocolate mint wafer candies";
var ingDesc3 = ingredients3[0]+" cup butter<br>"+ingredients3[1]+" cup packed brown sugar<br>"+ingredients3[2]+" teaspoon vanilla extract<br>"+ingredients3[3]+" cups quick cooking oats<br>"+ingredients3[4]+" cup semisweet chocolate chips<br>"+ingredients3[5]+" cup peanut butter";

var quantity;
var ingredients = "";

//start function which triggers after document is loaded. This function has event listeners. 
function start()
{
	document.getElementById("cookie1").addEventListener("click", display, false);
	document.getElementById("cookie2").addEventListener("click", display, false);
	document.getElementById("cookie3").addEventListener("click", display, false);
	document.getElementById("getQuantity").addEventListener("click", displayIngredients, false);
} // end start()

// display() function to display the direction and recepie.
function display()
{
	if(document.getElementById("cookie1").checked)
	{
		document.getElementById("directions").innerHTML = direction1;
		document.getElementById("quantity").value = 1;
		document.getElementById("ingredients").innerHTML = ingDesc1;
	}
	if(document.getElementById("cookie2").checked)
	{
		document.getElementById("directions").innerHTML = direction2;
		document.getElementById("quantity").value = 1;
		document.getElementById("ingredients").innerHTML = ingDesc2;
	}
	if(document.getElementById("cookie3").checked)
	{
		document.getElementById("directions").innerHTML = direction3;
		document.getElementById("quantity").value = 1;
		document.getElementById("ingredients").innerHTML = ingDesc3;
	}
} // end display()

//displayIngredients function to display the recepie based on the quantity entered.
function displayIngredients()
{
	quantity = parseInt(document.getElementById("quantity").value);
	
	if(document.getElementById("cookie1").checked)
	{
		ingredients = (ingredients1[0] * quantity)+" cup unsweetened cocoa powder<br>"+(ingredients1[1]* quantity) +" cups white sugar<br>"+(ingredients1[2] * quantity)+" cup vegetable oil<br>"+(ingredients1[3]* quantity)+" eggs<br>"+(ingredients1[4]* quantity)+" teaspoons vanilla extract<br>"+(ingredients1[5]* quantity)+" cups all-purpose flour<br>"+(ingredients1[6]* quantity)+" teaspoons baking powder<br>"+(ingredients1[7]* quantity)+" teaspoon salt<br>"+(ingredients1[8]* quantity)+" cup confectioners sugar";

		document.getElementById("ingredients").innerHTML = ingredients;
	}
	if(document.getElementById("cookie2").checked)
	{
		ingredients = (ingredients2[0]* quantity)+" cup butter<br>"+(ingredients2[1]* quantity)+" cups packed brown sugar<br>"+(ingredients2[2]* quantity)+" tablespoons water<br>"+(ingredients2[3]* quantity)+" cups semisweet chocolate chips<br>"+(ingredients2[4]* quantity)+" eggs<br>"+(ingredients2[5]* quantity)+" cups all-purpose flour<br>"+(ingredients2[6]* quantity)+" teaspoons baking soda<br>"+(ingredients2[7]* quantity)+" teaspoon salt<br>"+(ingredients2[8]* quantity)+" chocolate mint wafer candies";

		document.getElementById("ingredients").innerHTML = ingredients;
	}
	if(document.getElementById("cookie3").checked)
	{
		ingredients = (ingredients3[0]* quantity)+" cup butter<br>"+(ingredients3[1]* quantity)+" cup packed brown sugar<br>"+(ingredients3[2]* quantity)+" teaspoon vanilla extract<br>"+(ingredients3[3]* quantity)+" cups quick cooking oats<br>"+(ingredients3[4]* quantity)+" cup semisweet chocolate chips<br>"+(ingredients3[5]* quantity)+" cup peanut butter";

		document.getElementById("ingredients").innerHTML = ingredients;
	}
} // end displayIngredients

//event listener triggers when page loads
window.addEventListener("load", start, false);