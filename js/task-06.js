const valueInput = document.querySelector("input#validation-input");

function inputValidation(evt) {
  valueInput.classList.add("invalid");
  if (Number(valueInput.dataset.length) === evt.currentTarget.value.length) {
    valueInput.classList.replace("invalid", "valid");
  }
}

valueInput.addEventListener("blur", inputValidation);
