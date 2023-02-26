var score, current, dice, active;
active = 1;
current = 0;
score = 0;
//score = [0, 0]

//console.log(dice);

img = document.querySelector('#image');
img.style.display = "none";

document.querySelector('.rollDice').addEventListener("click", function() {
    dice = Math.floor(Math.random()* 6) + 1;
    img.style.display = "block";
    current += dice;
    document.querySelector('#currentScore' + active).textContent = current;
    img = document.querySelector('#image');
    img.src = "./images/dice" + dice + ".png";
    
    if (dice !== 1) {
        score += dice;
        document.querySelector('#dot' + active).classList.add('dot');
    } else {

        document.querySelector('.score' + active).textContent = score;
        active === 2 ? active = 1 : active = 2;    
        document.querySelector('#dot1').classList.toggle('dot');
        document.querySelector('#dot2').classList.toggle('dot');
        
        score = 0;
        current = 0;
        document.querySelector('#currentScore' + active).textContent = "0";
        document.querySelector('.score' + active).textContent = "0";
        alert("You rolled 1! Your turn ended, it is second player's turn");
        
    }
    
});