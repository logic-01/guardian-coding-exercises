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
}

function createAndDistributeCards() {
    const totalCardOfAKind = 4;
    for (let i = 2; i <= 14; i++) {
        // Fix: Use push with spread operator instead of concat
        Deck.push(...new Array(totalCardOfAKind).fill(i));
    }
    randomizeArray(Deck);
    console.log("Shuffled deck:", Deck);
}

function randomizeArray(arr) {
    let currentIndex = arr.length - 1; // Fix: declare currentIndex properly

    while (currentIndex != 0) { // Fix: typo in currrentIndex
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}

// Call the function to see output
startGame();