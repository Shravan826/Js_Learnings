//This is singleton object
//const tinderUser = new Object();


//This is non-singleton object
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

 
//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Shravan",
      lastName: "Sutar"
    }
  }
}

//console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = { obj1, obj2 }; //This will add 2 separate object into one.So, this is not correct.


//******************** merging with Object.assign()**********

//Merging by modifying 1st parameter object
/*
const obj3 = Object.assign(obj1, obj2);//This will modify the 1st object also which is not good we have to take both merged value in the new object without modifyng existing.
console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj2); //{ '3': 'a', '4': 'b' }
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/


/*
//Merging wihout modifying existing object
const obj3 = Object.assign({}, obj1, obj2);//This is the correct way of merging 2objects and store it in 3rd withut modifying orignal
console.log(obj1);
console.log(obj2);
console.log(obj3);
*/


//******************** Merging with Spread operator ***********/
const obj3 = { ...obj1, ...obj2 }; // This is via spread operator
console.log(obj3)

//From database we will receive this type of values
const users = [
  {
    id: 1,
    email:  "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedI'));


/*
Notes:
1.When we have to merge 2 objects into one then we cannot add them like this const obj3 = { obj1, obj2 } this will add 2 separate objects into one.So, this not the required solution.
*/