
export const serviceEnding = number => {
  const arr = String(number).split("")
  if (arr[arr.length - 2] === '1') return 'услуг'
  else if (arr[arr.length - 1] === '1') return 'услуга'
  else if (arr[arr.length - 1] === '2' || arr[arr.length - 1] === '3' || arr[arr.length - 1] === '4') return 'услуги'
  return 'услуг'
}

export const randomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const toLowerCase = str => {
  return str.toLowerCase()
}

export default function getNumber(string) {
  let numEl = '';  // numEl изначально строка, чтобы числа не складывались друг с другом, а приписывались
  for (let index in string) {  // Перебираем каждый символ. Если символ можно распарсить как номер, приписываем к строке
    if (parseInt(string[index])) {
      numEl += string[index]
    }
  }
  return parseInt(numEl);
}



/* getNumber();

function getNumber() {
  let string = window.location.pathname
  let id = parseInt(string.replace(/[^\d]/g, ''))
  console.log(id)
  dispatch(onEmptyStore(id, GET_СATEGORIES))
} */

