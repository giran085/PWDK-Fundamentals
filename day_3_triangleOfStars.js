// return bintang variable which contains triangle of '*' symbol with height of n
// in this case n = 4
// *
// **
// ***
// ****
let n = 4,
    j = 0,
    bintang = "";

do {
  let i = 0;
  while (i < j) {
    bintang += "*";
    i++;
  }
  // removing space
  if (i > 0 && i < 4) {
    bintang += "\n";
  }
  j++;
} while (j <= n);

console.log(bintang);
