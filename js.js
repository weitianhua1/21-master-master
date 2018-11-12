var randomNumber=Math.floor(Math.random()*101); 
//console.log(randomNumber);
var guessField/*与class或ID保持一致*/=document.querySelector(".guessField");
console.log(guessField);
var guesses=document.querySelector('.guesses');
console.log(guesses);
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.loworHi');
var guessSubmit =document.querySelector('.guessSubmit');
var guessCoutn=1;
var resetButton;
guessField.focus();
function checkGuess(){
   guesses.innerHTML +=guessField.value+"  ";
   guesses.style.backgroundColor="red";
}
guessSubmit.addEventListener('click',checkGuess);