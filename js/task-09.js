const elem = {
  click: document.querySelector("button.change-color"),
  valueColor: document.querySelector("span.color"),
  color: document.querySelector("body"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerBodyColor() {
  elem.color.style.backgroundColor = getRandomHexColor();
  elem.color.style.backgroundColor.reset;
  elem.valueColor.textContent = getRandomHexColor();
}

elem.click.addEventListener("click", handlerBodyColor);
