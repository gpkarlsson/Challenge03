// Assignment code here
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = 12;
// var password = "";

function generatePassword() {
  console.log("Button pressed");
  // 1. Prompt the user for the password criteria
    // a. Password length 8 < 128
    // b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate assword based on criteria

// 4. Display password to page

  return "Generated password";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

