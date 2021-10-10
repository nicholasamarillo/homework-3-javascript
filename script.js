// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var nums = "1234567890".split("");
var special = "!@#$%^&*".split("");
var charLength;
var lowerCase;
var upperCase;
var specChar;
var num;



function getLength(){
  charLength = window.prompt("How many characters would you like you password to be?");
   
   if (charLength < 8 ){
    window.prompt("The password cannot be less than 8 characters. Please enter a larger number.");
  }else if (charLength > 128){
    window.prompt("The password cannot be more than 128 characters. Please enter a smaller number.");
  }return charLength;
} 

function getLowerCase(){
  lowerCase = window.prompt("Would you like lowercase letters in your password, Yes or No?");
  lowerCase = lowerCase.toLowerCase();

  if (lowerCase === "yes"){
    lowerCase = true;
    return lowerCase;
  }else if (lowerCase === "no"){
    lowerCase = false;
    return lowerCase;
  }else {
    window.prompt("Please enter Yes or No.");
    getLowerCase();
  }
  return lowerCase;
}

function getUpperCase() {
  upperCase = window.prompt("Would you like uppercase letters in your password, Yes or No?");
  upperCase = upperCase.toLowerCase();
  
  if (upperCase === "yes"){
    upperCase = true;
    return upperCase;
  }else if (upperCase === "no"){
    upperCase = false;
    return upperCase;
  }else {
    window.prompt("Please enter Yes or No.");
    getUpperCase();
  }
  return upperCase;
}

function getSpecChar() {
  specChar = window.prompt("Would you like special characters in your password, Yes or No?");
  specChar = specChar.toLowerCase();
  
  if (specChar === "yes"){
    specChar = true;
    return specChar;
  }else if (specChar === "no"){
    specChar = false;
    return specChar;
  }else {
    window.prompt("Please enter Yes or No.");
    getSpecChar();
  }
  return specChar;
}

function getNumber(){
  num = window.prompt("Would you like to add numbers to your password, Yes or No?");
  num = num.toLowerCase();

  if (num === "yes"){
    num = true;
    return num;
  }else if (num === "no"){
    num = false;
    return num;
  }else {
    window.prompt("Please enter Yes or No.");
    getNumber();
  }
  return num;
}

   


function generatePassword() {
  getLength();
  getLowerCase();
  getUpperCase(); 
  getSpecChar();
  getNumber();
  console.log(charLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specChar);
  console.log(num);
  var character = lower;
  var password = ""; 
  
  if (lowerCase && upperCase && num && specChar){
    character += lower + upper + nums + special;
  
  }else if (upperCase && num && specChar){
    character += upper + nums + special;

  }else if (lowerCase && num && specChar) {
    character += lower + num + special;
  
  }else if (lowerCase && num && upperCase) {
    character += lower + num + upper;

  }else if (lowerCase && specChar && upperCase) {
    character += lower + special + upper;
  
  }else if (upperCase && num){
    character += upper + nums;
  
  }else if (num && specChar){
    character += nums + special;
  
  }else if (upperCase && specChar){
    character += upper + special;
  
  }else if (upperCase){
    character += upper;
  
  }else if(num){
    character += nums;
  
  }else if (specChar){
    character += special;
  
  }else{
    character = lower;
  }
  
  for(var i = 0; i < charLength; i++){
    password += character.charAt(Math.floor(Math.random()*character.length));
  }return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

generateBtn.addEventListener("click", writePassword);

