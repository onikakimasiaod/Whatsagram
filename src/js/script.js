/*
let keyboard = document.getElementsByClassName("keyboard");

Array.from(keyboard).forEach(function(letter) {
    letter.addEventListener('click', takingValue(letter));
    console.log("Hello");
});

function typing(){
    let keyboard = document.getElementsByClassName("keyboard");
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].addEventListener('click', takingValue(keyboard[i]));
    }
}

function takingValue(letra){
    console.log(letra.value);
    document.getElementById("container").innerHTML+=letra.value;
}
*/

let keyboard = document.querySelectorAll('.keyboard');
keyboard.forEach(letter => {letter.addEventListener('click', event => {
    //handle click
    console.log(letter.value);
    document.getElementById("container").innerHTML+=letter.value;})})