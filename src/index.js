const max = 0;
const min = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let d = new Date().toISOString();
console.log(d);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let startTime = performance.now();
let guessCount = 1;
let resetButton;

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

//Numero arvaus algoritmi
/*
Alla on divide and conquer algoritmi. Se ottaa arvauksensa aina 
korkeimman ja pienimmän mahdollisen numeron keskeltä. 
Muuttujia päivitetään joka kierros ja seuraava vastaus perustuu
edellisistä tuloksista.
1000 kierroksesta se sai keskimäärin 171 oikeaa numeroa ja arvausten keskimäärä 5.8.
*/
let games = 0;
let totalRounds = 0;
let minrounds = 1000;
let oikeinMenneet = 0;
let minNumber = min;
let maxNumber = max;
let algoritmGuess = max/2;
for (let i = 0;i< 1000;) {
    currentrounds = 0;
    algoritmGuess = round(((maxNumber - minNumber)/2) + minNumber, 0);
    if (algoritmGuess === randomNumber){
        currentrounds ++;
        if (currentrounds < minrounds){
            minrounds = currentrounds;
        }
        currentrounds = 0;
        totalRounds++;
        oikeinMenneet++;
        minNumber = min;
        maxNumber = max;
        algoritmGuess = max/2;
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;;
        i++;
    }
    else if (algoritmGuess < randomNumber) {
        currentrounds ++;
        totalRounds++;
        maxNumber = algoritmGuess;
    }
    else if (algoritmGuess > randomNumber) {
        currentrounds ++;
        totalRounds++;
        minNumber = algoritmGuess;
    }
    games = i;
}
console.log(totalRounds/games); // average arvausten määrä
console.log(minrounds); //minimi arvaus määrä

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  function setGameOver() {
    let endTime = performance.now();
    alert(`Guessing took ${(endTime - startTime) / 1000} seconds and guess amount was ${(guessCount)}`);
    let startTime2 = performance.now();
    startTime = startTime2;
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  guessSubmit.addEventListener('click', checkGuess);
  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }