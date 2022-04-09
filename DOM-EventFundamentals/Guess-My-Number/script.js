'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number ✨';

console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '34';

document.querySelector('.highscore').textContent = '100';

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent
    = message;
}

document.querySelector('.check').addEventListener
('click', function() {
   
   const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
       // document.querySelector('.message').textContent = 'No Number ⛔';
        displayMessage('⛔ No Number');
    
    }
    else if(guess === secretNumber){
       
        displayMessage('😄 Correct No.');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '15rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent
            = highscore;
        }
    }

    else if(guess !==secretNumber ) {
        
        if(score > 1) {
            
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            score --;

            document.querySelector('.score').textContent = 
            score;
        }
        else {
            document.querySelector('.message').textContent = 
            '💥You Lost the Game!';
            document.querySelector('.score').textContent = 
            0;
        }
    }

/*
    else if(guess > secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = 'Too High 🙉'
        score -= 1;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost The Game 💥';
        }
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent
            = highscore;
        }
    }

    else if(guess < secretNumber) {
        if(score > 1) {    
        document.querySelector('.message').textContent = 'Too Low 🙈';
        score -= 1;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost The Game 💥'
        }
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent
            = highscore;
        }
    }
    */
});


document.querySelector('.again').addEventListener
('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent =
    score;
    document.querySelector('.number').textContent = 
    '?';
    document.querySelector('.guess').value = 
    ' ';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});

