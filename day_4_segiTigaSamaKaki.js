//print '*' n times
function returnNBintang(n) {
  let z = "";
  for (let i = 0; i < n; i++) {
    z += "*";
  }
  return z;
}

//print ' ' n timex
function returnNSpace(n) {
  let z = "";
  for (let i = 0; i < n; i++) {
    z += " ";
  }
  return z;
}

function returnSegiTigaSamaKaki(tinggi) {
  //Note to future self: The idea is how to print space
  //with 1 increment and start with two oncrements with the same loop
  let result = "";
  for (let i = 0; i < tinggi * 2; i += 2) {
    result += returnNSpace(tinggi - i / 2 - 1) + returnNBintang(i + 1) + "\n";
  }
  return result;
}

function returnSegiTigaSamaKaki2(tinggi) {
  let result = "";
  for (let i = 0; i < tinggi * 2; i += 2) {
    // (tinggi - i/2) is enough however, -1 is required to remove extra space at the start
    result += "  ".repeat(tinggi - i / 2 - 1) + "* ".repeat(i + 1);
    // adding 'return' character
    if (i < (tinggi - 1) * 2) {
      result += "\n";
    }
  }
  return result;
}

console.log(returnSegiTigaSamaKaki2(10));
console.log(returnSegiTigaSamaKaki(10));
