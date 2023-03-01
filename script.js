var score, current, dice, active, newGame;
active = 0;
current = 0;
score = [0, 0];
img = document.querySelector('#image');
img.style.display = "none";
document.querySelector('.score0').textContent = "0";
document.querySelector('.score1').textContent = "0";
document.querySelector('#currentScore0').textContent = "0";
document.querySelector('#currentScore1').textContent = "0";

document.querySelector('.rollDice').addEventListener("click", function() {
    dice = Math.floor(Math.random()* 6) + 1;
    img.src = "./images/dice" + dice + ".png";
    img.style.display = "block";
    
    if (dice !== 1) {
        document.querySelector('#dot' + active).classList.add('dot');
        current += dice;
        document.querySelector('#currentScore' + active).textContent = current;
        
    } else next();

});
document.querySelector('.hold').addEventListener("click", function() {
    score[active] += current;
    document.querySelector('.score' + active).textContent = score[active];
     
    if (score[active] >= 10) {
        document.querySelector('#dot' + active).classList.remove('dot');
        document.querySelector('.player' + active).textContent = "Winner !"
        document.querySelector(".player" + active).classList.add('winner');
    } else next();
    
})


function next() {
    active === 1 ? active = 0 : active = 1;  
    current = 0;
    document.querySelector('#dot0').classList.toggle('dot');
    document.querySelector('#dot1').classList.toggle('dot'); 
        
    document.querySelector('#currentScore0').textContent = "0";     
    document.querySelector('#currentScore1').textContent = "0";
    img.style.display = "none";
}



document.querySelector('#new').addEventListener("click", init)
function init() {
    active = 0;
    current = 0;
    score = [0, 0];
    img = document.querySelector('#image');
    img.style.display = "none";

    document.querySelector('.score0').textContent = "0";
    document.querySelector('.score1').textContent = "0";
    document.querySelector('#currentScore0').textContent = "0";
    document.querySelector('#currentScore1').textContent = "0";
    document.querySelector('.player0').textContent = "PLAYER 4"
    document.querySelector('.player1').textContent = "PLAYER 5"
    document.querySelector(".player0").classList.remove('winner');
    document.querySelector(".player1").classList.remove('winner');
    document.querySelector('#dot1').classList.remove('dot');
    document.querySelector('#dot0').classList.add('dot');
    

    
}
    