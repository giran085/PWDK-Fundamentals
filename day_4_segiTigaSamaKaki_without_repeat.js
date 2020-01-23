let tinggi = 10
let result = "";
for (let i = 1; i < tinggi * 2; i+=2) {
  for(let k = tinggi - i /2 - 1; k > 0; k--){
    result += ' '
  }
  for(let j = 0; j < i * 2 ; j+=2){
    result += '*'
  }
  result += '\n'
}

console.log(result);
