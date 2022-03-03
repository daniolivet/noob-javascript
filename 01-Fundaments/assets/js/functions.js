// Anonim function
const hello = function(name) {
    /* console.log('Hello ' + name); */
    return 1;
}

// Arrow function
const hello1 = (name) => {
    console.log('Hello ' + name);
}

// COMMENT: If a function don't have a 'return', It return undefined
let returnHello = hello('Daniel');
console.log({ returnHello });
hello1('Cristina');

// COMMENT: If we have a function where just return something, The arrow function have a way for return it.
const sum = ( a,b ) => a + b;
console.log(sum(2,3));

// Example 1
const getRandomNum = () => Math.random();
console.log(getRandomNum());