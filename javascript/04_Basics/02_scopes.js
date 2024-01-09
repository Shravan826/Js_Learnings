let a = 10;
const b = 20;
var c = 30;  // Var should not be used becuase it doesn't follow scope rules


if (true) {
  let a = 100;
  const b = 200;
  var c = 300;
}

// console.log(a); // o/p:10 
// console.log(b);
// console.log(c);


if (true) {
  const username = "hitesh";
  if (true) {
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website);   //Error: Underfined
}
//console.log(username);   //Error: Undefined


console.log(addOne(5)); // O/P: 6
function addOne(num) {
  return num+1
}

console.log(addTwo(5)); // Error: called before initialization
const addTwo = function (num) {
  return num + 2;
}


 



// Notes:-
// 1)Let should be used instead of var because it follows scope rules.
// 2)In coding environment and in browser environment at both places the scope is different
// 3)addOne() method is a function declaration and addTwo() is a expression in which variable holds the function.
// 4)expression means variable which holds the function cannot access or call before its initialization.