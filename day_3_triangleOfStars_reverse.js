// return bintang variable which contains triangle of '*' symbol with height of n
// in this case n = 4

// ****
// ***
// **
// *

let n = 5,
    j = 0,
    bintang = "";

do {
  let i = n;
  while (i > j) {
    bintang += "*";
    i--;
  }
  // removing space
  if (j < n) {
    bintang += "\n";
  }
  j++;
} while (j < n);

console.log(bintang);
