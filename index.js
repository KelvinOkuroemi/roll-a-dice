//Pick any randim number
let randomNumber1 = Math.floor(Math.random()*6);
let randomNumber2 = Math.floor(Math.random()*6);
let pictures = ["images/dice1.png",
"images/dice2.png",
"images/dice3.png",
"images/dice4.png",
"images/dice5.png",
"images/dice6.png" 
];


//Use the DOM to change left dice
let dice1 = document.querySelector(".dice .img1").src = pictures[randomNumber1];
let dice2 = document.querySelector(".dice .img2").src = pictures[randomNumber2];

//To check game winner
 let winningText = document.querySelector("h1");
 determineWinner();
 
function determineWinner(){
if(randomNumber1 === randomNumber2){
    winningText.textContent = "It is draw. Play again!"
}
else if(randomNumber1 > randomNumber2){
   winningText.textContent = "Player 1 wins."
}
else{
    winningText.textContent = "Player 2 wins."
}
}

function reload(){
    location.reload()
}