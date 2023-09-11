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

var player1, player2, score, active, dice, roll, hold, score, current, current2, img, game, play, color;

roll = document.querySelector(".roll");
hold = document.querySelector(".holder");
game = document.querySelector(".newgame");
img = document.querySelector(".img-0");
player1 = document.querySelector(".player-1");
player2 = document.querySelector(".player-2");
color = document.querySelector(".game");


function init () {
   play = true;
   score = [0, 0];
   active = 0;
   document.querySelector(`.current${active + 1}`).textContent = 0;
   img.style.display = "none";
   player1.textContent = 0;
   player2.textContent = 0;
   document.querySelector(`.current1`).textContent = 0;
   document.querySelector(`.current2`).textContent = 0;
   color.classList.add("win1");
   color.classList.remove("win2");
   color.classList.add("color2");
   current = 0;
}
init ();






roll.addEventListener("click", function () {
   if (play) {
      dice = Math.floor(Math.random() * 6) + 1;
         img.style.display = "block";
         img.src = "./images/dice" + dice + ".png";
         if (dice !== 1) {
            current += dice;
            document.querySelector(`.current${active + 1}`).textContent = current;
         } 
         else {
            current = 0;
            document.querySelector(`.current${active + 1}`).textContent = 0;
            if (active === 0) {
               active = 1;
               color.classList.remove("color2");
               color.classList.add("color1");
            }
            else {
               active = 0;
   
               color.classList.remove("color1");
               color.classList.add("color2");
            }
         }
         
      
   }
   
   console.log(score[0], score[1]);
})

hold.addEventListener("click", function () {
  if (play) {

    score[active] += current;
    player1.textContent = score[0];
    player2.textContent = score[1];

      if (score[active] >= 20) {
         
         if (active === 1) {
            color.classList.add("win2");
            color.classList.remove("color2");
            color.classList.remove("color1");
         }
         else {
            color.classList.add("win1");
            color.classList.remove("win2");
            color.classList.remove("color2");
            color.classList.remove("color1");
         }
         play = false;
         
         color.classList.add("win1");
         player1.textContent = score[0];
         player2.textContent = score[1];
      } else {
         current = 0;
         document.querySelector(`.current${active + 1}`).textContent = current;
        if (active === 0) {
          active = 1;
          color.classList.remove("color2");
          color.classList.add("color1");
        } else {
          active = 0;
          color.classList.remove("color1");
          color.classList.add("color2");
        }
      }
  }
});

game.addEventListener("click", init);


      
