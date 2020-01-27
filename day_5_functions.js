function hapusVokal(string) {
  let hasil = "";
  let vocals = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  for (let i = 0; i < string.length; i++) {
    if (vocals.indexOf(string[i]) <= 0) {
      hasil += string[i];
    }
  }
  return hasil;
}

const ganjilGenap = number => number % 2 == 0 ? 'Ganjil' : 'Genap'

function angkaTerbesar(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

function filterstring(string) {
  let hasil = "";
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i]))) {
      hasil += string[i];
    }
  }
  return hasil;
}

function cekPlatNomor(string) {
  let tanggal = new Date();
  tanggal = tanggal.getDate()
  let nomorPlat = string.substr(2, 1)
  if (ganjilGenap(tanggal) == ganjilGenap(nomorPlat)) {
    return 'Boleh Lewat'
  } else {
    return 'Gak Boleh Lewat'
  }
}

console.log(angkaTerbesar(1200, -1, 12))
console.log(ganjilGenap(11))
console.log(hapusVokal("Fikri"))
console.log(filterstring("12383FIKDJF14"))
console.log(cekPlatNomor('D 4 ED'))