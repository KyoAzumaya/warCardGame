var expect = chai.expect;
// const { Deck } = require('./war')
// import{
//     Deck
// } from './war'
const deck = [
    'Heart: 9',    'Heart: 8',    'Clubs: 6',    'Heart: 10',
    'Clubs: 9',    'Heart: 2',    'Clubs: 7',    'Heart: 6',
    'Clubs: 3',    'Clubs: 8',    'Clubs: 5',    'Diamond: 4',
    'Diamond: 3',  'Diamond: 11', 'Spade: 9',    'Diamond: 12',
    'Heart: 4',    'Heart: 12',   'Heart: 13',   'Heart: 5',
    'Diamond: 10', 'Clubs: 12',   'Spade: 13',   'Spade: 10',
    'Diamond: 8',  'Spade: 4',    'Clubs: 2',    'Spade: 3',
    'Heart: 7',    'Spade: 6',    'Heart: 11',   'Clubs: 4',
    'Clubs: 11',   'Spade: 11',   'Diamond: 2',  'Diamond: 6',
    'Heart: 14',   'Diamond: 9',  'Spade: 12',   'Spade: 14',
    'Diamond: 7',  'Clubs: 10',   'Diamond: 14', 'Spade: 5',
    'Diamond: 13', 'Spade: 8',    'Spade: 2',    'Diamond: 5',
    'Spade: 7',    'Clubs: 13',   'Heart: 3',    'Clubs: 14'
];

function splitDeckInHalf(list) {
    const half = Math.ceil(list.length / 2);    

    const playerOneDeck = list.slice(0, half);
    const playerTwoDeck = list.slice(-half);
   return {playerOneDeck, playerTwoDeck};
}

describe('MyFunctions', function() {
    // const testDeck = new Deck();
    describe('initialTest', function(){
        it('first test should work', function(){
            const x = true;
            expect(x).to.equal(true);
        })
    })

    describe('#splitDeckInHalf', function() {
        it('the two decks should each equal 26', function() {
            var x = splitDeckInHalf(deck);
            expect(x.playerOneDeck.length).to.equal(x.playerTwoDeck.length);
        });

        it('should throw an error if this.splitDeck1.length doesnt equal to this.splitDeck2.length', function(){
            expect(function() {
                splitDeckInHalf(this.splitDeck1.length !== this.splitDeck2.length);
            }).to.throw(Error);
        });
    });

});