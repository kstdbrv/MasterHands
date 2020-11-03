
export const serviceEnding = number => {
  const arr = String(number).split("")
  if (arr[arr.length - 2] == '1') return 'услуг'
  else if (arr[arr.length - 1] === '1') return 'услуга'
  else if (arr[arr.length - 1] === '2' || arr[arr.length - 1] === '3' || arr[arr.length - 1] === '4') return 'услуги'
  return 'услуг'
}

export const randomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}