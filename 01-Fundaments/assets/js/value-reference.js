let juan = { name: 'Juan' };
let ana  = { ...juan }; // Delete reference of javascript, bad practice => let ana = juan;
ana.name = 'Ana';

console.log({ juan, ana });

const changeName = ( { ...objPerson } ) => { // Use spread operator for delete javascript's reference
    objPerson.name = 'Tony';
    return objPerson;
}

let peter = { name: 'Dani' };
let tony  = changeName( peter );

console.log({ peter, tony });

// Arrays
const fruit = ['Apple', 'Watermelon', 'Pineapple'];
const othersFruits = [...fruit]; // Use spread operator for delete javascript's reference

othersFruits.push('Mango');

console.table({ fruit, othersFruits });