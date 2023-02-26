var score, current, dice, active;
active = 1;
current = 0;
score = 0;
//score = [0, 0]

//console.log(dice);


document.querySelector('.rollDice').addEventListener("click", function() {
    dice = Math.floor(Math.random()* 6) + 1;
    current += dice;
    document.querySelector('#currentScore' + active).textContent = current;
    if (dice !== 1) {
        score += dice;
    } else {
        document.querySelector('.score' + active).textContent = score;
        active === 2 ? active = 1 : active = 2;    
        score = 0;
        current = 0;
        document.querySelector('#currentScore' + active).textContent = "0";
        document.querySelector('.score' + active).textContent = "0";
    }
    
});