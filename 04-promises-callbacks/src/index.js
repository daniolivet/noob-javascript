import { herosCycle, heroIfAwait } from './js/await';

console.time('await');

// getHeroAwait('cap2')
//     .then( heros => {
//         console.log(heros);

//         console.timeEnd('await');
//     })
//     .catch( err => console.log(err));

herosCycle();
heroIfAwait();