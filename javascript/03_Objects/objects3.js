//It is for destructuring the objects for using it at multiple instances

const course = {
  courseInstructor: "shravan",
  courseName: "javaDevelopment",
  price:10
}

//console.log(courseInstructor); It will give error cannot intialized
const { courseInstructor } = course; //Destructured one property from object
console.log(courseInstructor);


//Destructured with aliasing
const { courseInstructor: instructor } = course;
console.log(instructor)


// JSON APIs Intro

//This is a json syntax where both key also denotaed in strings
// {
//   "name": "shravan",
//   "coursename": "JavaDevelopment"
//   "price": "free"
// }


//This is also json syntax where it is returned as array of objects  
// [
//   {},
//   {},
//   {}
// ]