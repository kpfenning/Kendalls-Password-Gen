// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = 8;

var choices = [];

var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];


// Write password to the #password input
function writePassword() {
  var truePrompts = getPrompts();

    if (truePrompts){
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
  }
}

function generatePassword(){
  var password = "";
  for(var i = 0; i < charLength; i++){
    var letterRandom = Math.floor(Math.random() * choices.length);
    password = password + choices[letterRandom];

  }
  return password;
}

function getPrompts () {
  charLength = parseInt(prompt("How many characters do you want your password to be?"))

  if(isNaN(charLength) || charLength < 8 || charLength >128){
    alert("Please try again using 8 to 128 characters.");
    return false;
  }
  if (confirm("Would you like lowercase characters in your password?")){
    choices = choices.concat(lowerCase);
  }
  if (confirm("Would you like uppercase characters in your password?")){
    choices = choices.concat(upperCase);
  }
  if (confirm("Would you like special characters in your password?")){
  choices = choices.concat(specialChar);
  }
  if (confirm("Would you like numbers in your password?")){
    choices = choices.concat(lowerCase);
  }
  return true;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);