'use strict';
const score_0 = document.querySelector("#score--0");
const score_1 = document.querySelector("#score--1");
const dice= document.querySelector(".dice");
const roll= document.querySelector(".btn--roll");
const hold= document.querySelector(".btn--hold");
const btn_new=document.querySelector(".btn--new");

const current_0= document.querySelector("#current--0");
const player_0=document.querySelector(".player--0");
const player_1=document.querySelector(".player--1");
score_0.textContent=0;
score_1.textContent=0;


let current_score,player_active,players_score,isPlaying;


function init(){
     current_score=0;
     players_score=[0,0];
     player_active=0;
     isPlaying=true;
 document.querySelector("#score--0").textContent=0;
document.querySelector("#score--1").textContent=0;
document.querySelector("#current--0").textContent=0;
document.querySelector("#current--1").textContent=0;
document.querySelector(".player--0").classList.add("player--active");
document.querySelector(".player--1").classList.remove("player--active");
document.querySelector(".player--0").classList.remove("player--winner");
document.querySelector(".player--1").classList.remove("player--winner");
dice.classList.add("hidden");



}
init();

function switchPlayer(){
    current_score=0;
    document.querySelector(`#current--${player_active}`).textContent=current_score;
    player_active= player_active==0?1:0;
    player_0.classList.toggle("player--active");
    player_1.classList.toggle("player--active");
}


roll.addEventListener("click",function(){
if(isPlaying){
const diceRandom= Math.trunc(Math.random()*6)+1;
dice.classList.remove("hidden");
dice.src=`dice-${diceRandom}.png`;

if(diceRandom !== 1){
    current_score+=diceRandom;
document.getElementById(`current--${player_active}`).textContent=current_score;
}
else{
    //switchplayer
   switchPlayer();
}
}
})
hold.addEventListener("click",function(){
    if(isPlaying){
players_score[player_active]+=current_score;
document.querySelector(`#score--${player_active}`).textContent=players_score[player_active];


if(players_score[player_active]>=20){
    document.querySelector(`.player--${player_active}`).classList.add("player--winner");
    dice.classList.add("hidden");
    isPlaying=false;
}
else{
switchPlayer();
}
    }
})

btn_new.addEventListener("click",init);