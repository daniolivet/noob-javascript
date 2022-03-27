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

export const searchHero = ( id ) => {

    const hero = heros[id];

    return new Promise( ( resolve, reject ) => {
        
        ( hero ) ? resolve(hero) : reject(`Don't exists a hero with id ${ id }`);

    });

}

export const searchHeroAsync =  async ( id ) => {

    const hero = heros[id];

    if( hero ) {
        return hero;
    } else {
        throw Error(`Don't exists a hero with id ${ id }`);
    }        
}