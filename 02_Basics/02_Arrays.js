//In javscript arrays there is no rule that we had to insert same data we can  insert multiple type of data in a single array.

const marvel_heros = ["iron_man", "Spider_man", "thor", "Hulk"];

const dc_heros = ["Batman", "Flash", "Superman"];

// Push will create new array in the same array 
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//Output:- ['iron_man', 'Spider_man' 'thor', 'Hulk', ['Batman', 'Flash', 'Superman']]

//Concat operator will create a new array which has to be stored
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//We can use ... spread operator also

const all_heros2 = [...marvel_heros, ...dc_heros];
console.log(all_heros2);

//Important methods isArray(), from(), of()