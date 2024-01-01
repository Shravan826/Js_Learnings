//For In
const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'Swift by apple'
}

for (const key in myObject) {
  //console.log(`${key} is shortcut for ${myObject[key]}`);
}
//O/P: js is shortcut for javascript
  // cpp is shortcut for C++
  // rb is shortcut for ruby
  // swift is shortcut for Swift by apple

//For In loop on array
// This loop will iterate over keys and give kyes directly so in array indexes are the keys.
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //console.log(key);
  // O/P: 0,1,2,3,4

  //console.log(programming[key]);
  //O/P: js
      // rb
      // py
      // java
      // cpp
}



//For In loop on Maps:
// Note: Maps are not iterable in For In loop
const map = new Map();
map.set('IN', 'India');
map.set('FR', 'France');
map.set('GR', 'Greece');

for (const key in map) {
  console.log(key); 
  // O/P: Map are not Iterable
}

// Note Major Differences:
//1. For iterating on Maps we can use 'for of' loop and iterating on Objects we can use 'for in' loop
//2. For Iterating on Arrays,Strings,Objects using for in lopp it will be iteratable via kyes.
// 3. While iterating using for of loop it will be iterate via values directly. 