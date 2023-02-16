// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var allLetters = "abcdefghijklmnopqrstuvwxyz";
var allCaps = "ABCDEFGHIJKLMNOPRXTUVWXYZ";
var allNumbers = "0123456789";
var allSpecial = "!#$%&&*+-/_:;=<>?@][(){}~";

function affirmData() {
  console.log("affirmData function is running");
  var capital = confirm("Would you like to use Capital letters? Click OK for yes, Cancel for no.");
  var numbers = confirm("Would you like to use Numbers? Click OK for yes, Cancel for no.");
  var special = confirm("Would you like to use Special characters? Click OK for yes, Cancel for no.");
  var lengths = prompt("How long would you like the password to be? (Between 8 and 128 characters)");
   
console.log(lengths)

do {
 if (lengths < 8 || lengths > 128) {
    alert("Password length MUST be between 8 to 128 characters");
    lengths = prompt("How long would you like the password to be? (Between 8 and 128 characters)");
    lengths;
}
} while (lengths < 8 || lengths > 128);

  console.log("Inside affirmData " + capital + " " + numbers + " " + special + " " + lengths);
  return { capital, numbers, special, lengths };
}

function getRandomletter() {
  var randomIndex = Math.floor(Math.random() * allLetters.length);
  var value = allLetters[randomIndex];
  return value;
}

function getRandomCaps() {
  var randomIndex = Math.floor(Math.random() * allCaps.length);
  var value = allCaps[randomIndex];
  return value;
}

function getRandomNumbers() {
  var randomIndex = Math.floor(Math.random() * allNumbers.length);
  var value = allNumbers[randomIndex];
  return value;
}

function getRandomSpecial() {
  var randomIndex = Math.floor(Math.random() * allSpecial.length);
  var value = allSpecial[randomIndex];
  return value;
}

function generatePassword({ capital, numbers, special, lengths }) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  console.log("generatePassword is running");
  console.log("Inside generatePassword " + capital + " " + numbers + " " + special + " " + lengths)
  var lengthDiv = lengths / 4;
  var lengthsDiv3 = lengths / 3;
  var lengthsDiv2 = lengths / 2;
  var lengthDivRounded = Math.floor(lengthDiv);
  var lengthDivRounded3 = Math.floor(lengthsDiv3);
  var lengthDivRounded2 = Math.floor(lengthsDiv2);
  console.log("div rounded " + lengthDivRounded);
  var lengthModulus = lengths % 4;
  var lengthModulus3 = lengths % 3;
  var lengthModulus2 = lengths % 2;
  var lengthLetter = lengthDivRounded + lengthModulus;
  var lengthLetter3 = lengthDivRounded3 + lengthModulus3;
  var lengthLetter2 = lengthDivRounded2 + lengthModulus2;
  var newLetters = [];
  var newCaps = [];
  var newNumbers = [];
  var newSpecial = [];
  var passPhrase = [];
  if (capital == true && numbers == true && special == true) {
    for (i = 0; i < lengthLetter; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded; i++) {
      newCaps.push(getRandomCaps());
    }
    console.log(newCaps);

    for (i = 0; i < lengthDivRounded; i++) {
      newNumbers.push(getRandomNumbers());
    }
    console.log(newNumbers);

    for (i = 0; i < lengthDivRounded; i++) {
      newSpecial.push(getRandomSpecial());
    }
    console.log(newSpecial);
    passPhrase = newLetters.concat(newCaps, newNumbers, newSpecial);
    console.log("passPhrase = " + passPhrase);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else if (capital == false && numbers == true && special == true) {
    for (i = 0; i < lengthLetter3; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded3; i++) {
      newNumbers.push(getRandomNumbers());
    }
    console.log(newNumbers);

    for (i = 0; i < lengthDivRounded3; i++) {
      newSpecial.push(getRandomSpecial());
    }
    console.log(newSpecial);
    passPhrase = newLetters.concat(newNumbers, newSpecial);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else if (capital == true && numbers == false && special == true) {
    for (i = 0; i < lengthLetter3; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded3; i++) {
      newCaps.push(getRandomCaps());
    }
    console.log(newCaps);

    for (i = 0; i < lengthDivRounded3; i++) {
      newSpecial.push(getRandomSpecial());
    }
    console.log(newSpecial);

    passPhrase = newLetters.concat(newCaps, newSpecial);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else if (capital == true && numbers == true && special == false) {
    for (i = 0; i < lengthLetter3; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded3; i++) {
      newCaps.push(getRandomCaps());
    }
    console.log(newCaps);

    for (i = 0; i < lengthDivRounded3; i++) {
      newNumbers.push(getRandomNumbers());
    }
    console.log(newNumbers);

    passPhrase = newLetters.concat(newCaps, newNumbers);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else if (capital == true && numbers == false && special == false) {
    for (i = 0; i < lengthLetter2; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded2; i++) {
      newCaps.push(getRandomCaps());
    }
    console.log(newCaps);

    passPhrase = newLetters.concat(newCaps);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else if (capital == false && numbers == true && special == false) {
    for (i = 0; i < lengthLetter2; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded2; i++) {
      newNumbers.push(getRandomNumbers());
    }
    console.log(newNumbers);

    passPhrase = newLetters.concat(newNumbers);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else if (capital == false && numbers == false && special == true) {
    for (i = 0; i < lengthLetter2; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);

    for (i = 0; i < lengthDivRounded2; i++) {
      newSpecial.push(getRandomSpecial());
    }
    console.log(newSpecial);

    passPhrase = newLetters.concat(newSpecial);
    shuffle(passPhrase);
    return passPhrase.join('');
  }
  else {
    for (i = 0; i < lengths; i++) {
      newLetters.push(getRandomletter())
    }
    console.log(newLetters);
    return newLetters.join('');
  }
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