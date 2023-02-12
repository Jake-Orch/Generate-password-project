// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var allLetters = ["abcdefghijklmnopqrstuvwxyz"];
var allLettersCaps = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ"]
var allLettersNumbers = ["abcdefghijklmnopqrstuvwxyz0123456789"]
var allLettersSpecial = ["abcdefghijklmnopqrstuvwxyz!#$%&&*+-/_:;=<>?@][(){}~"]
var allLettersCapsNumbers = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ0123456789"]
var allLettersCapsSpecial = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ!#$%&&*+-/_:;=<>?@][(){}~"]
var allLettersNumbersSpecial = ["abcdefghijklmnopqrstuvwxyz0123456789!#$%&&*+-/_:;=<>?@][(){}~"]
var allLettersCapsNumbersSpecial = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ0123456789!#$%&&*+-/_:;=<>?@][(){}~"]

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

function generatePassword({ capital, numbers, special, lengths }) {
  console.log("generatePassword is running");
  console.log("Inside generatePassword " + capital + " " + numbers + " " + special + " " + lengths)
  if (capital == true && numbers == true && special == true) {
    var pass = allLettersCapsNumbersSpecial[Math.floor(Math.random() * lengths.length)];
    console.log("all true" + pass);
//unidentified on some specific numbers e.g. 12, 16
//shows all
  }
  else if (capital == false && numbers == true && special == true) {
    var pass = allLettersNumbersSpecial[Math.floor(Math.random() * lengths.length)];
    console.log("all true but capital" + pass);

  }
  else if (capital == true && numbers == false && special == true) {
    var pass = allLettersCapsSpecial[Math.floor(Math.random() * lengths.length)];
    console.log("all true but numbers" + pass);

  }
  else if (capital == true && numbers == true && special == false) {
    var pass = allLettersCapsNumbers[Math.floor(Math.random() * lengths.length)];
    console.log("all true but special" + pass);
  }
  else if (capital == true && numbers == false && special == false) {
    var pass = allLettersCaps[Math.floor(Math.random() * lengths.length)];
    console.log("all false but capital" + pass);
  }
  else if (capital == false && numbers == true && special == false) {
    var pass = allLettersNumbers[Math.floor(Math.random() * lengths.length)];
    console.log("all false but numbers" + pass);
  }
  else if (capital == false && numbers == false && special == true) {
    var pass = allLettersSpecial[Math.floor(Math.random() * lengths.length)];
    console.log("all false but special" + pass);
  }
  else {
      var pass = allLetters[Math.floor(Math.random() * lengths.length)];
    console.log("all false" + pass);
  }
  return pass;
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