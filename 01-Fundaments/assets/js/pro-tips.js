/* Tip 1: If we want create a object and the property have same name of value,
 just put name of value. Example => value = name, property = name. */
const createPerson = ( name, lastname ) => ({ name, lastname }); //return a object
console.log(createPerson('Daniel', 'Olivet'));

/* Tip 2: If we send arguments to a function, we can use Rest Parametre for optimize the use and we can save this arguments into a list */
const returnArgs = ( ...args ) => args;
const [ age, alive, name, regard ] = returnArgs( 10, true, 'Daniel', 'Hello World' );
console.log({age, alive, name, regard});

/* Tip 3 */

const personaje =  {
    name: 'Tony stark',
    codeName: 'Iron man',
    alive: false,
    age: 40,
    clothes: ['Mark I', 'Mark V', 'Hulk'],
};

const returnProperties = ({ name, codeName, alive, age = 15, clothes }) => {
    console.log({name}); 
    console.log({codeName});
    console.log({alive});
    console.log({age});
    console.log({clothes});
};

returnProperties(personaje);