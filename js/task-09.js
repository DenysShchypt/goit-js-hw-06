const element = {
  btn: document.querySelector("button.change-color"),
  span: document.querySelector("span.color"),
  body: document.querySelector("body"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerBodyColor() {
  element.body.style.backgroundColor = getRandomHexColor();
  element.span.textContent = getRandomHexColor();
}

element.btn.addEventListener("click", handlerBodyColor);
