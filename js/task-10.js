function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const buttonCreate = controls.querySelector("button[data-create]");
const buttonDestroy = controls.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const amount = controls.querySelector("input").value;

buttonCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = boxSize;
    box.style.height = boxSize;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
    boxSize += 10;
  }
}
