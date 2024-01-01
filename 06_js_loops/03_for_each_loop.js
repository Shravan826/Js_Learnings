//For each loop which is inbuilt in js.

const coding = ["js", "ruby", "python", "java", "cpp"];

coding.forEach(function (val) { 
  //console.log(val);
})
//In this forEach loop callback function is used and that function doesn't have any name.


//for each Using callback arrow function
coding.forEach((item) => {
  console.log(item);
  // O/P:js
      // ruby
      // python
      // java
      // cpp
})


// All parameters available in for each loop
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
  // O/P:js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ruby 1['js', 'ruby', 'python', 'java', 'cpp']
// python 2['js', 'ruby', 'python', 'java', 'cpp']
// java 3['js', 'ruby', 'python', 'java', 'cpp']
// cpp 4['js', 'ruby', 'python', 'java', 'cpp']
})


// Array of Objects use for each for iteration.
const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js"
  },
  {
    languageName: "python",
    languageFileName: "py"
  },
  {
    languageName: "java",
    languageFileName: "java"
  }
] 

myCoding.forEach((item) => {
  console.log(item.languageFileName);
  // O/p:js
      // py
      // java
})