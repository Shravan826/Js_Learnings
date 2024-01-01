//For each cannot reaturn or perform operation on item's.

const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  //console.log(item);
  // O/p:- js
        // ruby
        // java
        // python
        // cpp
  return item
}) 

//console.log(values);
// O/p:- undefined


  
// Filters
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Implicit return
// const newNums = myNums.filter((num) => (num > 4));
// console.log(newNums);
// O/p: [ 5, 6, 7, 8, 9, 10 ]


//Null if not explicitly return while using curly braces
//const newNums = myNums.filter((num) => {
// num > 4;
// });
// console.log(newNums);
// O/p: []


// using forEach
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// })

// console.log(newNums);


// Use of filter
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userbooks = books.filter((bk) => bk.genre === 'History');

userbooks = books.filter((bk) => {
  return bk.genre === 'Science' && bk.publish >= 1995;
})
console.log(userbooks);