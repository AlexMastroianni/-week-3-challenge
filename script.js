// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //
  // Code Plan out
  //  I need a var to store the the user input
  //  I will need to prompt the user to input a password length
  //  I will need to check if that password lenght is within 8-128
  //  Then I need to check if that the user input is a Number
  // Then I will need to ask if they want special case letters, then numbers, then uppercase.
  // Need to write if else statements to track the users selection
  // then will need to take all the user selected answer and genterate a randow string
  //
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
