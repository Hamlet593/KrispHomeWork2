/*Write a function which calculator average age of user (your function must use reduce method).*/

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(users){
  return users.reduce((acc, item) => acc + item.age, 0) / users.length
}

console.log(getAverageAge(users))