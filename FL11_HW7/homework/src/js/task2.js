let start = confirm('Do you want to play a game?');
const DEFAULT_RANGE_OF_GUESSNUMBER = 9;
let rangeOfGuessNumber = 9;
const INCREASE_PRICE = 100;
const ICREASE_RANGE_OF_GUESSNUMBER = 4;
const HALF = 0.5;
let continueGame = true;
let game = {
    guessNumber: Math.floor(Math.random() * rangeOfGuessNumber),
    attempts : 3,
    totalPrize: 0,
    possiblePrize: 100
}
if(start){
    while(continueGame){
        continueGame = false;
        for (let attempts = 3,possiblePrize = game.possiblePrize; attempts >= 1; attempts--,possiblePrize*=HALF){
            let attempNumber = prompt(`Choose a roulette pocket number from 0 to ${rangeOfGuessNumber - 1}
Attempts left: ${attempts}
Total prize: ${game.totalPrize}
Possible prize on current attempt: ${possiblePrize}`);
            if(+attempNumber === game.guessNumber){
                continueGame = confirm(`Congratulation, you won! Your prize is ${possiblePrize}.
Do you want to continue?`);                
                game.totalPrize += possiblePrize;
                if(continueGame){
                    rangeOfGuessNumber += ICREASE_RANGE_OF_GUESSNUMBER;
                    game.possiblePrize += INCREASE_PRICE;
                }
                break;
                //if the user did not guess the number assign totalPrize to 0
            }else if(attempts === 1){
                game.totalPrize = 0;
            }
        }
        //if the user did not guess the number or don`t want to continue
        if(!continueGame){
            alert(`Thank you for your participation. Your prize is: ${game.totalPrize}`);
            game.totalPrize = 0;
            continueGame = confirm('Do you want to play again?');
            //Assigning default values
            if(continueGame){
                rangeOfGuessNumber = DEFAULT_RANGE_OF_GUESSNUMBER;
                game.possiblePrize = INCREASE_PRICE;
            }
        }
        //change random number
        game.guessNumber = Math.floor(Math.random() * rangeOfGuessNumber); 
    }
}else{
    alert('You did not become a billionaire, but can');
}