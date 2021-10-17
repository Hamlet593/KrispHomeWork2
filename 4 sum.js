/*Given an array, return the sum of the numbers that are 18 or over (your function must use reduce method).

const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43] // 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347*/

function sum(arr){
  return arr.reduce((acc, item) => {
    return item < 18 ? acc : acc + item
  }, 0)
}
console.log(sum([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]))