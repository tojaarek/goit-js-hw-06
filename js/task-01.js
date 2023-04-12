const categoryList = document.querySelector("#categories");
const categoryItems = categoryList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const headline = item.querySelector("h2");
  const categoryItemsCount = item.querySelectorAll("li");
  console.log(`Category: ${headline.textContent}`);
  console.log(`Elements: ${categoryItemsCount.length}`);
});
