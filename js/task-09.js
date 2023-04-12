function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.querySelector("body");
const buttonChange = document.querySelector("button.change-color");
const colorCode = document.querySelector("span.color");

buttonChange.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
}
