// Arrays with different character types
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

//Check if user input is a number, if not inform user that they have to put in a number
if(isNum && parseInt(numChars) < 8  || isNum && parseInt(numChars) > 128) {
  alert("You must enter a number between 8 and 128");
} else if (!isNum) {
  alert("You must enter a number");
};

//!! FIX !! If number not between 8 and 128 is chosen, redirect user to length prompt. Currently allows password generator to proceed even if the length is not between 8 and 128 !!

// Prompt user to choose what character types to include
var numChoice = window.confirm("Do you want to use numbers?");
console.log(numChoice);

var lowerChoice = window.confirm("Do you want to use lowercase letters?");
console.log(lowerChoice);

var upperChoice = window.confirm("Do you want to use uppercase letters?");
console.log(upperChoice);

var specialChoice = window.confirm("Do you want to use special characters?");
console.log(specialChoice);

// If statements to determine which types of characters will be used to generate the password
if(numChoice == true)     {  options = options.concat(number);}
if(lowerChoice == true)   {  options = options.concat(lowercase);}
if(upperChoice == true)   {  options = options.concat(uppercase);}
if(specialChoice == true) {  options = options.concat(specialChars);}


// 4 negative options -> must choose at least one
if (!numChoice && !lowerChoice && !upperChoice && !specialChoice) {
  alert("At least one option must be chosen");

  return "At least one character type must be chosen, please try again";
} 

console.log(options);

//empty array that the password will be generated into
var password = [];

// For loop to increase the length until it matches user chosen length
for (var i = 0; i < numChars; i++) {
  var character; 
  password.push(options[Math.floor(Math.random() * options.length)]);
 console.log(password);
 }

 return password; // !! FIX !! Returned password has commas, need to fix so that commas do not show up

 //function to write password into text box
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

