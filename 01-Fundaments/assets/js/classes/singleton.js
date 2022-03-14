// This pattern always return the same instance.

class Singleton {

    static instance;
    name = '';

    constructor( name = '' ) {
        
        if( !!Singleton.instance ){
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
    }

}

const instance1 = new Singleton('Dani');
const instance2 = new Singleton('Pepe');
const instance3 = new Singleton('Paco');

console.log(`Name in instance is: ${ instance1.name }`);
console.log(`Name in instance is: ${ instance2.name }`);
console.log(`Name in instance is: ${ instance3.name }`);