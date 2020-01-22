//print '*' n times
function returnNBintang(n) {
  let z = "";
  for (let i = 0; i < n; i++) {
    z += "* ";
  }
  return z;
}

//print ' ' n timex
function returnNSpace(n) {
  let z = "";
  for (let i = 0; i < n; i++) {
    z += "  ";
  }
  return z;
}

function returnSegiTigaSikuForLoop(tinggi) {
  let result = "";
  for (let i = 0; i < tinggi; i++) {
    result += returnNBintang(i + 1) + "\n";
  }
  return result;
}

function returnSegiTigaSikuWhileLoop(tinggi) {
  let i = 0;
  let result = "";
  do {
    result += returnNBintang(i + 1) + "\n";
    i++;
  } while (i < tinggi);
  return result;
}

function returnSegiTigaSamaKaki(tinggi) {
  //Note to future self: The idea is how to print space with 1 increment and start with two oncrements with the same loop
  let result = "";
  for (let i = 0; i < tinggi * 2; i += 2) {
    result +=
      returnNSpace((tinggi - i/2) - 1) + returnNBintang(i + 1) + "\n";
  }
  return result;
}

console.log(returnSegiTigaSamaKaki(10));
console.log(returnSegiTigaSikuWhileLoop(10));
