function formatDuration(num) {
  let tahun = 0
  let menit = 0
  let jam = 0
  let hari = 0

  tahun = Math.floor(num / (60 * 60 * 24 * 30 * 12))

  // proses sisa hari
  num = num % (60 * 60 * 24 * 365)
  hari = Math.floor(num / (60 * 60 * 24))

  // proses sisa jam
  num = num % (60 * 60 * 24)
  jam = Math.floor(num / (60 * 60))

  // proses sisa menit
  num = num % (60 * 60)
  menit = Math.floor(num / 60)

  //sisa detik
  num = num % 60

  //display
  let Y = ''
  tahun == 1
    ? Y = `${tahun} Year`
    : Y = `${tahun} Years`
  let D = ''
  hari == 1
    ? D = `${hari} Day`
    : D = `${hari} Days`
  let H = ''
  jam == 1
    ? H = `${jam} Hour`
    : H = `${jam} Hours`
  let m = ''
  menit == 1
    ? m = `${jam} Minute`
    : m = `${jam} Minutes`
  let s = ''
  num == 1
    ? s = `${num} Second`
    : s = `${num} Seconds`
  
  return `${Y} ${D} ${H} ${m} ${s}` 
}

function arrayMash(arr1, arr2) {
  let result = []
  for (let i = 0; i < arr1.length; i++){
    result.push(arr1[i], arr2[i])
  }
  return result
}

function summation(num) {
  let display = ''
  let result = 0
  
  //jumlahin aja
  for (let i = 0; i <= num; i++){
    result += i
  }
  
  //display
  for (let i = 1; i <= num; i++){
    display += `${i} `
    if (i < num) {
      display += '+ '
    }
    if (i == num) {
      display += `= ${result}` 
    }
  }
  return display
}

function ideas(arr) {
  let goodCount = 0;
  while (arr.indexOf('good') > -1) {
    console.log(arr)
    goodCount++
    arr.splice(arr.indexOf('good'), 1)
  }
  if (goodCount == 0) {
    return `Fail`
  } else if (goodCount > 2) {
    return `I smell a series`
  } else {
    return 'Publish'
  }
}

function sequenceSum(start, end, n) {
  let display = ''
  let result = 0
  for (let i = start; i <= end; i += n){
    result += i
  }
  //display
  for (let i = start; i <= end; i += n){
    display += `${i} `
    if (i < end) {
      display += '+ '
    }
    if (i == end) {
      display += `= ${result}` 
    }
  }
  return display;
}
console.log(formatDuration(123456789))
console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']))
console.log(summation(4))
console.log(ideas(['good', 'good', 'bad', 'good']))
console.log(sequenceSum(2, 6, 2))
