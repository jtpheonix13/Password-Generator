// Assignment Code
var generateBtn = document.querySelector("#generate");
// this variable stores the different characters from above in an array if confirmed by the user
var allCharacters = [];


//arrays to store the types of characters

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // added this to reset the allCharacters array after the password is displayed so that the screen doesn't
  // have to be refreshed to work
  allCharacters = [];

}

    //this function asks the user to select characters to inlcude in the password 
    function getPasswordCharacters() {


      // asks user if they want to include numbers
      var includeNumbers = confirm("Include numbers?");
      // adds numbers to the allCharacters array if the user confirms
      if (includeNumbers) {
        allCharacters = allCharacters.concat(numericCharacters);
      }
      // ask user if they want upper case letters
      var includeUpperCase = confirm("Include Uppercase letters?");
      // add upper case letters to the array if the user confirms
      if (includeUpperCase) {
        allCharacters = allCharacters.concat(upperCasedCharacters);
      }
      // ask user if they want lower case letters
      var includeLowerCase = confirm("Include Lowercase letters?");
      // adds lowercase letters to the array if the user confirms
      if (includeLowerCase) {
        allCharacters = allCharacters.concat(lowerCasedCharacters);
      }
      // ask user if they want to use special characters
      var includeSpecialCharacters = confirm("Include special characters?");
      // adds special characters to the array if the user confirms
      if (includeSpecialCharacters) {
        allCharacters = allCharacters.concat(specialCharacters);
      }
      // if no characters are chosen prompt user to select at least one type and call the function again
      else if (allCharacters.length === 0) {
        alert("Please choose at least one character type.")
        return getPasswordCharacters();
      }
      else return allCharacters;
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// prompts the user to answer questions about password lenght and characters and 
// stores those inputs in variables to be used to generate the password 
// that will be passed on to the write password function.
function generatePassword() {
  // prompts user to select password lenght
    var passwordLength = prompt("Chose a password length between 8 and 128.");
  // converts password lenght to a number instead of a string
    passwordLength = parseInt(passwordLength);
  // tests to see if there has been input that is valid and prompts for valid input if not.
    if (!passwordLength || passwordLength < 8 || passwordLength >128) {
      console.log(stop);
      alert("Please enter a valid number between 8 and 128.")
      return generatePassword();
    } else
      getPasswordCharacters();
      
  // this variable stores the randomly selected characters
  var randomCharacter = [passwordLength];
  
  // create for loop to select user selected amount of characters from the allCharacters array
  for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * allCharacters.length);
      randomCharacter[i] = allCharacters[index];
  }

  // variable to convert the randomCharacter array to a string
  var randomCharacterString = randomCharacter.join("");
  // return the random characters to the write password function
  return randomCharacterString;
}
