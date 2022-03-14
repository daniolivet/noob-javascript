// Constructors

class Person {

    // Allow send an object to the constructor
    static constObject({ name, lastName, country }) {
        return new Person(name, lastName, country);
    }

    constructor( name, lastName, country ) {
        this.name     = name;
        this.lastName = lastName;
        this.country  = country;
    }

    getInfo() {
        console.log(`Info: ${ this.name }, ${ this.lastName }, ${ this.country }`);
    }

}

const name     = 'Melissa',
      lastName = 'Flores',
      country  = 'España';

const objPerson = {
    name: 'Daniel',
    lastName: 'Olivet',
    country: 'España'
}

const person = new Person( name, lastName, country );
const person1 = Person.constObject( objPerson );

person.getInfo();
person1.getInfo();