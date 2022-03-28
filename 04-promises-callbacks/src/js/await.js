import { searchHeroAsync, searchHero } from './promises';

const heroesIds = [ 'captain', 'iron', 'spider'];
const herosPromises = heroesIds.map( searchHero );

export const getHeros = async () => {

    return await Promise.all( heroesIds.map( searchHero ) );

    //   const herosArr = [];

    // for( const id of heroesIds ){
    //     herosArr.push( searchHeroAsync(id) );
    // }

    // return await Promise.all(herosArr);
}

export const getHeroAwait = async ( id ) => {
    try {
        const hero = await searchHeroAsync(id);
        return hero;
    }catch( err ) {
        throw err;
    }
}

export const herosCycle = async () => {

    for await( const heros of herosPromises ) {
        console.log(heros);
    }

    // const heros = await Promise.all( herosPromises );
    // heros.forEach( heros => console.log(heroe))
}

export const heroIfAwait = async (id) => {
    if( (await searchHeroAsync(id).name ) === 'Ironman' ) {
        console.log('He is the best');
    }else {
        console.log('Nah');
    }
}