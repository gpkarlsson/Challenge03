// Arrays with different character types
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "/", "?", "<", ">", ".", ",", "[", "]", "{", "}", ":", ";", "~", "`"];

function generatePassword() {
  var options = [];

// First prompt for user to choose password length
const numChars = window.prompt("Enter number of characters between 8 and 128", "");

const isNum = !isNaN(parseInt(numChars));

//Check number for user length, check if user input is a number, if not inform user that they have to put in a number
if(isNum && parseInt(numChars) < 8 || isNum && parseInt(numChars) > 128) {
  return alert("You must enter a number between 8 and 128");
} else if (!isNum) {
  alert("You must enter a number");
};

// Prompt user to choose what character types to include
var numChoice = window.confirm("Do you want to use numbers?");

var lowerChoice = window.confirm("Do you want to use lowercase letters?");

var upperChoice = window.confirm("Do you want to use uppercase letters?");

var specialChoice = window.confirm("Do you want to use special characters?");

// If statements to determine which types of characters will be used to generate the password based on user input
if(numChoice == true)     {  options = options.concat(number);}
if(lowerChoice == true)   {  options = options.concat(lowercase);}
if(upperChoice == true)   {  options = options.concat(uppercase);}
if(specialChoice == true) {  options = options.concat(specialChars);}


// If 4 negative options chosen, show message saying that user must choose at least one
if (!numChoice && !lowerChoice && !upperChoice && !specialChoice) {
  alert("At least one option must be chosen");

  return "At least one character type must be chosen, please try again";
} 

// Empty array that the password will be generated into
var password = [];

// For loop to increase the length until it matches user chosen length
for (var i = 0; i < numChars; i++) {
  var character; 
  password.push(options[Math.floor(Math.random() * options.length)]);  
 }

 // Removes commas in generated array using the join method
const newPass = password.join("");
 return newPass;

};

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