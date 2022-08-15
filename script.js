// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Item lists
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var specialLetters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "?",
    "_",
    "+",
    "~",
  ];

  // User Inputs a number between 8-128
  var userInput = window.prompt(
    "Password Length: Select a number between 8 - 128"
  );

  //password Lenght is from user input, checks if there a number in the string return from the user
  var passwordLength = parseInt(userInput);

  //Checks if the input is a Number and if its between 8-128
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("This is Invalid");
    return;
  }
  //Asking the users to configure there password
  var userLowercase = window.confirm("Would you like Lowercase ");
  var userUppercase = window.confirm("Would you like Uppercase ");
  var userNumber = window.confirm("Would you like Numbers");
  var specialCharacters = window.confirm("Would you like special Characters");

  // A placeholder for all users answers
  var userSelection = [];

  if (userLowercase === true) {
    userSelection.push(lowercaseLetters);
  }

  if (userUppercase === true) {
    userSelection.push(uppercaseLetters);
  }

  if (specialCharacters === true) {
    userSelection.push(specialLetters);
  }

  if (userNumber === true) {
    userSelection.push(numbers);
  }

  console.log(userSelection);

  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var userChoice =
      userSelection[Math.floor(Math.random() * userSelection.length)];
    password.push(userChoice);

    window.alert(password);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
