const elemt = {
  numberElemet: document.querySelector("div#controls type"),
  inputElement: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxElement: document.querySelector("div#boxes"),
};
console.log(elemt.inputElement.value);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerValueInput(evt) {
  const amount = Number(evt.currentTarget.value);
  function createBoxes(amount) {
    const numberDiv = document.createElement(`div`);
    console.log(numberDiv);
    elemt.boxElement.insertAdjacentHTML("beforeend", numberDiv);
  }
  elemt.btnCreate.addEventListener("click", createBoxes(amount));
}
elemt.inputElement.addEventListener("input", handlerValueInput);

// const amoutInput = elemt.inputElement.value;
// console.log(amoutInput);
// function handlerValueInput(evt) {
//   const amoutInput = Number(elemt.inputElement.value);

//   const numberDiv = `<div width="${amoutInput}0px" height="${amoutInput}0px"></div>`;

//   elemt.boxElement.insertAdjacentHTML("beforeend", numberDiv);
// }
// elemt.btnCreate.addEventListener("click", handlerValueInput);
