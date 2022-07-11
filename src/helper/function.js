export const clas = (...agrums) => {
  return agrums.reduce((acc, item) => {
    if(typeof item === 'string') return acc + ' ' + item;

    return acc + " " + Object.keys(item).filter(key => item[key]).join(' ')
  }, '')
}

export const mapText = (text, callback) => {
  const textArr = [];
  text = text.toLowerCase()
  for(let i = 0; i < text.length; i ++) {
    textArr.push(text[i])
  }

  return textArr.map(callback)
}