// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var allLetters = ["abcdefghijklmnopqrstuvwxyz"];
var allCaps = ["ABCDEFGHIJKLMNOPRXTUVWXYZ"];
var allNumbers = ["0123456789"];
var allSpecial = ["!#$%&&*+-/_:;=<>?@][(){}~"];

function lettersLoop() {
  for (var i = 0; i < allLetters.length; i++) {
    console.log("all capitals " + allLetters[i]);
  }
}

function capsLoop() {
  for (var i = 0; i < allCaps.length; i++) {
    console.log("all capitals " + allCaps[i]);
  }
}

function numbersLoop() {
  for (var i = 0; i < allNumbers.length; i++) {
    console.log("all capitals " + allNumbers[i]);
  }
}

function specialLoop() {
  for (var i = 0; i < allSpecial.length; i++) {
    console.log("all capitals " + allSpecial[i]);
  }
}

function affirmData() {
  console.log("generatePassword function is running");
  var capital = confirm("Would you like to use Capital letters?");
  var numbers = confirm("Would you like to use Numbers?");
  var special = confirm("Would you like to use Special characters?");
  var length = prompt("How long would you like the password to be? (Between 8 and 128 characters")
  capital;
  numbers;
  special;
  length;
  console.log("Inside affirmData " + capital + " " + numbers + " " + special + " " + length)
  generatePassword(capital, numbers, special, length);
  return [capital, numbers, special, length];
}

function generatePassword(capital, numbers, special, length) {
  console.log("Inside generatePassword " + capital + " " + numbers + " " + special + " " + length)
  if (capital == true && numbers == true && special == true) {
    console.log("all true")
    capsLoop();
  }
  else if (capital == false && numbers == true && special == true) {
    console.log("all true but capital")
  }
  else if (capital == true && numbers == false && special == true) {
    console.log("all true but numbers")
  }
  else if (capital == true && numbers == true && special == false) {
    console.log("all true but special")
  }
  else if (capital == true && numbers == false && special == false) {
    console.log("all false but capital")
  }
  else if (capital == false && numbers == true && special == false) {
    console.log("all false but numbers")
  }
  else if (capital == false && numbers == false && special == true) {
    console.log("all false but special")
  }
  else {
    console.log("all false")
  }

}
//write for loops, to go through the selected groups of characters, and the amount of loops is equal to the specified length

function writePassword() {
  console.log("writePassword is running");
  affirmData();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(numbers)
  console.log("Inside writePassword " + capital + " " + numbers + " " + special + " " + length)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);