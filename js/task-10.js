// Не встиг доробити

const element = {
  numberElemet: document.querySelector("div#controls type"),
  inputElement: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxElement: document.querySelector("div#boxes"),
};

function handlerCreate() {
  const amount = Number(element.inputElement.value);
  createBoxes(amount);
  function createBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
      const creatingSquare = `<div style="width: ${i}0px; height: ${i}0px; background: ${getRandomHexColor()};"></div>`;
      element.boxElement.insertAdjacentHTML("beforeend", creatingSquare);
    }
  }
}

element.btnCreate.addEventListener("click", handlerCreate);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
