function inputCheck(itemName) {
  let isLanjutCheck = false
  let sumItem = 0
  do {
    sumItem = prompt(`Masukan Jumlah ${itemName}`)
    if (Number(sumItem) < 0 || isNaN(sumItem)) {
      alert('input error! ')
      isLanjutCheck = true
    } else {
      return sumItem
    }
  } while (isLanjutCheck)
}

function stockAndInputCheck(stock, itemName) {
  let isLanjutCheck = false
  let sumItem = 0
  do {
    sumItem = inputCheck(itemName)
    if (sumItem > stock) {
      alert(
        `maaf, stok ${itemName} habis, stok tinggal ${stock}, ulangi input!`
      )
      isLanjutCheck = true
    } else {
      return sumItem
    }
  } while (isLanjutCheck)
}

function isUlangRoutine(message, routineName) {
  let condition = false;
  let yn = ''
  let isLanjutCheck = false
  do {
    yn = prompt(`Ulang ${routineName}? y/n`).toLowerCase()
    if (yn == 'y') {
      condition = true
      return condition
    } else if (yn == 'n') {
      if (message) {
        alert(message)
      }
      condition = false
      return condition
    } else {
      alert('input error')
      isLanjutCheck = true
    }
  } while (isLanjutCheck)
}

function proceedToBill(names, qtys, prices) {
  //summing total cost
  let total = 0
  for (let i = 0; i < names.length; i++) {
    total += qtys[i] * prices[i]
  }

  let message = ''
  let dibayar, kembalian
  let isLanjutCheck = false
  do {
    dibayar = prompt('Masukan nilai uang dibayar')
    kembalian = dibayar - total
    if (kembalian < 0) {
      alert('Uangnya kurang coy!, ulangi transaksi!')
      isLanjutCheck = true
    } else {
      for (let i = 0; i < names.length; i++) {
        message += `${names[i]} x ${prices[i]} = Rp${qtys[i] *
          prices[i]} \n`
      }

      message += `Total: Rp${total} \n Kembalian: Rp${kembalian}`
      alert(message)
      isLanjutCheck = false;
    }
  } while (isLanjutCheck)
}

function inputProdukBaru(names, stocks, prices) {
  let name = '', price = 0, stock = 0, isLanjutCheck = false
  do {
    name =prompt("Nama Produk")
    price = Number(prompt("Price Produk"))
    stock = Number(prompt("Stok Produk"))
    
    //pushing into array
    names.push(name)
    stocks.push(stock)
    prices.push(price)

    isLanjutCheck = isUlangRoutine('Input data selesai', 'input data')
    
  } while(isLanjutCheck) 
}

function editStuff(names, stuffs, stuffsName) {
  let message = ''
  let selectedItem = ''
  let newValue = ''
  let isLanjutCheck = false
  do {
    message = ''
    for (let i = 0; i < names.length; i++){
      message += `${i + 1}. ${names[i]} ${stuffsName}: ${stuffs[i]} \n`
    }
    message += 'pilih nomor dari list of items berikut. q to quit to main menu'
    selectedItem = prompt(message) - 1

    if (!isNaN(selectedItem)) {
      newValue = prompt(`selected item adalah ${names[selectedItem]}, dengan ${stuffsName}: ${stuffs[selectedItem]} \n input ${stuffsName} baru!`)
    stuffs[selectedItem] = Number(newValue)
    } else {
      isLanjutCheck = false
    }
    isLanjutCheck = isUlangRoutine(`Edit ${stuffsName} selesai!`, `edit ${stuffsName}`)
  } while (isLanjutCheck)
}

function deleteStuff(names, stocks, prices) {
  let indexOfStuff = ''
  let isYakin = false
  let list = ''

  do {
    list = ''
    for (let i = 0; i < names.length; i++){
      list += `${i + 1}. ${names[i]} stok: ${stocks[i]} \n`
    }
    indexOfStuff = prompt(`Hapus item?\n${list} masukan items's number or q to quit to main menu`)
    if (indexOfStuff !== 'q') {
      if(prompt("Anda yakin? y/n") == 'y'){
        isYakin = true;
      }
    }
    if (indexOfStuff !== 'q' && isYakin) {
      names.pop(names[indexOfStuff])
      stocks.pop(stocks[indexOfStuff])
      prices.pop(prices[indexOfStuff])
    }
  } while (indexOfStuff !== 'q')
}
/** MAIN PROGRAM **/

let itemNames = ['Apple', 'Grape', 'Orange']
let itemStocks = [8, 10, 7]
let itemQtys = []
let itemPrices = [1000, 15000, 60000]
let isUlangProgram = false
let isPembeli = false

/* for penjual */

do {
  
  if (prompt("Anda pembeli? y/n") == 'y') {
    isPembeli = true
  } else {
    isPembeli = false
  }
  
  if (isPembeli) {
    for (let i = 0; i < itemNames.length; i++) {
      itemQtys[i] = stockAndInputCheck(itemStocks[i], itemNames[i])
    }
    proceedToBill(itemNames, itemQtys, itemPrices)
  } else {
    let pilihan;
    let isLanjut = true
    do {
      pilihan = prompt(`Pilih menu berikut:
         1. Input Produk Baru
         2. Edit stock
         3. Edit harga
         4. Delete product

         press q to quit to main program
      `)

      switch(pilihan){
        case '1':
          inputProdukBaru(itemNames, itemStocks, itemPrices)
          break;
        case '2':
          editStuff(itemNames, itemStocks, 'stok')
          break;
        case '3':
          editStuff(itemNames, itemPrices, 'harga')
          break;
        case '4':
          deleteStuff(itemNames, itemStocks, itemPrices)
          break;
        case 'q':
          isLanjut = false

      }
    } while (isLanjut)
  } 
  
  isUlangProgram = isUlangRoutine('Terimakasih telah berbelanja', 'program')
} while (isUlangProgram)
