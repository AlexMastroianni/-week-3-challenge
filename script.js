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
  var userLowercase = window.confirm("Would you like lowercase letters?");
  var userUppercase = window.confirm("Would you like uppercase letters? ");
  var userNumber = window.confirm("Would you like numbers?");
  var specialCharacters = window.confirm("Would you like special characters? ");

  // A placeholder for all users answers
  var userSelection = [];

  //if statements colleting the window.confirm user inputs
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

  // Holding the final generated password
  var password = [];

  //for loop to select random numbers  throught the selected arrarys
  for (var i = 0; i < passwordLength; i++) {
    var userPassword =
      userSelection[Math.floor(Math.random() * userSelection.length)];
    userPassword.push(password);
  }

  // Printing out the final result
  window.alert(password);

  // printing all the vars for testing
  console.log("User lowercase:" + userLowercase);
  console.log("User Uppercase:" + userUppercase);
  console.log("User Numbers:" + userNumber);
  console.log("User SC:" + specialCharacters);
  console.log("User password:" + password);
  console.log("User userPassword:" + userPassword);
  console.log("User userSelection:" + userSelection);
  console.log("User passwordLength:" + passwordLength);
  console.log("UserInput:" + userInput);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
