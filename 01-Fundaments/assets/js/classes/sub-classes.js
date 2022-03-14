class Person {

    static _count = 0;
    static get count() {
        return Person._count + ' instances'
    }

    static message() {
        console.log(this.name);
    }

    name = '';
    age  = 0;
    food = '';

    constructor( name = 'No name', age = 'No age' ) {

        this.name = name;
        this.age  = age;

        Person._count++;
    }

    set setFavFood( food ) {
        this.food = food;
    }

    get getFavFood() {
        return `The favorite food is ${ this.food }`;
    }

    whoIAm() {
        console.log(`I am ${ this.name }`);
    }

    myAge() {
        this.whoIAm();
        console.log('hi');
    }
}

class Child extends Person {
    test = 'empty';

    constructor(name, age ) {
        super(name, age); // Reference to constructor of Person class

        this.clan = 'Avengers';
    }

    whoIAm() {
        console.log(`I am ${ this.name }, The ${ this.clan }`);
        super.whoIAm();
    }
}

const glassesBoy = new Child('Dani', 10);
glassesBoy.whoIAm();