// for of

// ["", "", ""];
//[{},{},{}]

//This loop can be use for iterate any iterable thing in js such as string, array, map.

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  //console.log(num);
}

//This loop is simpler or we can say broader version for loop here we don't have to sepcify the size and don't have to mention the increament. It will iterate till the end of the object.

//We can also use this on strings
const greetings = "Hello World!";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`);
}


// Maps
const map = new Map();
map.set('IN', 'India');
map.set('FR', 'France');
map.set('GR', 'Greece');
// console.log(map);

for (const [key, value] of map) {
  //console.log(key, ':', value); 
}



//Objects
const myObj = {
  game1: 'NFS',
  game2: 'SpiderMan'
}

//This will give error because objects are not iterable
for (const [key, value] of myObj) {
 console.log(key, ':', value);
}
