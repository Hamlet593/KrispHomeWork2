/*Write a function which filters object by field.

filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin", lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG" }]*/

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];


function filterByField(user, field){
  return user.filter(item => item[field])
}

console.log(filterByField(users, "isAstronaut"))