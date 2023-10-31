//slider
let sliderInput = document.querySelector(".culc__slider-input");
let sliderValue = document.querySelector(".culc__slider-value");

let monthlyInput = document.querySelector(".culc__monthly-input");
let monthlyValue = document.querySelector(".culc__monthly-value");

let investInput = document.querySelector(".culc__invest-input");
let investValue = document.querySelector(".culc__invest-value");

let inflationInput = document.querySelector(".culc__inflation-input");
let inflationValue = document.querySelector(".culc__inflation-value");

const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)

sliderInput.addEventListener("input", function () {
    sliderValue.value = sliderInput.value;
  });

sliderValue.addEventListener("input", function () {
    sliderInput.value = sliderValue.value;
  
  const min = sliderInput.min
  const max = sliderInput.max
  const val = sliderInput.value
  
  sliderInput.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  });


  monthlyInput.addEventListener("input", function () {
    monthlyValue.value = monthlyInput.value;
  });

  monthlyValue.addEventListener("input", function () {
    monthlyInput.value = monthlyValue.value;
  
  const min = monthlyInput.min
  const max = monthlyInput.max
  const val = monthlyInput.value
  
  monthlyInput.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  });


  investInput.addEventListener("input", function () {
    investValue.value = investInput.value;
  });

  investValue.addEventListener("input", function () {
    investInput.value = investValue.value;
  
  const min = investInput.min
  const max = investInput.max
  const val = investInput.value
  
  investInput.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  });



  inflationInput.addEventListener("input", function () {
    inflationValue.value = inflationInput.value;
  });

  inflationValue.addEventListener("input", function () {
    inflationInput.value = inflationValue.value;
  
  const min = inflationInput.min
  const max = inflationInput.max
  const val = inflationInput.value
  
  inflationInput.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  });