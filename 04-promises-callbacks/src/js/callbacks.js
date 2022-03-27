const heros = {
    captain: {
        name: 'Captain America',
        power: 'x'
    },
    iron: {
        name: 'Iron Man',
        power: 'y'
    },
    spider: {
        name: 'Spiderman',
        power: 'z'
    }
}

export const searchHero = ( id, callback ) => {
    const hero = heros[id];

    ( hero ) ? 
        callback(null, hero) : 
        callback(`Don't exists a hero with id ${ id }`);
}