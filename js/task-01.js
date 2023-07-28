const navEl = document.querySelector("ul#categories");

const ulElement = navEl.children;

console.log(`Number of categories: ${navEl.children.length}`);

[...ulElement].forEach((elem) => {
  const nextElem = elem.firstElementChild.textContent;
  console.log(`Category:${nextElem}`);
  const childLastElem = elem.lastElementChild;
  const sumchildLastElem = childLastElem.children.length;
  console.log(`Elements:${sumchildLastElem}`);
});
