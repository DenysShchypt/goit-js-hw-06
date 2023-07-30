const navEl = document.querySelector("ul#categories");

const ulElement = navEl.children;

console.log(`Number of categories: ${ulElement.length}`);

[...ulElement].forEach((elem) => {
  const nextElem = elem.firstElementChild.textContent;
  console.log(`Category:${nextElem}`);
  const sumchildLastElem = elem.lastElementChild.children.length;
  console.log(`Elements:${sumchildLastElem}`);
});
