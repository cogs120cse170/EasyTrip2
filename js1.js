function land(){
	window.location.href="./LandingPage.html";
}
function signin(){
	var inputName = document.getElementById("Ename");
	if(inputName.value){
		localStorage.setItem("Uname", inputName.value);
	}
	else {
		localStorage.setItem("Uname", "Stranger");
	}
	var inputPW = document.getElementById("Epassword");
	localStorage.setItem("Upassword", inputPW.value);
	window.location.href="./LandingPage.html";
}

function facebookSignin(){
	var inputName = document.getElementById("Fname");
	if(inputName.value){
		localStorage.setItem("Uname", inputName.value);
	}
	else {
		localStorage.setItem("Uname", "Stranger");
	}
	var inputPW = document.getElementById("Fpassword");
	localStorage.setItem("Upassword", inputPW.value);
	window.location.href="./LandingPage.html";
}
function googleSignin(){
	var inputName = document.getElementById("Gname");
	if(inputName.value){
		localStorage.setItem("Uname", inputName.value);
	}
	else {
		localStorage.setItem("Uname", "Stranger");
	}
	var inputPW = document.getElementById("Gpassword");
	localStorage.setItem("Upassword", inputPW.value);
	window.location.href="./LandingPage.html";
}

function tagAdd(){

	// var userTags = [];
	// userTags[0] = document.getElementById("tags");
	// localStorage.setItem("userTags", JSON.stringify(userTags));

	var userTags;
	userTags = document.getElementById("tags");
	localStorage.setItem("userTags", userTags.value);


	// userTags.push(inputTag.value);
	// localStorage.setItem("Utag", inputTag.value);
	window.location.href="./profile.html";
	// var names = [];
	// names[0] = prompt("New member name?");
	// localStorage.setItem("names", JSON.stringify(names));
	//
	// //...
	// var storedNames = JSON.parse(localStorage.getItem("names"));

//
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;
//
// function myFunction() {
//     fruits.push("Lemon");
//     document.getElementById("tagBox").innerHTML = userTags;
// }
}

// Facebook login
var modal = document.getElementById('fblogin');
window.onclick = function(event) {
		if (event.target == modal) {
				modal.style.display = "none";
		}
}
// Google login
var modal = document.getElementById('googlelogin');
window.onclick = function(event) {
		if (event.target == modal) {
				modal.style.display = "none";
		}
}

function signup(){
	var inputEmail= document.getElementById("Uemail");
	localStorage.setItem("Uemail", inputEmail.value);

	var inputName = document.getElementById("Uname");
	if(inputName.value){
		localStorage.setItem("Uname", inputName.value);
	}
	var inputPW= document.getElementById("Upassword");
	localStorage.setItem("Upassword", inputPW.value);
	window.location.href="./LandingPage.html";
}

function updateProfile(){
	var inputName = document.getElementById("getName");
	if(inputName.value)
		localStorage.setItem("Uname", inputName.value);

	var inputEmail = document.getElementById("getEmail");
	if(inputEmail.value)
		localStorage.setItem("Uemail", inputEmail.value);
	window.location.href="./LandingPage.html";
}




function calender(){
    var number=document.getElementsByClassName('form-control').length;
    var locations=[];
    var startDates=[];
    var endDates=[];

    var i;
    for (i = 0; i < number; i++) {
        locations.push(document.getElementsByClassName('form-control')[i].value);
        startDates.push(document.getElementsByClassName('start')[i].value);
        endDates.push(document.getElementsByClassName('end')[i].value);
    }

    localStorage.setItem("locations",JSON.stringify(locations));
    localStorage.setItem("startDates",JSON.stringify(startDates));
    localStorage.setItem("endDates",JSON.stringify(endDates));
	window.location.href="./calendar.html";
    //alert(JSON.stringify(locations));
}
function calender1(){
    var dselected= localStorage.getItem("date_selected");
    var places=[];
    if (localStorage.getItem(dselected) === null) {
        places=[];
    }
    else{
       places= JSON.parse(localStorage.getItem(dselected));
    }

    

    var place= document.getElementById('place').textContent;
    places.push(place);
    localStorage.setItem(dselected,JSON.stringify(places));
    //localStorage.setItem('places',"Metropolitan");
    window.location.href="./calendar.html";
}


function plan(){
	window.location.href="./TripPlan.html";
}
function search(){
	window.location.href="./search.html";
}
function review(){
	window.location.href="./review.html";
}
function result(){
	window.location.href="./results.html";
}
function newLoc(){
	// $("div.locations").append("<br><br><div id=trip_ex><br><br><p> Place:</p><input type=\"text\" name=\"Location\" placeholder=\"Location\"/><p> Dates:</p> <input type=\"text\" name=\"Start Date\" placeholder=\"Start Date\"/><input type=\"text\" name=\"End Date\" placeholder=\"End Date\"/></div><br><br>")
	$("div.locations").append("<li><form class = \"form\">Place<p class=\"answerlist\" align=\"center\"><input type=\"text\" class=\"form-control\" name=\"location\" placeholder=\"Location\"></p></form></li><li>Dates </br>\<p class=\"answerlist\">From <input class= \"start\" type=\"date\"> to <input class= \"end\" type=\"date\"></p><br></li>")
}
// To popup fb login screen
function fb() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function modifyDate(date){
    var year =date.substring(2,4);
    var day= date.substring(5,7);
    var month= date.substring(8);
    var formated= day+"/"+month+"/"+year
    return new Date(formated);
}

// Create a new list trip to a landing page when "ADD" is clicked
function newTrip() {
	// new list to be added
  var li = document.createElement("li");
	 // <input ~~~ id="myNewTrip" ~~~> to be entered when user makes action
  var inputValue = document.getElementById("myNewTrip").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    // alert("");
  } else {
    document.getElementById("myTripList").appendChild(li);
  }
	// clear
  document.getElementById("myNewTrip").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
