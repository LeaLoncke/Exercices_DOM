
// Exo 1

var paragraphExo1 = document.getElementById('paragraphExo1');
var buttonExo1 = document.getElementById('buttonExo1');

function changeColor() {
  paragraphExo1.style.backgroundColor = 'red';
}

buttonExo1.onclick = function() {
  changeColor();
}



// Exo 2

var googleExo2 = document.getElementById('googleExo2');
var paragraphExo2 = document.getElementById('paragraphExo2');
var buttonExo2 = document.getElementById('buttonExo2');

function displayAttributes(element) {
  var attributes = googleExo2.attributes;
  for (var i = 0; i < attributes.length; i++) {
    paragraphExo2.innerHTML += attributes[i].localName + " ";
  }
}

buttonExo2.onclick = function() {
  displayAttributes(googleExo2);
}



// Exo 3

var paragraphExo3 = document.getElementById('paragraphExo3');

function changeBackground() {
  paragraphExo3.style.backgroundColor = 'white';
  paragraphExo3.innerHTML = "Hello !";
}

function resetBackground() {
  paragraphExo3.style.backgroundColor = 'lightgrey';
  paragraphExo3.innerHTML = "Fly over me!";
}

paragraphExo3.onmouseover = function () {
  changeBackground();
}

paragraphExo3.onmouseout = function() {
  resetBackground();
}



// Exo 4

var paragraphExo4 = document.getElementById('paragraphExo4');
var buttonExo4 = document.getElementById('buttonExo4');

function giveDate() {
  var date = new Date();
  paragraphExo4.innerHTML = date;
}

buttonExo4.onclick = function() {
  giveDate();
}


// Exo 5

var timeExo5 = document.getElementById('timeExo5');
var pastTimeExo5 = document.getElementById('pastTimeExo5');


var pastSecondsExo5 = setInterval(function(){ counterSeconds() }, 1000);
var secondsExo5 = 0;

function counterSeconds() {
  secondsExo5++;
  pastTimeExo5.innerHTML = "You are on this page since " + secondsExo5 + " seconds !";
}


var pastHoursExo5 = setInterval(function(){ counterHours() }, 1000);

function counterHours() {

  var dateExo5 = new Date();
  var hoursExo5 = dateExo5.getHours();
  var minExo5 = dateExo5.getMinutes();
  var secExo5 = dateExo5.getSeconds();

  timeExo5.innerHTML = "It's " + hoursExo5 + " : " + minExo5 + " : " + secExo5 + " !";
}


























// BOUH
