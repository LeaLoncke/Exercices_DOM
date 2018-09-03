
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


var pastHoursExo5 = setInterval(function(){ counterHours() }, 1000);

function counterHours() {

  var dateExo5 = new Date();
  var hoursExo5 = dateExo5.getHours();
  var minExo5 = dateExo5.getMinutes();
  var secExo5 = dateExo5.getSeconds();

  timeExo5.innerHTML = "It's " + hoursExo5 + " : " + minExo5 + " : " + secExo5 + " !";
}


var pastSecondsExo5 = setInterval(function(){ counterSeconds() }, 1000);
var secondsExo5 = 0;

function counterSeconds() {
  secondsExo5++;
  pastTimeExo5.innerHTML = "You are on this page since " + secondsExo5 + " seconds !";
}



// Exo 6

var buttonExo6 = document.getElementById('buttonExo6');
var numberClick = 0;

buttonExo6.onclick = function() {

  numberClick++;

  if (numberClick === 1) {
    buttonExo6.style.backgroundColor = 'lightblue';
  }
  if (numberClick === 2) {
    buttonExo6.style.backgroundColor = 'blue';
  }
  if (numberClick === 3) {
    buttonExo6.style.backgroundColor = 'red';
    buttonExo6.innerHTML = "You can not click !";
    buttonExo6.setAttribute(disabled, disabled);

  }

}


// Exo 7

var tableExo7 = document.getElementById('tableExo7');
var buttonExo7 = document.getElementById('buttonExo7');
var numberLine = 1;

buttonExo7.onclick = function() {

  numberLine++;

  var rows = tableExo7.insertRow(numberLine);
  var cell1 = rows.insertCell(0);
  var cell2 = rows.insertCell(1);

  cell1.innerHTML = "Line " + (numberLine + 1);
  cell2.innerHTML = "Line " + (numberLine + 1);

}



// Exo 8

var exo9 = document.getElementById('exo9');
var div8 = document.createElement('div');
var a8 = document.createElement('a');
var img8 = document.createElement('img');
var p8 = document.createElement('p');

document.body.insertBefore(div8, exo9);
div8.style.backgroundColor = 'lightgrey';

div8.appendChild(a8);
a8.href = "#";
a8.target = "_blank";

a8.appendChild(img8);
img8.src = "img/img1.jpeg";
img8.alt = "image 1";

a8.appendChild(p8);
p8.innerHTML = "description de l'image";



// Exo 9

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var paragraph9 = document.getElementById("p9");

var imagesTable = new Array();

function countImages(element) {
  element.style.color = 'grey';
  imagesTable.push(element.id);

  if (imagesTable.length >= 3) {
    paragraph9.innerHTML = "Félicitations, vous avez cliqué sur les 3 images. Voici leurs id : " + imagesTable[0] + " - " + imagesTable[1] + " - " + imagesTable[2];
    for (var i = 0; i < img123.length; i++) {
      img123[i].style.display = 'none';
    }
  }

} // end of function countImages(element)

img1.addEventListener("click", function removeEvent() {
    countImages(this);
    img1.removeEventListener("click", removeEvent);
});

img2.addEventListener("click", function removeEvent() {
    countImages(this);
    img2.removeEventListener("click", removeEvent);
});

img3.addEventListener("click", function removeEvent() {
    countImages(this);
    img3.removeEventListener("click", removeEvent);
});


// Exo 10

var divExo10 = document.getElementById('divExo10');
var buttonExo10 = document.getElementById('buttonExo10');

// onclick
buttonExo10.addEventListener("click", waitTwoSeconds);

// function & setTimeout
function waitTwoSeconds() {
  setTimeout(function(){ divExo10.innerHTML = "The content as changed !"; }, 2000);
}




















// BOUH
