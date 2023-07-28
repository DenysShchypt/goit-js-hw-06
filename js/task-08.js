const navElement = document.querySelector("form.login-form");

function handlerProcessForm(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert(`Всі поля повинні бути заповнені`);
  }
  const valueInput = {
    email: email.value,
    password: password.value,
  };
  console.log(valueInput);
  evt.currentTarget.reset();
}

navElement.addEventListener("submit", handlerProcessForm);
