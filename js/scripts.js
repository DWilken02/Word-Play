window.onload = () => {
  document.querySelector('form').addEventListener("submit",handleFormSubmission);
}

function handleFormSubmission(event) {
  event.preventDefault();
  let userInputStr = document.getElementById("userInput").value;
  const wordsArray = userInputStr.split(' ');
  let longWordsArray = [];
  wordsArray.forEach(function(word) {
   if (word.length >= 3) {
    longWordsArray.push(word);
   }
  })
  longWordsArray = longWordsArray.reverse();
  const joinedArray = longWordsArray.join(' ');
  const pElement = document.createElement("p");
  pElement.append(joinedArray);
  const body = document.querySelector("body");
  body.append(pElement);
}