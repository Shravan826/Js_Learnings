//2 types of data types primitive and non-primitive

// Primitive: There are 7 types
// String , Number, Boolean, null, undefined, symbol, BigInt,

const score = 1000;
const scoreValue = 100.3;

const isLoggedIn = true;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123'); 
  
//console.log(id === anotherId);

//For declaring bigInt we have to add suffix n
const bigNumber = 343384785439875487459387398787398375738397573983753793593n;

const heros = ["shaktiman", "nagraj"];
let myObj = 
{
  name: "raj",
  age: 23,
}
 
const myFunction = function () {
  console.log("Hello World!");
}

//console.log(typeof(myFunction));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primtive), Heap(Non-Primitive)

let myYoutubeName = "xyz.com";
let anotherName = myYoutubeName;


console.log(anotherName);


