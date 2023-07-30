const inputEl = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

function handlerInputSize() {
  textEl.style.fontSize = `${inputEl.value}px`;
}

inputEl.addEventListener("input", handlerInputSize);
