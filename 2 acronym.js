/*Convert a long phrase to its acronym.*/

function acronym(str){
  return str
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .map(item => item[0])
    .join('')
}

console.log(acronym('Prisoner of War'))
console.log(acronym('Have a good night'))