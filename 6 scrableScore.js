/*Given a word, compute the scrabble score for the given word. To calculate scrabble score use the following table of scores:

Hint: to save this data use an array, where indices are scores and each element is the sequence of appropriate characters([‘aeioulnrst’, ...]).*/

const data = ['', 'aeioulnrst', 'dg', 'bcmp', 'fhvwy', 'k', 'jx', 'qz'];

function scrabbleScore(word){
  let arrayWord = word.split('');
  return arrayWord.reduce((acc, item) => {
    for(let index = 1; index < data.length; index++){
      if(data[index].includes(item)){
        acc += index
        break;
      }
    }
    return acc;
  }, 0)

}
console.log(scrabbleScore('another'))
console.log(scrabbleScore('quick'))