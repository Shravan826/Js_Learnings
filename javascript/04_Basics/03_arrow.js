const user = {
  username: "shravan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`)
  }
}

// user.welcomeMessage()  //O/P: shravan, welcome to website
// user.username = "sam";
// user.welcomeMessage();  //O/P: sam, welcome to website



// function chai() {
//   let username = "shravan";
//   console.log(this.username);
// }
// chai();  //Error: this cannot be used in functions


//This is explicit return arrow function
// const addTwo = (num1, num2) => {
//   return num1+ num2
// }

//Implicit return arrow function
// const addTwo = (num1, num2) => num1 + num2;

//This is standard arrow function by wrapping return values
const addTwo = (num1, num2) => (num1 + num2);

//This is how we can return object in the arrow function
const obj = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

//Notes:
// 1)this can be used in objects but this can not be used in functions
// 2)