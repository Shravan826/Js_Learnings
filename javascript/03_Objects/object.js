//Singleton:- When object is created using constructor then it will be always singleton.
//Object.create


const mySym = Symbol("key1");

// Object Literals
const JsUser = {
  name: "Shravan",
  "full name": "Shravan Sutar", //this can only accessed via square brackets.
  age: 18,
  [mySym]: "myKey1",   //Symbol has to declare in square brackets only
  location: "Pune",
  email: "Shravan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]
}

JsUser.email = "shravan@mxicoders.com";
//Object.freeze(JsUser);
JsUser.email = "Sharavan@abc.com"
//console.log(JsUser)
  
JsUser.greeting = function () {
  console.log("Hello JS user");
}
console.log(JsUser.greeting())

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);   //this is worng
// console.log(typeof(JsUser.mySym)) // this type will be undefined
// console.log(JsUser[mySym]);


//String Interpolation:-
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
}

JsUser.greetingTwo();

//Notes:-
/*
  1.Objects are always be in key value pairs.You can define both.
  2.Key will always be considered as string without explicitly defining it.
  3.Objects can be accessed with dot operator. for ex:- JsUser.name
  4.Objects can also be accessed with square brackets and which is the proposed way for accessing objects. But here we have to explicitely define the key as string. for ex:- JsUser["email"]
  5.Symbol has to declare in square brackets only in object. for Ex:- [mySym]: "myKey1"
  6.When we added a function to object and trying to access it via dot operator without paranthesis. For Ex:console.log(JsUser.greeting); then it will not run the function it will only give the reference of the function.
  7.Object function should be access via dot operator with paranthesis only. For ex:-console.log(JsUser.greeting())
  8.String enterpolation can be used via backticks and in the variable we can use current object via using "this" keyword.
  console.log(`Hello JS user, ${this.name}`);
*/