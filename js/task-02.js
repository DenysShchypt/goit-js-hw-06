const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const grandEl = document.querySelector(`ul#ingredients`);
function getLi(arry) {
  const resolt = arry.map((arr) => {
    const el = document.createElement("li");
    el.textContent = arr;
    el.classList.add("item");
    return el;
  });
  grandEl.after(...resolt);
}

getLi(ingredients);
