const element = {
  inputElement: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxElement: document.querySelector("div#boxes"),
};

element.btnDestroy.addEventListener("click", destroyBoxes);
element.btnCreate.addEventListener("click", handlerCreate);

function destroyBoxes() {
  element.boxElement.innerHTML = "";
}

function handlerCreate() {
  const amount = Number(element.inputElement.value);
  createBoxes(amount);
  function createBoxes(amount) {
    let startWidth = 30;
    let startheight = 30;
    let markup = "";
    for (let i = 1; i <= amount; i += 1) {
      startWidth += 10;
      startheight += 10;
      markup += `<div style="width: ${startWidth}0px; height: ${startheight}0px; background: ${getRandomHexColor()};"></div>`;
    }
    element.boxElement.insertAdjacentHTML("beforeend", markup);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
