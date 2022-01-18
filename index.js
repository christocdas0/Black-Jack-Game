// varibles

let startBtn = document.getElementById("start-game-btn");
let messageText = document.getElementById("message");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let card = document.getElementById("card-el");
let newCard = document.getElementById("new-card");
// let pleyerName = document.getElementById('pleyer-el');

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive =false;
let message = "";
 
//  display plyer name and price
//  let player ={
//    name:'criz',
//    chips : 120
//  }
  // pleyerName.textContent = player.name + " : " + '$ ' + player.chips;

//  get randomnumber
function getRandomnumber() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
   if(randomnumber >10){
       return 10
   }
   else if(randomnumber === 1){
       return 11
   }
   else{
       return randomnumber;
   }
}

// game start
let startGame = () => {
isAlive = true;
    let firstCard = getRandomnumber();
    let secondCard = getRandomnumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
  renderGame();
};

// render game

let renderGame = () => {
  // sum card
  sumEl.textContent = `sum: ${sum}`;
  //   cards textContent
  card.textContent = `cards:`;

  for (let i = 0; i < cards.length; i++) {
    card.textContent += cards[i] + " ";
  }

  //   if else
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥰";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  // message

  messageText.textContent = message;
};

// new card
newCard.addEventListener("click", () => {
if(isAlive ===  true && hasBlackJack === false){
    let thirdCard = getRandomnumber();
  sum += thirdCard;
  cards.push(thirdCard);
  renderGame();
}
});

// btn event listners
startBtn.addEventListener("click", startGame);
