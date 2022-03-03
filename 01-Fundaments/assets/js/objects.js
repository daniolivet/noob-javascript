// Object
let personaje =  {
    nombre: 'Tony stark',
    codeName: 'Iron man',
    vivo: false,
    edad: 40,
    coords: {
        lat: '34.034',
        lng: '-118.70'
    },
    trajes: ['Mark I', 'Mark V', 'Hulk'],
    direccion: {
        zip: '10880, 90265',
    }
}

console.log(personaje);

// Delete property
delete personaje.edad;
console.log(personaje);

// Add property
personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log(entriesPares);

// Block updates of object
Object.freeze( personaje );

// Get properties object
const properties = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje ); // Get values of object
console.log(values);