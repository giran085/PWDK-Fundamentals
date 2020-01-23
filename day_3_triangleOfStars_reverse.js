// return bintang variable which contains triangle of '*' symbol with height of n
// in this case n = 4

// ****
// ***
// **
// *

let n = 5
let bintang = ''
for(let g = 0; g < n; g++){
  for(let i = 0; i < (n - g); i++){
    bintang += '*'
  }
  bintang += '\n'
}

console.log(bintang);

