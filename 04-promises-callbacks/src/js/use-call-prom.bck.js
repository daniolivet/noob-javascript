import { searchHero as searchHeroCallBack } from './js/callbacks';
import { searchHero } from './js/promises';
import './style.css';

const heroId1 = 'captain';
const heroId2 = 'iron';

// Callback Hell
// searchHero( heroId1, ( err, hero1 ) => {
//     if( err ) return console.error(err);

//     searchHero( heroId2, ( err, hero2 ) => {
//         if( err ) return console.error(err);

//         console.log(`Sending ${ hero1.name } and ${ hero2.name } to the mision.`);
//     });
// });

// searchHero( heroId1 ).then( hero1 => {

//     searchHero( heroId2 ).then( hero2 => {
//         console.log(`Sending ${ hero1.name } and ${ hero2.name } to the mision.`);
//     });

// });

Promise.all([ searchHero( heroId1 ), searchHero( heroId2 ) ])
    .then( ([ hero1, hero2 ]) => {
        console.log(`Sending ${ hero1.name } and ${ hero2.name } to the mision.`);
    })
    .catch(err => alert(err))
    .finally(() => console.log('Finished'));