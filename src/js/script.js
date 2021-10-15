//KEYBOARD CODE
let keyboard = document.querySelectorAll('.keyboard');
keyboard.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("text").innerHTML+=letter.value;})})