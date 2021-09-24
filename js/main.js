let bigText = document.getElementById("bigText").innerHTML;
let smallText = document.getElementById("smallText").innerHTML;

let page = 1;

let symbol = ["!", "@", "#", "$", "%", "&", "*", "+", "~", "^"];

let winner = null;

console.log(symbol);

//load page
function startMind() {
  changePage();
}

//attempting to shuffle the symbol array
function shuffle() {
  let string = "";
  let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
  for (i = 0; i <= 99; i++) {
    if (i % 9 === 0) {
      //need to be the same symbol

      string = string + i + ":" + randomSymbol + "<br>";
    } else {
      //needs to be different symbols
      var randomNumber = symbol[Math.floor(Math.random() * symbol.length)];
      string = string + i + ":" + randomNumber + "<br>";
      winner = randomSymbol;
    }
  }
  return string;
}

//function to return to page 1 onclick
function returnPage() {
  page = 1;
  changePage();
}

//function to go to next page on click
function nextPage() {
  page++;
  changePage();
}

//function that changes elements on page when going through
function changePage() {
  if (page == 1) {
    document.getElementById("bigText").innerHTML = "I can read your mind.";
    document.getElementById("smallText").innerHTML = "MindReader";
  } else if (page == 2) {
    document.getElementById("bigText").innerHTML = "Pick a number 1-99";
    document.getElementById("smallText").innerHTML = "When you have your number click next";
  } else if (page == 3) {
    document.getElementById("bigText").innerHTML =
      "Add both digits together to get a new number";
    document.getElementById("smallText").innerHTML =
      "Ex 14 is 1 + 4 = 5 Click Next to Proceed";
  } else if (page == 4) {
    document.getElementById("bigText").innerHTML =
      "Subtract your new number from the original number.";
    document.getElementById("smallText").innerHTML = "Click Next to continue";
  } else if (page == 5) {
    document.getElementById("bigText").innerHTML = shuffle();
    document.getElementById("smallText").innerHTML =
      "Find your number.  Note the symbol beside your number.";
  } else if (page == 6) {
    document.getElementById("bigText").innerHTML =
      "Your symbol is...<br>" + winner;
    document.getElementById("smallText").innerHTML = "";
  }
}