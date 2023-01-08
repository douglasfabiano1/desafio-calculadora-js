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

function btnPlusClick(event){
  event.preventDefault();

  if(inputNumber1.value > 0 && inputNumber2.value > 0){
      const resultBox = parseFloat(inputNumber1.value) + parseFloat(inputNumber2.value);
      document.getElementById('result-box').innerHTML = resultBox;
  }
}

const btnTimes = document.querySelector('[id="btn-times"]');
btnTimes.addEventListener('click', btnTimesClick);

function btnTimesClick(event){
  event.preventDefault();

  if(inputNumber1.value > 0 && inputNumber2.value > 0){
    const resultBox = parseFloat(inputNumber1.value) * parseFloat(inputNumber2.value);
    document.getElementById('result-box').innerHTML = resultBox;
  }
}

const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener('click', btnClearClick);

function btnClearClick(event){
  event.preventDefault();
  inputNumber1.value = "";
  inputNumber1.classList.remove("input-error");
  inputNumber2.value = "";
  inputNumber2.classList.remove("input-error");
  document.getElementById('result-box').innerHTML = 0;
}
