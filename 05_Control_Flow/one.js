//Conditions

//Operators

//Switch case statments

//Note:- I already awared with this therefore i am skipping this topics.


//**************  Nullish Coalescing Operator (??) **************

// used with null & undefined.It is actually fallback functin which will check if value is null or undefined in 1st instance then wait for 2nd instance and if recived value then store it to that variable.

let val1;
// val1 = 5 ?? 10;  //  O/p: 5
// val1 = null ?? 10 // o/p: 10
// val1 = undefined ?? 15  // o/p: 15
val1 = null ?? 10 ?? 20;  // o/p: 10



// ************ Ternary Operator (?) ********* */

//condition ? true : false

const coffeePrice = 100;

coffeePrice <= 80 ? console.log("Coffee price is less then 80") : console.log("Coffee price is greater then 80");



// ***************Additional empty or null check ******************

const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("array is empty");
}


const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}



