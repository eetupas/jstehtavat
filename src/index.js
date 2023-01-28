'use strict';

//Kun käyttäjä kirjoittaa hello niin funktio pistää alertin.
let currentIndex = 0;
let keys = ["h", "e", "l" , "l" , "o"];
document.addEventListener('keydown', (event) => {
if (event.key == keys[currentIndex]) {
    currentIndex++;
    if (currentIndex == 5) {
        alert("OIKEIN");
        currentIndex = 0;
    }
}
else if (event.key != keys[currentIndex]) {
    currentIndex = 0;
}
});





// Kun klikkaa niin funktio laittaa alertin jossa on koordinaatit
document.addEventListener('click', (event) => {
    alert(event.clientX + "x - " + event.clientY + "y");
});





// Kun koskee niin funktio laittaa alertin jossa on koordinaatit
document.addEventListener('touchstart', (event) => {
    console.log("ruutua on koskettu");
});






//tulostaa test consolelogiin kun 10 sekunttia on kulunut
const test = function () {
    console.log("test");
};
setTimeout(test, 10000);




//alerttaa kun olet ollun 15 sekunttia idlenä
let indleAika = function () {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function aikaMeni() {
        alert("15 sekunttia idlenä");
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(aikaMeni, 15000);
    }
};
indleAika();