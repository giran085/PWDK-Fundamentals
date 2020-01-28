function showMurids() {
  var text = 'Daftar Murid \n'
  for (var i = 0; i < data_murid.length; i++) {
    text += (i + 1) + '. ' + data_murid[i] + ' kelas ' + kelas_murid[i] + '\n'
  }
  
  alert(text)
}

function tambahMurids() {
  let newMurid = ''
  do {
    newMurid = prompt("Tambah murid baru? q to quit")
    if(newMurid !== 'q'){
      data_murid.push(newMurid)
      kelas_murid.push('Kelas belum ada')
    }
  } while(newMurid !== 'q')
}

function hapusMurids() {
  let theMurid = ''
  let isYakin = false
  let text = ''
  do {
    
  text = 'Daftar Murid \n'
  for (var i = 0; i < data_murid.length; i++) {
    text += (i + 1) + '. ' + data_murid[i] + ' kelas ' + kelas_murid[i] + '\n'
    }
    theMurid = prompt(text + "Hapus murid? masukan murid's number or q to quit")
    if (theMurid !== 'q'){
      if(prompt("Anda yakin? y/n") == 'y'){
        isYakin = true;
      }
    }
    if(theMurid !== 'q' && isYakin){
      data_murid.pop(data_murid[theMurid] - 1)
      kelas_murid.pop(data_murid[theMurid] - 1)
    }
  } while(theMurid !== 'q')
}

function editKelas() {
  let theMurid = ''
  let text = ''
  let newKelas = ''
  do {
    text = 'Daftar Murid \n'
    for (var i = 0; i < data_murid.length; i++) {
      text += (i + 1) + '. ' + data_murid[i] + ' kelas ' + kelas_murid[i] + '\n'
    }
    theMurid = prompt(text + "Edit kelas murid? masukan murid's number or q to quit")
    newKelas = prompt('Masukan kelas baru!')
    kelas_murid[theMurid - 1] = newKelas
  } while (theMurid !== 'q')
}

// MAIN PROGRAM
var data_murid = ['Muslim', 'Tri', 'Haryo']
var kelas_murid = ['FS', 'UI', 'UX']
let isLanjut = true

let pilihan = ''
do {
  pilihan = prompt(`pilih nomor? 
    1. tampil 
    2. tambah 
    3. hapus 
    4. edit kelas 
    5. quit program`)
  switch(pilihan){
    case '1':
      showMurids()
      break;
    case '2':
      tambahMurids()
      break;
    case '3':
      hapusMurids()
      break;
    case '4':
      editKelas()
      break;
    case '5':
      isLanjut = false
  }
} while(isLanjut)
