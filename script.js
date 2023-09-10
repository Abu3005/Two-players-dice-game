"use strict"
//   make dice
// role a dice
   // if roll > 1
         // start adding the dice current
         //  update current score
   // else 
         // next player
         // if roll > 1
         //  update current score
             // start adding the dice current

var player1, player2, current2, current1, dice, roll, hold, score1, score2, img, game;

score1 = 0;

roll = document.querySelector(".roll");
hold = document.querySelector(".hold");
game = document.querySelector(".newgame");
img = document.querySelector(".img-0");

player1 = document.querySelector(".player-1");
player2 = document.querySelector(".player-2");
current1 = document.querySelector(".current1");
current2 = document.querySelector(".current2");
roll.addEventListener("click", function() {
   dice = Math.floor(Math.random() * 6) + 1;
   img.src = "./images/dice" + dice + ".png";
   score1 += dice;
   document.querySelector(".current1").textContent = score1;
   if (dice === 1) {
      score2 += dice;
      document.querySelector(".current2").textContent = score2;
      //  next player
   }
})





