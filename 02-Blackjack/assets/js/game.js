/** 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
*/

// Module Pattern
(() => {
    'use strict'

    let deck       = [];
    const types    = ['C', 'D', 'H', 'S'],
          specials = ['A', 'J', 'Q', 'K'];
    
/*     let playerPoints = 0,
        bankPoints   = 0; */
    let pointPlayers = [];
    
    // buttons
    const btnNew     = document.getElementById('new-btn'),
          btnCard    = document.getElementById('card-btn'),
          btnStop    = document.getElementById('stop-btn');
    
    // Containers
    const pointsHTML     = document.querySelectorAll('small'),
          divPlayerCards = document.getElementById('player-cards'),
          divBankCards   = document.getElementById('bank-cards');
    
    const initGame = ( numPlayers = 2 ) =>  {
        deck = createDeck();
        for( let i = 0; i < numPlayers; i++ ) {
            pointPlayers.push(0);
        }
        console.log({pointPlayers});
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
    
    const acumPoints = () => {

    }

    const bankTurn = ( minPoints ) => {
    
        do {
    
            const card = giveCard();
    
            bankPoints = bankPoints + valueCard(card);
            pointsHTML[1].innerHTML = bankPoints;
        
            // Insert card in HTML
            const imgCard = document.createElement('img');
            imgCard.src = `assets/cartas/${ card }.png`;
            imgCard.classList.add('card-game');
            divBankCards.append( imgCard );
    
            if( minPoints > 21 ) {
                break;
            }
    
        } while( bankPoints < minPoints && minPoints <= 21 );
        
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
        }, 15 );
    }
    
    // Events
    btnCard.addEventListener('click', () => {
        const card = giveCard();
    
        playerPoints = playerPoints + valueCard(card);
        pointsHTML[0].innerHTML = playerPoints;
    
        // Insert card in HTML
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${ card }.png`;
        imgCard.classList.add('card-game');
        divPlayerCards.append( imgCard );
    
        if( playerPoints > 21 ) {
            alert('Bank is the winner!!');
    
            btnCard.disabled = true;
            btnStop.disabled = true;
            /* bankTurn( playerPoints ); */
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
        console.clear();
        initGame();
        deck = [];
        deck = createDeck();
        
        // Reset disabled
        btnCard.disabled = false;
        btnStop.disabled = false;
        // Reset points
/*         playerPoints = 0;
        bankPoints   = 0; */
        // Reset points HTML
        pointsHTML[0].innerText = 0;
        pointsHTML[1].innerText = 0;
        // Remove Cards
        divBankCards.innerHTML   = '';
        divPlayerCards.innerHTML = '';
    
    });

})();