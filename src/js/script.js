//KEYBOARD CODE
var keyboard = document.querySelectorAll('.keyboard');
keyboard.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("text").innerHTML+=letter.value;})});

//FOR SPECIAL CHARACTERS
let special = document.querySelectorAll('.special');
special.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("text").innerHTML+=letter.value;})});

let space = document.querySelectorAll('.space');
space.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("text").innerHTML+=letter.value;})});

let intro = document.querySelectorAll('.intro');
intro.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("text").innerHTML+=letter.value;})});

let del = document.querySelectorAll('.delete');
del.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("text").innerHTML+=letter.value;})});

//KEYBOARD TO MINUS TO MAYUS
function toUpper() {
    document.getElementById('keyboardMinus').style.display="none";
    document.getElementById('keyboardMayus').style.display="block";
    document.getElementById('keyboardNum').style.display="none";
    document.getElementById('keyboardSymb').style.display="none";
}

function toLower(){
    document.getElementById('keyboardMinus').style.display="block";
    document.getElementById('keyboardMayus').style.display="none";
    document.getElementById('keyboardNum').style.display="none";
    document.getElementById('keyboardSymb').style.display="none";
}

function toNum(){
    document.getElementById('keyboardMinus').style.display="none";
    document.getElementById('keyboardMayus').style.display="none";
    document.getElementById('keyboardNum').style.display="block";
    document.getElementById('keyboardSymb').style.display="none";
}

function toSigns(){
    document.getElementById('keyboardMinus').style.display="none";
    document.getElementById('keyboardMayus').style.display="none";
    document.getElementById('keyboardNum').style.display="none";
    document.getElementById('keyboardSymb').style.display="block";
}