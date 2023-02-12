// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var allLetters = ["abcdefghijklmnopqrstuvwxyz"];
var allCaps = ["ABCDEFGHIJKLMNOPRXTUVWXYZ"];
var allNumbers = ["0123456789"];
var allSpecial = ["!#$%&&*+-/_:;=<>?@][(){}~"];
var allLettersCaps = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ"]
var allLettersNumbers = ["abcdefghijklmnopqrstuvwxyz0123456789"]
var allLettersSpecial = ["abcdefghijklmnopqrstuvwxyz!#$%&&*+-/_:;=<>?@][(){}~"]
var allLettersCapsNumbers = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ0123456789"]
var allLettersCapsSpecial = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ!#$%&&*+-/_:;=<>?@][(){}~"]
var allLettersNumbersSpecial = ["abcdefghijklmnopqrstuvwxyz0123456789!#$%&&*+-/_:;=<>?@][(){}~"]
var allLettersCapsNumbersSpecial = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRXTUVWXYZ0123456789!#$%&&*+-/_:;=<>?@][(){}~"]

/*var onlyCaps = allCaps[Math.floor(Math.random() * lengths.length)];
var onlyNumbers = allNumbers[Math.floor(Math.random() * lengths.length)];
var onlySpecial = allSpecial[Math.floor(Math.random() * lengths.length)];*/

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
    console.log("all true");

  }
  else if (capital == false && numbers == true && special == true) {
    console.log("all true but capital");

  }
  else if (capital == true && numbers == false && special == true) {
    console.log("all true but numbers");

  }
  else if (capital == true && numbers == true && special == false) {
    console.log("all true but special");

  }
  else if (capital == true && numbers == false && special == false) {
    console.log("all false but capital");

  }
  else if (capital == false && numbers == true && special == false) {
    console.log("all false but numbers");

  }
  else if (capital == false && numbers == false && special == true) {
    console.log("all false but special");

  }
  else {
      var passs = allLetters[Math.floor(Math.random() * lengths.length)];
    
    console.log("all false" + passs);
  }
  return passs;
}
//write for loops, to go through the selected groups of characters, and the amount of loops is equal to the specified length

function writePassword() {
  console.log("writePassword is running");
  var affirmeddata = affirmData();
  var password = generatePassword(affirmeddata);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);