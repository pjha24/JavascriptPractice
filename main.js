console.log("WAZZAAAAA");
console.error("errooororr");
console.warn("warrrning");

let color = "red";
color = "blue";

const blue = "blue";


/* use console for debugging statements
    - can run JS straight through console
    - Or use console.log in code
    - use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
    for any documentation needs
*/


/*
Three variables: var, let const

var is globally scoped
let and const have block level scope

- let allows you to re-assign values (see line 5,6)
- only use const for values that are unchanging.
    - must declare and initialize const variables at same time
*/

/* Data Types
    Primitive Data types: Data written directly to memory
        string, numbers, boolean, null, undefined, symbol
*/
const age = 15; //number
const isTrue = true; //boolean
const rating = 3.2; //still a number data type
let z; //z is undefined

console.log(typeof age); //find the data type of variable

//Strings 
    //String concatenation
    console.log("My age is " + age + " and I am rated " + rating);
    //template String
    console.log(`My age is ${age} and I am rated ${rating}` );
    const dog = "dog";
    console.log(dog.length);        //no () on properties. only methods have ()
    console.log(dog.toUpperCase()); //method
    const x = "age, height, weight, gender";
    console.log(x.split(', ')); //returns an array 