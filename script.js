// Assignment code here

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var charsNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//var charsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var charsUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var charsSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "/", "?", "<", ">", ".", ",", "[", "]", "{", "}", ":", ";", "~", "`"]
//var passwordLength = 12;
//var password = "";

function generatePassword() {
  console.log("Button pressed");
  // 1. Prompt the user for the password criteria
    // a. Password length 8 < 128
    // b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate assword based on criteria

// 4. Display password to page

// let numChars = window.prompt("Enter number of characters between 8 and 128");
const numChars = window.prompt("Enter number of characters between 8 and 128", "");

const isNum = !isNaN(parseInt(numChars));

if(isNum && parseInt(numChars)< 8  || isNum && parseInt(numChars)) {
  alert("You must enter a number between 8 and 128");
} else if (!isNum) {
  alert("Enter number");
}
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

