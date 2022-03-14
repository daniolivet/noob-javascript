// Problem without classes
const fer = {
    name: 'Fernando',
    age: 15,
    print() {
        console.log(`Name: ${ this.name } - Age: ${ this.age }`);
    }
}

const pedro = {
    name: 'Pedro',
    age: 20,
    print() {
        console.log(`Name: ${ this.name } - Age: ${ this.age }`);
    }
}

/* fer.print(); */

// Using OOP, old version
function Person( name, age ) {
    this.name = name;
    this.age  = age;

    this.print = () => {
        console.log(`Name: ${ this.name } - Age: ${ this.age }`);
    }
}

const maria = new Person('María', 18);
console.log( maria );
maria.print();