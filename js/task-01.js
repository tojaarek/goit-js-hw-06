const categoryList = document.querySelector("#categories"); // Selects the element with id "categories" from the DOM tree
const categoryItems = categoryList.querySelectorAll("li.item"); // Selects all the <li> elements with class "item" inside the "categories" element
console.log(`Number of categories: ${categoryItems.length}`); // Logs the number of selected <li> elements

categoryItems.forEach((item) => {
  // Iterates over each <li> element
  const headline = item.querySelector("h2"); // Gets h2 for every <li> element with class "item"
  const categoryItemsCount = item.querySelectorAll("li"); // Gets number of <li> inside <li> element with class "item"
  console.log(`Category: ${headline.textContent}`); // Logs text content inside h2 element
  console.log(`Elements: ${categoryItemsCount.length}`); // Logs number of <li> elements for every h2 element
});
