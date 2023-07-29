const valueInput = document.querySelector("input#validation-input");

function handlerInputColor(evt) {
  valueInput.classList.add("invalid");
  if (Number(valueInput.dataset.length) === evt.currentTarget.value.trim().length) {
    valueInput.classList.replace("invalid", "valid");
  };
};

valueInput.addEventListener("blur", handlerInputColor);
