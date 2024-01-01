//Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 11, 23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

//If we have to create time stamp of the date 
console.log(myCreatedDate.getTime());

//If we have to convert timestamp from miliseconds to seconds
console.log(Date.now() / 1000);

//For removing the decimal places and convert it to real number
console.log(Math.round(Date.now() / 1000));

let newDate = new Date();

//For start calculating from 1 and for displaying the correct month to end user
console.log(myDate.getMonth() + 1);

//It will give weekdays in number not in name 
console.log(myDate.getDay());

//For customizing the localeString response
let customDateString = newDate.toLocaleString('default', {
  weekday: "long"
});


console.log(customDateString);