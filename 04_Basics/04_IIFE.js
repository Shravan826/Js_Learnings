//Immediately Invoked Function Expression (IIFE)


//Note: IIFE always needed to be semicolon ended 

//named IIFE
(function chai() {
  console.log(`DB Connected`);
})();

//Unnamed IIFE or Simple IIFE
((name) => {
  console.log(`DB connected from ${name}`)
})('Shravan');

// End of file