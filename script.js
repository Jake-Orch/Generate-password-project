// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var allLetters = "abcdefghijklmnopqrstuvwxyz";
var allCaps = "ABCDEFGHIJKLMNOPRXTUVWXYZ";
var allNumbers = "0123456789";
var allSpecial = "!#$%&&*+-/_:;=<>?@][(){}~";

function affirmData() {
  console.log("affirmData function is running");
  var capital = confirm("Would you like to use Capital letters?");
  var numbers = confirm("Would you like to use Numbers?");
  var special = confirm("Would you like to use Special characters?");
  var lengths = prompt("How long would you like the password to be? (Between 8 and 128 characters")
  capital;
  numbers;
  special;
  lengths;
  console.log("Inside affirmData " + capital + " " + numbers + " " + special + " " + lengths)
  return { capital, numbers, special, lengths };
}

function getRandomletter () {
  var randomIndex = Math.floor(Math.random()*allLetters.length);
  var value = allLetters[randomIndex];
  console.log("value " + value)
  return value;
}
function getRandomSpecial () {

}

function generatePassword({ capital, numbers, special, lengths }) {
  console.log("generatePassword is running");
  console.log("Inside generatePassword " + capital + " " + numbers + " " + special + " " + lengths)
  if (capital == true && numbers == true && special == true) {
    var lengthDiv = lengths / 4;
    console.log("length " + lengths);
    console.log("lengthDiv " +lengthDiv);
    var lengthDivRounded = Math.floor(lengthDiv);
    console.log("lengthDivRounded " + lengthDivRounded);
    var lengthModulus = lengths % 4
    console.log("lengthModulus " + lengthModulus);
    var letters = [];
    for (i = 0; i < lengthDivRounded; i++) {
    letters.push(getRandomletter());
    }
    console.log(letters);
    return ;
  }
  else if (capital == false && numbers == true && special == true) {


  }
  else if (capital == true && numbers == false && special == true) {


  }
  else if (capital == true && numbers == true && special == false) {

  }
  else if (capital == true && numbers == false && special == false) {

  }
  else if (capital == false && numbers == true && special == false) {

  }
  else if (capital == false && numbers == false && special == true) {

  }
  else {
    
  }
  return;
}

function writePassword() {
  console.log("writePassword is running");
  var affirmeddata = affirmData();
  var password = generatePassword(affirmeddata);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);