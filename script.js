// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "X", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allSpecial = ["!", "#", "$", "%", "&", "&", "*", "+", "-", "/", "_", ":", ";", "=", "<", ">", "?", "@", "]", "[", "(", ")", "{", "}", "~"];

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
  return [capital, numbers, special, length];
}

function generatePassword() {
  console.log("Inside generatePassword " + capital + " " + numbers + " " + special + " " + length)
}

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
console.log("Outside function " + capital + " " + numbers + " " + special + " " + length)