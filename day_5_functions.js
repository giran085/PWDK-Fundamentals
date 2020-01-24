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

function ganjilGenap(number) {
  if (number % 2 == 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

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

console.log(
  angkaTerbesar(1200, -1, 12),
  ganjilGenap(11),
  hapusVokal("Fikri"),
  filterstring("12383FIKDJF14"),
  cekPlatNomor('D 4 ED')
);
