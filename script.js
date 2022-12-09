// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "/", "?", "<", ">", ".", ",", "[", "]", "{", "}", ":", ";", "~", "`"];


function generatePassword() {
  var options = [];
  console.log("Button pressed");
  // 1. Prompt the user for the password criteria
    // a. Password length 8 < 128
    // b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input
// 3. Generate assword based on criteria

// 4. Display password to page

const numChars = window.prompt("Enter number of characters between 8 and 128", "");

const isNum = !isNaN(parseInt(numChars));

if(isNum && parseInt(numChars) < 8  || isNum && parseInt(numChars) > 128) {
  alert("You must enter a number between 8 and 128");
  console.log("test");
} else if (!isNum) {
  alert("Enter number");
};

var numChoice = window.confirm("Do you want to use numbers?");
console.log(numChoice);

var lowerChoice = window.confirm("Do you want to use lowercase letters?");
console.log(lowerChoice);

var upperChoice = window.confirm("Do you want to use uppercase letters?");
console.log(upperChoice);

var specialChoice = window.confirm("Do you want to use special characters?");
console.log(specialChoice);
//if lowerChoice is true, put lowercase letters in, if false move on, use same logic for all of them. console log options

if(numChoice == true) {  options = options.concat(number);}
if(lowerChoice == true) {  options = options.concat(lowercase);}
if(upperChoice == true) {  options = options.concat(uppercase);}
if(specialChoice == true) {  options = options.concat(specialChars);}


// 4 negative options -> must choose at least one
if (!numChoice && !lowerChoice && !upperChoice && !specialChoice) {
  alert("At least one option must be chosen");

  return "test";
} 

console.log(options);

//var password = [];

};

for (var i = 0; i < numChars; i++) {
   var chooseOptions = options[Math.floor(Math.random() * options.length)];
   password.push(chooseOptions);
  console.log(password);
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

