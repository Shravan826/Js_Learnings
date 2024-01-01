function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("R");
  console.log("A");
  console.log("V");
  console.log("A");
  console.log("N");
}

//sayMyName       //This is only function reference

// sayMyName()    //This is function execution

//There is no need to specify types of parameters also the returning value
function addTwoNumbers(number1, number2) {
  //1st way
  // let result = number1 + number2;
  // return result;

  //2nd way
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
//console.log("Result: ", result);


//We can also provide a default value to the parameter if nothing is provided in argument then this default value will be selected
function loginUserMessage(username /*= "sam"*/) {
  if (!username) {  //Means username is null or underfined
    console.log("Please enter a username");
    //return //If we dont want to introducce else block.
  }
    return `${username} just looged in`
}

//loginUserMessage();
  console.log(loginUserMessage("Shravan"));


//Rest Opearator in functions
function calculateAllNumbers(...num1) {
  return num1;
}
  
console.log(calculateAllNumbers(12,233,334,4554));



const myNewArray = [200, 300, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
