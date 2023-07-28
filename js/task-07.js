const eventInput = document.querySelector("input#font-size-control");
const textAbra = document.querySelector("span#text");

function handlerInputSize() {
  textAbra.style.fontSize = `${eventInput.value}px`;
}

eventInput.addEventListener("input", handlerInputSize);
