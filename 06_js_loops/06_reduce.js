//reduce function
// This is a function which return sum of array it has 2 params 1st is accumulator which is explicitly define at the end and 2nd is current value. so it will add accumulator and current value and pass sum to accumulator to store it. at the end it wil retunr final accumulator value. 

const myNums = [1, 2, 3];

// Expilicit Way:
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval
// }, 0);

// Implicit Way:
const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);

const shoppingCart = [
  {
    itemName: "js course",
    price: 3999
  },
  {
    itemName: "py course",
    price: 999
  },
  {
    itemName: "mobile dev  course",
    price: 7999
  },
  {
    itemName: "data scientist course",
    price: 9999
  }
]

const totalCartPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalCartPrice);