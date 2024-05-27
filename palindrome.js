
const inputContainer = document.querySelector("#palindrome-main");
const inputWord = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const definitionOutput = document.querySelector("#result")


const isPalindrome = (input) => {
  //clean up string
  const messagedInput = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  //reverse the string then return joined
  const reversedInput = messagedInput
    .split("")
    .reverse()
    .join("");
  
  if (input === ' ') {
    alert("Please enter a valid input")
  }
  
  //check if palindrome
  if (messagedInput !== reversedInput) {
    result.textContent = `${input} is not a palindrome`
  } else {
    result.textContent = `${input} is a palindrome`
   }
  
}
checkButton.addEventListener("click", () => {
  const result = isPalindrome(inputWord.value);
  console.log(result);
  inputWord.value = " "
  
  
})







