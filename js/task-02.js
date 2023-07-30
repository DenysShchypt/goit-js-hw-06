const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsListEl = document.querySelector(`ul#ingredients`);

function renderItems(ingredients) {
  const markup = ingredients.map((ingredient) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = ingredient;
    itemElement.classList.add("item");
    return itemElement;
  });
  ingredientsListEl.after(...markup);
}

renderItems(ingredients);
