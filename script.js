var score, current, dice, active;
active = 1;
current = 0;
//score = [0, 0]

console.log(dice);

document.querySelector('.rollDice').addEventListener("click", function() {
    //

    dice = Math.floor(Math.random()* 6) + 1;
    current += dice;
    document.querySelector('#currentScore' + active).textContent = current;
    
});