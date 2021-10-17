/*Implement the following methods array.*/

// ● slice

Array.prototype.slice = function(start = 0, end = this.length){

  if(start > this.length){
    return [];
  }
  
  if(start < 0 && start + this.length > 0){
    start += this.length
  }
  else if(start < 0 && start + this.length < 0){
    start = -this.length;
    start += this.length;
  }
  
  if(end < 0){
    end += this.length
  }
  
  if(end > this.length - start){
    end = this.length;
  }
  
  let result = [];
  for(let i = start; i < end; i++){
    result = result.concat(this[i]);
  }
  
  return result;
}


let arr = [1, 2, 3, 4]

let a = arr.slice(40);
let b = arr.slice(-48);
let c = arr.slice(-1);
let d = arr.slice(-3, -1);
let e = arr.slice();
let f = arr.slice(1, 3);
let g = arr.slice(3);

console.log(arr); // [1, 2, 3, 4]

console.log(a); // []
console.log(b); // [1, 2, 3, 4]
console.log(c); // [4]
console.log(d); // []
console.log(e); // [1, 2, 3, 4]
console.log(f); // [2, 3]
console.log(g); // [4]

// ● splice

Array.prototype.splice = function(start, deleteCount, ...items){
  
  let result = [];

  if(arguments.length < 1 || deleteCount < 0 || typeof start !== 'number'){ //իրական splice-ի դեպքում, եթե start-ին թիվ չենք տալիս, կամ start-ին թիվ տալիս ենք բայց deleteCount-ը դիտմամբ բացասական ինչ-որ 
    // անկապ թիվ ենք գրում, ապա splice ֆունկցիան վերադարձնում է նոր դատարկ array, + մեր սկզբնական array-ն էլ չի փովում:
    //Կամ եթե start-ին ինչ-որ անկապ սթրինգ ենք տալիս: ԱյՍ երեք պայմանները գրել եմ այս բլոկում:
    return result;
  }
  
  if(start < 0){ //Իրական splice-ի դեպքում եթե start-ը տալիս ենք բացասական թիվ, ապա հետհաշվարկը սկսվում է վերջից, նույնը արել եմ այս բլոկում:
    start += this.length;
  }
  
  if(deleteCount === undefined || deleteCount > this.length - start){ //Իրական splice-ի դեպքում եթե start արգումենտը տալիս եմ, բայց deleteCount արգումենտը չեմ տալիս,
    //ապա ջնջվող item-ների քանակը դառնում է start-ից հետո մինչև array-ի մնացած length: Կամ, եթե deleteCount-ը դիտմամբ նշում եմ ինչ-որ անկապ մեծ թիվ՝
    //array-ի length-ից մեծ, ապա deleteCount-ի արժեքը սահմանափակվում է դարձյալ start-ի ինդեքսից հետո մինչև array-ի մնացած length:
    deleteCount = this.length - start
  }
  

  for(let i = start; i < start + deleteCount; i++){
    result = result.concat(this[i]); //Սկսում եմ կուտակել splice ֆունկցիայի կողմից վերադարձվող array-ը և 
    delete this[i] //զուգահեռ պակասեցնում եմ սկզբնական array-ը
  }


  let temp = this.filter(item => item); //undefined-ներից ազատվելու համար ֆիլտրվող this-ը ժամանակավոր պահում եմ 
  //temp-ի վրա, այնուհետև this-ը հատ հատ սարքում temp-ը (որովհետև js-ը հնարավորություն չի տալիս անմիջապես this-ը ֆիլտրեմ ու հավասարացնեմ this-ի)
  for(let i = 0; i < temp.length; i++){
    this[i] = temp[i]
  }
  this.length = temp.length; //this-ի length-ը բնական է, որ չպետք է գերազանցի ֆիլտրված array-ի length-ը (custom case է)
  
  if(deleteCount === 0 || deleteCount > 0){ //Ամենասիրածս հատվածը
    let fromArr = this.slice(0, start);
    let arrTo = this.slice(start);
    let temp = [...fromArr, ...items, ...arrTo];
    for(let i = 0; i < temp.length; i++){
      this[i] = temp[i]
    }
  }
  return result
};


let arr = [1, 2, 3, 4, 5, 6, 7];
let test = arr.splice(2, 4, 'aa');

console.log(test);

console.log(arr)

//Կարող եք ցանկացած case-ով test գրել՝ ըստ ձեր հայեցողության ^^ օրինակ՝ այստեղինը՝ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// find

Array.prototype.find = function (fn){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)){
      result = result.concat(this[i]);
      break;
    }
  }
  return result
};


let arr = [1, 2, 3, 2, 4, 5];

let test = arr.find(function(item){
  if(item === 2){
    return item
  }
});

console.log(test)

// map

Array.prototype.map = function(fn){
  let result = [];
  for(let i = 0; i < this.length; i++){
    let eachItem = fn(this[i], i, this);
    result = result.concat(eachItem)
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6];

let test = arr.map((item, index, array) => item * index);

console.log(test);
console.log(arr);

// filter

Array.prototype.filter = function(fn){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)){
      result = result.concat(this[i])
    }
  }
  return result
}

let arr = [1, 2, 2, 2, 3, 3, 4, 5, 6, 3];

let newArr = arr.filter((item, index) => item === index);

console.log(arr);
console.log(newArr)

// every

Array.prototype.every = function (fn){
  for(let i = 0; i < this.length; i++){
    if(!fn(this[i], i, this)){
      return false
    }
  }
  return true;
}

let arr = [1, 2, 3, 4, 5, 6];

let test = arr.every(function (item, index, array){
  return item > 7
})

console.log(arr);
console.log(test);

// some

Array.prototype.some = function(fn){
  for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)){
      return true;
    }
  }
  return false;
}

let arr = [3, 2, 3, 3, 5, 6];
let test = arr.some((item, index) => item + index === 5);

console.log(test);
console.log(arr);

// reduce

Array.prototype.reduce = function(fn, acc){
  
  let i = 0;
  
  if(arguments.length < 2){
    acc = this[0];
    i = 1;
  }
  
  for(; i < this.length; i++){
    acc = fn(acc, this[i], i, this)
  }
  return acc;
}

let arr = [1, 3, 5, 7];

let test = arr.reduce((acc, item) => acc + item, 5);
console.log(test);
console.log(arr)