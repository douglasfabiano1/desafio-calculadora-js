const inputNumber1 = document.querySelector('[name="number1"]');
inputNumber1.addEventListener('change', handleInputNumber1Change);
inputNumber1.classList.remove("input-error");

function handleInputNumber1Change(event){
  isNumber(event.target.value) ? event.target.classList.remove("input-error")
  : event.target.classList.add("input-error");
}

const inputNumber2 = document.querySelector('[name="number2"]');
inputNumber2.addEventListener('change', handleInputNumber2Change);
inputNumber2.classList.remove("input-error");

function handleInputNumber2Change(event){
  isNumber(event.target.value) ? event.target.classList.remove("input-error")
  : event.target.classList.add("input-error");
}

function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const btnPlus = document.querySelector('[id="btn-plus"]')
btnPlus.addEventListener('click', btnPlusClick);