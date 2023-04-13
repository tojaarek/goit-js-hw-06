function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const buttonCreate = controls.querySelector('button[data-create]');
const buttonDestroy = controls.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = parseInt(controls.querySelector('input').value);
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
    boxSize += 10;
  }
}

buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const boxToDestroy = boxesContainer.querySelectorAll('div');
  boxToDestroy.forEach((box) => {
    box.remove();
  });
}
