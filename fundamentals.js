//Arrays

const fruit = new Array("strawberry", "orange", "apple"); // using Array constructor
console.log(fruit);

const age = [1,2,3,4,5];        //more common way of creating array
console.log(age);

const mix = [1,2,3, "strawberry", null, undefined, true];   //can have distinct data types in aray
console.log(mix);
mix[9] = 8; // Mix is a const, but we are still able to manipulate array
            // however, we would not be able to reassign the variable mix
            // mix = non-mix;   // error
mix.push(9);        //appends to end
mix.unshift(0);     //appends to beginning
console.log(mix.indexOf(null));


//Object literals
const school = {
    studentPop: 400,
    name: "2 Cool 4 School",
    isFun: true,
    curriculum: ['math', 'science', 'art'],
    address: {
        street: 'Washington Ave',
        state: 'MS'
    }
}
//can have any data type in object literal as well as nested object literals
console.log(school);
console.log(school.name);
console.log(school.curriculum[2]);
console.log(school.address.state);

const{ studentPop, name} = school;  //destructuring. Pulling values from object literal and creating new independant variables 
const{ address: {street}} = school; //can destructure objects inside objects
console.log(street);
school.email = 'email@email.email';     //able to add properties to object literal

 

