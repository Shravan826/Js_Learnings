

//Promises:It is an object which represents eventual failure or success wich ocurres asyncronously.
//It is mostly consumed or we can say used.

//Take another instance of promise object via new keyword.
const promiseOne = new Promise(
  function (resolve, reject) {
    //this can do an async task
    //DB calls, cryptography, network calls
    //Now here for ex we will take setTimeout as an async task.
    setTimeout(function () {
      console.log('Async task is executed');
      
      //This will execute the function logic of then and this should be use in async method itself
      resolve();
    }, 1000);
  });

//Consuming of promise
//then keyword is connected with resolve so when we used then it will execute the function login used in promise function.then function accpets callback function as a parameter witch will executed afte resolve() is called.
promiseOne.then(function () {
  console.log("Promise consumed");
});


//Alternate way of writing this promiseOne:
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async 2 is executed');
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is consumed");
})


//Sending values through reslove using parameters
const promiseThree = new Promise(function (reslove,reject) {
  setTimeout(function () {
    reslove({username: 'chai',email:'chai@example.com'})
  },1000)
})

//If something is passed in resolve method's parameter we can accept that in then's callback functions parameter
promiseThree.then(function (user) {
  console.log(user);
})


//create promise using both reolve and reject
const promiseFour = new Promise(
  function (resolve, reject) {
    setTimeout( function(){
      let error = true;//false
      if(!error) {
        resolve({ username: 'shravan', password: '123456' });
      }
      else {
        reject('Error: Response is not found');
      }
    }, 1000);
  })

//then chaining and using catch for errors and finally.
promiseFour
  .then(function (user) {
  console.log(user);
  return user.username;
}).then(function (username) {
  console.log(username);
}).catch((error) => console.log(error))
  .finally(() => console.log("Either promise resolved or rejected"));


//promisefive
const promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;//false
    if (!error) {
      resolve({ username: 'javascript', password: '123456' });
    }
    else {
      reject('Error: Javascript is not found');
    }
  },1000)
}) 

//Consume promise using async await keyword by function

async function promiseConsumer() {
  //If promise throws error then we have to manually catch it.
  try {
    //promiseFive is a object
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

//Called the consumer function
promiseConsumer();

//Both is same just syntax is different.

//use fetch using async await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    console.log('api resp: ',data);
  } catch (error) {
    console.log("E: ",error);
  }
}
getAllUsers();


//use fetch using then and catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
}).catch(() => console.log("E: ", error));