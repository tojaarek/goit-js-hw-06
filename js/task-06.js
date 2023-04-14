const textInput = document.querySelector('#validation-input');
const maxLength = parseInt(
  document.querySelector('input[data-length="6"]').dataset.length
);

textInput.addEventListener('blur', checkLength);

function checkLength() {
  if (textInput.value.length === maxLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  }
}
