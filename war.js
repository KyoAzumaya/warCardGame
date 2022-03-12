class Deck {
    constructor() {        
        this.deckOfCards = [];
        this.splitDeck1 = [];
        this.splitDeck2 = [];
        this.suits = ['Clubs', 'Diamond', 'Heart', 'Spade'];
        this.cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
        // 11 = Jack, 12 = Queen, 13 = King, 14 = Ace
        

        // push the suit array and cardnumber array to deckofcards array
        for (let cardNumber in this.cardNumbers){
             for(let suit in this.suits) {
                 this.deckOfCards.push(this.suits[suit] + ': ' + this.cardNumbers[cardNumber]);
             }
        }
    }

    // function to shuffle the deck randomly
    // code from stackoverflow.com
    shuffleDeck() {
        let shuffledDeck = this.deckOfCards;
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = shuffledDeck[i];
            shuffledDeck[i] = shuffledDeck[j];
            shuffledDeck[j] = temp;
        }
        this.deckOfCards = shuffledDeck;
    }

    // function to slip the deck in half
    // code from flaviocopes.com
    splitDeckInHalf() {
        const list = originalDeck.deckOfCards;
        const half = Math.ceil(list.length / 2);    

        const playerOneDeck = list.slice(0, half)
        const playerTwoDeck = list.slice(-half)
        this.splitDeck1 = playerOneDeck;
        this.splitDeck2 = playerTwoDeck;
    }
}


let originalDeck = new Deck();
originalDeck.shuffleDeck();

let splitDeck = new Deck();
splitDeck.splitDeckInHalf();

// starting the score for both players with 0
let playerOneScore = 0;
let playerTwoScore = 0;

// assign the element inside splitdeck1 and 2 to playerOneCard and playerTwoCard
// using split function, split between the spaces inside the string
// use [1] to assign the index 1 value which is the card number to playerOneCardNumber and playerTwoCardNumber
for(let i = 0; i < splitDeck.splitDeck1.length; i++){
    const playerOneCard = splitDeck.splitDeck1[i];
    const playerTwoCard = splitDeck.splitDeck2[i];
    
    const splitPlayerOneCard = playerOneCard.split(' ');
    const playerOneCardNumber = splitPlayerOneCard[1];

    const splitPlayerTwoCard = playerTwoCard.split(' ');
    const playerTwoCardNumber = splitPlayerTwoCard[1];

 // inside the for loop, compare the playerOneCardNumber and playerTwoCardNumber   
    if (playerOneCardNumber > playerTwoCardNumber) {
        playerOneScore ++;
        console.log('Player One Card: ' + playerOneCardNumber, 
        'Player Two Card: ' + playerTwoCardNumber);
        console.log('Player One beat Player Two');
    } else if (playerTwoCardNumber > playerOneCardNumber){
        playerTwoScore ++;
        console.log('Player One Card: ' + playerOneCardNumber, 
        'Player Two Card: ' + playerTwoCardNumber);
        console.log('Player Two beat Player One');
    } else {
        playerOneScore += 0;
        playerTwoScore += 0;
        console.log('Player One Card: ' + playerOneCardNumber, 
        'Player Two Card: ' + playerTwoCardNumber);
        console.log('Tie');
    }
}
//outside the for loop, log out the total score for each players
console.log('Player One Score: ' + playerOneScore);
console.log('Player Two Score: ' + playerTwoScore);

//compare the total scores for each players
if (playerOneScore > playerTwoScore) {
    console.log('Player One Wins War!');
} else if (playerTwoScore > playerOneScore) {
    console.log('Player Two Wins War');
} else {
    console.log('This War is a tie!');
}

// modules.exports = {
//     Deck
// }
// export{
//     Deck
// }


