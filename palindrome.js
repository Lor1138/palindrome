
const inputContainer = document.querySelector("#palindrone-main");
const inputWord = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const definitionOutput = document.querySelector("#result-definition")




const isPalindrome = (input) => {
  const origInput = input.replace(/[^A-Za-z0-9]/g, " ").toLowerCase();
  const reversedInput = origInput
    .split("")
    .reverse()
    .join("");
  
  if (input === ' ') {
    alert("Please enter a valid input")
  }

  //check if palindrome, make lowercase
  
  
  //lowerCaseString = lowerCaseString.replace(/[A-Za-z]gi/, " ")
  if (origInput === reversedInput) {
    return `${input} is a palindrome`
  } else {
    return `${input} is not a palindrome`
   }
  
}

checkButton.addEventListener("click", () => {
  const result = isPalindrome(inputWord.value);
  console.log(result);
  inputWord.value = " "
  
})







