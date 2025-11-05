const result = document.querySelector('#result');

const number1 = Number(prompt("Zadejte první číslo:"));
const number2 = Number(prompt("Zadejte druhé číslo:"));
const number3 = Number(prompt("Zadejte třetí číslo:"));




function max3(number1, number2, number3) {
  let maxNumber;
  if (number1 > number2) {
    maxNumber = number1;

  } else {
    maxNumber = number2;
  };

  if (number3 > maxNumber) {
    maxNumber = number3;
  };

  result.textContent = `Nejvyšší číslo ze zadaných čísel ${number1}, ${number2} a ${number3} je ${maxNumber}.`;


};

max3(number1, number2, number3);

