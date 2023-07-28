const button = document.querySelectorAll("div#counter button");

const counterValue = document.querySelector("span#value");

counterValue.textContent = 0;

const newMax = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

const newMin = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

button[1].addEventListener("click", newMax);

button[0].addEventListener("click", newMin);
