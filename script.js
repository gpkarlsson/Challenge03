// Assignment code here

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "/", "?", "<", ">", ".", ",", "[", "]", "{", "}", ":", ";", "~", "`"]
var options = [];

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

if(numChoice == true) {
  options = [number];
}

if(lowerChoice == true) {
  options = [lowercase];
};

if(upperChoice == true) {
  options = [uppercase];
}

if (specialChoice == true) {
  options = [specialChars];
}

// if(numChoice && lowerChoice && upperChoice && specialChoice) {
//   options = [number, lowercase, uppercase, specialChars];
//   console.log(options);
// }

// 
if (!numChoice && !lowerChoice && !upperChoice && !specialChoice) {
  alert("At least one critera must be chosen");

  // else if for 4 positive options
} else if (numChoice && lowerChoice && upperChoice && specialChoice) {

  options = number.concat(lowercase, uppercase, specialChars);

} else if (numChoice && lowerChoice && upperChoice) {
  
  options = number.concat(lowercase, uppercase);

} else if (numChoice && lowerChoice) { 
  
  options = number.concat(lowercase);

} else if (numChoice && specialChoice) {
 
  options = number.concat(specialChars);

} else if (lowerChoice && upperChoice && specialChoice) {
  
  options = lowercase.concat(uppercase, specialChars);

} else if (lowerChoice && upperChoice) {
  
  options = lowercase.concat(uppercase);

} else if (lowerChoice && specialChoice) {

  options = lowercase.concat(specialChars);

} else if (upperChoice && numChoice && specialChoice) {

  options = upperChoice.concat(number, specialChars);

}


console.log(options);

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

