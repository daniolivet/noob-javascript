/** 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
*/

let deck       = [];
const types    = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

//Create a new deck and return a disordered array
const createDeck = () => {
    for(let i = 2; i <= 10; i++) {
        for(let type of types) {
               deck.push( i + type );
        }
    }

    for(let type of types) {
        for(let special of specials) {
            deck.push( special + type );
        }
    }

    deck = _.shuffle(deck);

    return deck;
}

createDeck();

// This function return a new card
const giveCard = () => {

    if( deck.length === 0 ) {
        throw 'Dont have cards in deck.'
    }

    const card = deck.pop();

    return card;
}

const valueCard = ( card ) =>  {
    const value = card.substring(0, card.length - 1);

    return ( isNaN(value) ) ? 
           ( value === 'A') ? 11 : 10 
           : parseInt(value); 

}

console.log(valueCard(giveCard()));
