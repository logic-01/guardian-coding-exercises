//create deck
//distribute 2 cards to sam and dealer each
//start game --> check for total 21 for both
//has 21? game end, the player having 21 won.
//sam starts drawing the cards till total is 17 or higher

const Sam = [];
const Dealer = [];
let Deck = [];

function startGame() {
    createAndDistributeCards();
    drawCards(Sam, 2);  // Make sure this is drawCards, not drawCrads
    drawCards(Dealer, 2);  // Make sure this is drawCards, not drawCrads
    console.log('sam', Sam, 'dealer', Dealer);
}

function drawCards(arr, cards) {
    while (cards !== 0) {
        arr.push(Deck.shift());
        cards--;
    }
}

function createAndDistributeCards() {
    const totalCardOfAKind = 4;
    for (let i = 2; i <= 14; i++) {
        Deck.push(...new Array(totalCardOfAKind).fill(i));
    }
    randomizeArray(Deck);
    console.log("Shuffled deck:", Deck);
}

function randomizeArray(arr) {
    let currentIndex = arr.length - 1;

    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

// Call the function to see output
startGame();