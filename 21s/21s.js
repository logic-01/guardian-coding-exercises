//create deck
//distribute 2 cards to sam and dealer each
//start game --> check for total 21 for both
//has 21? game end, the player having 21 won.
//sam starts drawing the cards till total is 17 or higher

const Sam =[];
const Dealer =[];
const Deck=[];
function startGame(){
createAndDistributeCards()
}

function createAndDistributeCards(){
  const totalCardOfAKind = 4;
  for(let i=2;i<=14;i++){
    Deck.concat(new Array(totalCardOfAKind).fill(i));
  }
  randomizeArray(Deck);
  console.log(Deck);
}

function randomizeArray(arr){
  currentIndex=arr.length-1;

  while(currrentIndex!=0){
    const randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]]=[arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}