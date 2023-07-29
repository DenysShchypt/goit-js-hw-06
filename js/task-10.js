const elemt = {
  numberElemet: document.querySelector("div#controls type"),
  inputElement: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxElement: document.querySelector("div#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerCreate(evt) {
  const amount = Number(elemt.inputElement.value);

  createBoxes(amount);
  function createBoxes(amount) {
    const numberDiv = document.createElement(`div`);
    for (let i = 0; i <= amount; i += 1) {}
    elemt.boxElement.insertAdjacentHTML("beforeend", numberDiv);
  }
}

elemt.btnCreate.addEventListener("click", handlerCreate);
console.log(elemt.boxElement);
// const amoutInput = elemt.inputElement.value;
// console.log(amoutInput);
// function handlerValueInput(evt) {
//   const amoutInput = Number(elemt.inputElement.value);

//   const numberDiv = `<div width="${amoutInput}0px" height="${amoutInput}0px"></div>`;

//   elemt.boxElement.insertAdjacentHTML("beforeend", numberDiv);
// }
// elemt.btnCreate.addEventListener("click", handlerValueInput);
