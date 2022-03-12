/** 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
*/

// Module Pattern
const myModule = (() => {
    'use strict'

    let deck       = [];
    const types    = ['C', 'D', 'H', 'S'],
          specials = ['A', 'J', 'Q', 'K'];
    
    let playerPoints = [];
    
    // buttons
    const btnNew     = document.getElementById('new-btn'),
          btnCard    = document.getElementById('card-btn'),
          btnStop    = document.getElementById('stop-btn');
    
    // Containers
    const pointsHTML     = document.querySelectorAll('small'),
          divPlayerCards = document.querySelectorAll('.divCards');
    
    const initGame = ( numPlayers = 2 ) =>  {
        deck = createDeck();
        playerPoints = [];
        for( let i = 0; i < numPlayers; i++ ) {
            playerPoints.push(0);
        }

        // Remove Cards
        divPlayerCards.forEach( elem => elem.innerText = '' );
        pointsHTML.forEach( elem => elem.innerText = 0 );

        // Reset disabled
        btnCard.disabled = false;
        btnStop.disabled = false;
    }

    //Create a new deck and return a disordered array
    const createDeck = () => {

        deck = [];

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
    
        return _.shuffle(deck);
    }
    
    // This function return a new card
    const giveCard = () => {
    
        if( deck.length === 0 ) {
            throw 'Dont have cards in deck.'
        }
    
        return deck.pop();
    }
    
    // This function get value of card
    const valueCard = ( card ) =>  {
        const value = card.substring(0, card.length - 1);
        return ( isNaN(value) ) ? 
               ( value === 'A') ? 11 : 10 
               : parseInt(value); 
    
    }
    
    // Turn: [0] => player1 - [1] => Bank
    const acumPoints = ( card, turn ) => {
        playerPoints[turn] = playerPoints[turn] + valueCard(card);
        pointsHTML[turn].innerHTML = playerPoints[turn];

        return playerPoints[turn];
    }

    const createCard = ( card, turn ) =>  {
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${ card }.png`;
        imgCard.classList.add('card-game');
        divPlayerCards[turn].append( imgCard );
    }

    const setWinner = () => {

        const [ minPoints, bankPoints ] = playerPoints; 

        setTimeout(() => {
            if( bankPoints === minPoints ) {
                alert('No one wins.');
            }else if( minPoints > 21 ) {
                alert('Bank is the winner!!');
            } else if( bankPoints > 21 ) {
                alert('Player is the winner!!');
            } else {
                alert('Bank is the winner!!');
            }
        }, 100 );
    }

    const bankTurn = ( minPoints ) => {
        
        let bankPoints = 0;

        do {
    
            const card = giveCard();
            bankPoints = acumPoints(card, playerPoints.length - 1);
            
            // Insert card in HTML
            createCard(card, playerPoints.length - 1);
    
        } while( bankPoints < minPoints && minPoints <= 21 );
        
        setWinner();
    }
    
    // Events
    btnCard.addEventListener('click', () => {
        const card = giveCard();
        const playerPoints = acumPoints(card, 0);
    
        // Insert card in HTML
        createCard( card, 0 );
    
        if( playerPoints > 21 ) {
            console.warn('Bank is the winner!!');
            btnCard.disabled = true;
            btnStop.disabled = true;
            bankTurn( playerPoints );
        } else if ( playerPoints === 21 ) {
            console.warn('You are the winner!!');
            btnCard.disabled = true;
            btnStop.disabled = true;
            bankTurn( playerPoints );
        }
    });
    
    btnStop.addEventListener('click', () => {
        btnCard.disabled = true;
        btnStop.disabled = true;
    
        bankTurn( playerPoints );
    });
    
    btnNew.addEventListener('click', () => {
        initGame();
    });

    // Make public a functions of module
    return {
        newGame: initGame
    };

})();