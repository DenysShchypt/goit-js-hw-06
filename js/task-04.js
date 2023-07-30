const elements = {
  incrementButton: document.querySelector("[data-action='increment']"),
  decrementButton: document.querySelector("[data-action='decrement']"),
  counterValue: document.querySelector("span#value"),
};
elements.incrementButton.addEventListener("click", updateCounterValue);
elements.decrementButton.addEventListener("click", updateCounterValue);

function updateCounterValue(evt) {
  const currentBtnAction = evt.currentTarget.dataset.action;
  let startValue = Number(elements.counterValue.textContent);

  switch (currentBtnAction) {
    case "increment":
      startValue += 1;
      break;

    case "decrement":
      startValue -= 1;
      break;
  }
  elements.counterValue.textContent = startValue;
}
