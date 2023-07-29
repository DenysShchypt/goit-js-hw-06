const newText = document.querySelector("input#name-input");

const input = document.querySelector("span#name-output");

function handlerInput(event) {
  input.textContent = "Anonymous";
  if (event.currentTarget.value.trim() !== "") {
    input.textContent = event.currentTarget.value;
  }
}

newText.addEventListener("input", handlerInput);
