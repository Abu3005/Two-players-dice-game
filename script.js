var score, current, dice, active, newGame;
init()

document.querySelector('.rollDice').addEventListener("click", function() {
    if (newGame) {
        dice = Math.floor(Math.random()* 6) + 1;
        img.src = "./images/dice" + dice + ".png";
        img.style.display = "block";
        if (dice !== 1) {
            //document.querySelector('#dot' + active).classList.add('dot');
            current += dice;
            document.querySelector('#currentScore' + active).textContent = current;
        } else next();
    }
    

});
document.querySelector('.hold').addEventListener("click", function() {
    if (newGame) {
        score[active] += current;
        document.querySelector('.score' + active).textContent = score[active];
     
        if (score[active] >= 10) {
            document.querySelector("#player" + active).classList.add('winner');
            //document.querySelector('#dot' + active).classList.remove('dot');
            document.querySelector('#player' + active).textContent = "Winner !"    
            newGame = false;
        } else next();
    }
    
})

function next() {
    active === 1 ? active = 0 : active = 1;  
    current = 0;

    //document.querySelector('#dot0').classList.toggle('dot');
    //document.querySelector('#dot1').classList.toggle('dot'); 
        
    document.querySelector('#currentScore0').textContent = "0";     
    document.querySelector('#currentScore1').textContent = "0";
    img.style.display = "none";
}



document.querySelector('#new').addEventListener('click', init);
function init() {
    active = 0;
    current = 0;
    score = [0, 0];
    newGame = true;
    img = document.querySelector('#image');
    img.style.display = "none";
    document.querySelector('.score0').textContent = "0";
    document.querySelector('.score1').textContent = "0";
    document.getElementById('currentScore0').textContent = "0";
    document.getElementById('currentScore1').textContent = "0";
    document.getElementById('player0').textContent = "PLAYER 1"
    document.getElementById('player1').textContent = "PLAYER 2"
    document.getElementById("player0").classList.remove('winner');
    document.getElementById("player1").classList.remove('winner');
    //document.getElementById('dot0').classList.remove('dot');
    //document.getElementById('dot1').classList.remove('dot');
    //document.getElementById('dot0').classList.add('dot');
    
}
    