const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

input.addEventListener('input', changeFontSize);

function changeFontSize() {
  output.style.fontSize = `${input.value}px`;
}
