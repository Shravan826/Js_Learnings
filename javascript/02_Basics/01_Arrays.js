const myArr = [0, 1, 2, 3, 4, 5];
const newArr = (0, 1, 2, 3, 4, 5);

//slice() will create the sub array copy and dont affect orginal array
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log(myArr);

//splice() will create the sub array but romve the element from orignal array and add it to the new sub array
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log(myArr);