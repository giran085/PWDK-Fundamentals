function squareEveryDigits(num){
  num = String(num)
  let hasil = ''
  for(let i = 0; i < num.length; i++){
    hasil += num[i] * num[i]
  }
  return hasil;
}


function removeFirstAndLastChar(string){
  let hasil = ''
  for (let i = 1; i < string.length - 1; i ++){
    hasil += string[i] 
  }
  return hasil
}

function removeVocal(string) {
  let hasil = '';
  for (let i = 0; i < string.length; i++) {
    if ('aiueoAIUEO'.indexOf(string[i]) < 0) {
      hasil += string[i];
    }
  }
  return hasil;
}

function simpleCalculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
  }
}

function totalPrice(quantity, price, discount){
  return quantity * price * (1 - discount / 100)
}

console.log(squareEveryDigits(334));
console.log(removeFirstAndLastChar('Fikri'));
console.log(removeVocal('Fikri'));
console.log(simpleCalculator(5, 8, '+'));

var qty = 4
var price = 20000
var diskon = 20

console.log(totalPrice(qty, price, diskon));
