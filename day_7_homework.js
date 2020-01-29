function cycleEveryTwoDigits(num) {
  let stringNum = num.toString()
  let result = ''
  for (let i = 0; i < stringNum.length; i += 2) {
    if (i == stringNum.length - 1) {
      result += stringNum[i]
    } else {
      result += stringNum[i + 1] + stringNum[i]
    }
  }
  return Number(result)
}

const calcCircleArea = r => Math.PI * r * r

function mergeDigits(num1, num2) {
  return Number(
    num1.toString()[0] +
      num2.toString()[0] +
      num1.toString()[1] +
      num2.toString()[1]
  )
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

console.log(cycleEveryTwoDigits(9696969))
console.log(calcCircleArea(12))
console.log(mergeDigits(34, 98))
console.log(removeChars('I m a student of Purwadhika', 'a'))
console.log(swapTwoWords('Kamu Cantik'))
