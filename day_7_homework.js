function cycleEveryTwoDigits(num) {
  let stringNum = num.toString()
  let result = ''
  for (let i = stringNum.length - 1; i > 0; i -= 2) {
    result += stringNum[i - 1] + stringNum[i]
  }
  return result
}

const calcCircleArea = r => Math.PI * r * r

function mergeDigits(num1, num2) {
  let hasil = ''
  if (num1.toString().length == num2.toString().length) {
    for (let i = 0; i < num1.toString().length; i++){
      hasil += num1.toString()[i] + num2.toString()[i]
    }
    return hasil
  } else {
    return 'digit harus sama'
  }
}

function removeChars(string, character) {
  let result = ''
  for (let i = 0; i < string.length; i++){
    if (string[i] !== character) {
      result += string[i]
    }
  }
  return result;
}

const swapTwoWords = string => `${ string.split(' ')[1]} ${ string.split(' ')[0] }`

console.log(cycleEveryTwoDigits(123456))
console.log(calcCircleArea(12))
console.log(mergeDigits(345, 989))
console.log(removeChars('I m a student of Purwadhika', 'a'))
console.log(swapTwoWords('Makan Hati'))
