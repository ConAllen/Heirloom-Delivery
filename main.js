
function submitFunction()
{
  var creditcard =document.forms["heirloomDelivery"]["creditcard"].value;
  var expiry =document.forms["heirloomDelivery"]["expiry"].value;
  var cvc =document.forms["heirloomDelivery"]["cvc"].value;


  if ( creditcard == "") {
		document.forms["heirloomDelivery"]["creditcard"].value;
		alert("Please enter your credit card number");
	}

	if ( expiry == "") {
		document.forms["heirloomDelivery"]["expiry"].value;
		alert("Please enter expiry date");
	}
  if ( cvc == "") {
    document.forms["heirloomDelivery"]["cvc"].value;
    alert("cvc details");
  }
alert("thank you for ordering");
}

if (document.forms["heirloomDelivery"]["collect"].checked == true) {

}





function myFunction(){

  var totalPrice = 0;
  var amountSelcted = document.getElementById("amountWanted").value;
  var priceOfSallad = 4.99;
  var priceOfDelivery=0;
  var costOfBurgers = 0;

  costOfSallad = amountSelcted*priceOfSallad ;



  //This checks if the express delivery is selected
  if (document.forms["heirloomDelivery"]["express"].checked == true) {
    //in here, add 5 to total price, because express is chosen
    priceOfDelivery = 5;

  }

  totalPrice = costOfSallad + priceOfDelivery;

  //alert("total Price is " + totalPrice);
  //window.alert("works");
  window.alert(totalPrice);

}
// If the user buys 4 sallads they get free juices. Code below
function checkStock() {

	if (document.getElementById("amountWanted").value == "4") {
		 $("#panel1").slideDown("slow");

	}else {
		$("#panel1").slideUp("slow");

	}

}







function validate() {
		//lets declare some variables and put the textbox values into them
		var theEmail = document.forms["loginForm"]["email"].value;
		var thePassword = document.forms["loginForm"]["password"].value;

		//Now time for the validation
		if (theEmail == "") {
			document.forms["loginForm"]["email"].value = "Please Enter your Email";
			document.forms["loginForm"]["email"].style.backgroundColor = "red"
		}
		if (thePassword == "") {
			document.forms["loginForm"]["password"].value = "Please Enter your Email";
			document.forms["loginForm"]["password"].style.backgroundColor = "red"
		} else if (thePassword.length < 5) { //Take a look at W3 Schools JS String Validation
			alert("Password is too short");

		}


	}


function registration(){

 {
   var first =document.forms["heirloomDelivery"]["firstname"].value;
   var last =document.forms["heirloomDelivery"]["lastname"].value;
   var email =document.forms["heirloomDelivery"]["emailaddress"].value;
   var password =document.forms["heirloomDelivery"]["password"].value;

   if ( first == "") {
 		document.forms["heirloomDelivery"]["firstname"].value;
 		alert("Please enter a first name");
 	}

 	if ( last == "") {
 		document.forms["heirloomDelivery"]["lastname"].value;
 		alert("Please enter a last name");
 	}
   if ( email == "") {
     document.forms["heirloomDelivery"]["emailaddress"].value;
     alert("Please enter a email address");
   }
   if ( password == "") {
     document.forms["heirloomDelivery"]["password"].value;
     alert("Please enter a password");
   }


 }


alert("you are now registered");

}

function capreseSalad() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["salad"].checked == true) {

		  $("#panel2").slideDown("slow");

	 }else {
 		$("#panel2").slideUp("slow");

 	}
}


function chickPea() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["yes2"].checked == true) {

		  $("#panel3").slideDown("slow");

	 }else {
 		$("#panel3").slideUp("slow");

 	}
}
function superFood() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["yes"].checked == true) {

		  $("#panel4").slideDown("slow");

	 }else {
 		$("#panel4").slideUp("slow");

 	}
}
function beetroot() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["beets"].checked == true) {

		  $("#panel5").slideDown("slow");

	 }else {
 		$("#panel5").slideUp("slow");

 	}
}
function rainbow() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["carrot"].checked == true) {

		  $("#panel6").slideDown("slow");

	 }else {
 		$("#panel6").slideUp("slow");

 	}
}
function bulgar() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["bulgarwheat"].checked == true) {

		  $("#panel7").slideDown("slow");

	 }else {
 		$("#panel7").slideUp("slow");

 	}
}
function raddish() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["hraddish"].checked == true) {

		  $("#panel8").slideDown("slow");

	 }else {
 		$("#panel8").slideUp("slow");

 	}
}
function peashoot() { //This activates when the checkbox is checked

	//Slide down next part of the form
	 if (document.forms["heirloomDelivery"]["orange"].checked == true) {

		  $("#panel9").slideDown("slow");

	 }else {
 		$("#panel9").slideUp("slow");

 	}
}
