
const inputContainer = document.querySelector("#palindrone-main");
const inputWord = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const definitionOutput = document.querySelector("#result-definition")

const isPalindrome = (input) => {
   const origInput = input;
   
  
  if (input === ' ') {
    alert("Please enter a valid input")
  }

  //check if palindrome, make lowercase
  
  let lowerCaseString = input.toLowerCase()
    .split("")
    .reverse()
    .join("");
  lowerCaseString.replace(/[A-Za-z]gi/, " ")
  if (origInput === lowerCaseString) {
    console.log("is a palindrome")
  } else {
    console.log("is not a palindrome")
   }
  
}

checkButton.addEventListener("click", () => {
  isPalindrome(inputWord.value);
  inputWord.value = " "
  
})







