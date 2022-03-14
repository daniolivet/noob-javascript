// OOP

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

const glassesBoy = new Person('Daniel', 24);
glassesBoy.setFavFood = 'McDonalds';

Person.count();