//DECLARACION DE LAS VARIABLES
/**
 * Declaracion de la variable button que almacena todos los botones con la clase: mayus
 * @type {NodeListOf<Element>}
 */
let button = document.querySelectorAll('.mayus');

/**
 * Declaracion de la variable emojis que almacena todos los botones con la clase: emojis
 * @type {NodeListOf<Element>}
 */
let emojis = document.querySelectorAll('.emojis');
/**
 * Declaracion de la variable timer. Necesario para el dblclick del boton mayuscula
 */
let timer;
/**
 * @var estado
 * necesario para saber si se ha dado uno o dos clicks al boton mayuscula
 * el estado sera 0 si el teclado ha de estar en minusculas
 * el estado sera 1 si al boton mayuscula le han dado un click
 * el estado sera 2 si al boton mayuscula le han dado dos clicks
 */
let estado;

/**
 * Declaracion de la variable space que almacena todos los botones con la clase: space
 * @type {NodeListOf<Element>}
 */
let space = document.querySelectorAll('.space');

/**
 * Declaracion de la variable special que almacena todos los botones con la clase: special
 * @type {NodeListOf<Element>}
 */
let special = document.querySelectorAll('.special');

/**
 * Declaracion de la variable keyboard que alamcena todos los botones con la clase: keyboard
 * @type {NodeListOf<Element>}
 */
let keyboard = document.querySelectorAll('.keyboard');

/**
 * el codigo siguiente recorre todos los botones emojis y cuando les das click, lo concatena
 * con el mensaje que se quiere enviar
 */
emojis.forEach(emoji => {
    emoji.addEventListener('click', event => {
        document.getElementById("texto").value += emoji.value;
    })
});

/**
 * el codigo siguiente recorre todos los botones space y cuando les das click, lo concatena con el mensaje
 * que se quiere enviar
 */
space.forEach(letter => {
    letter.addEventListener('click', event => {
        document.getElementById("texto").value += letter.value;
    })
});

/**
 * el codigo siguiente recorre todos los botones special y cuando les das click, lo concatena con el mensaje
 * que se quiere enviar
 */
special.forEach(letter => {
    letter.addEventListener('click', event => {
        document.getElementById("texto").value += letter.value;
    })
});

/**
 * button para las mayusculas. Hacemos dos eventListeners: uno para un click y el otro para el doble click.
 * En ambas recorremos los botones de clase "mayus". Al hacer un click, pasamos el estado a 1 y al hacer dos clicks,
 * pasamos el estado a 2.
 */
button.forEach(but => {
    but.addEventListener('click', event => {
        let keyboard = document.querySelectorAll('.keyboard');
        if (event.detail === 1) {
            timer = setTimeout(() => {
                estado = 1;
                toUpperPerm();
            }, 300)
            console.log(estado);

        }
    })
});

button.forEach(but => {
    but.addEventListener('dblclick', event => {
        clearTimeout(timer);
        estado = 2;
        toUpperPerm();
        console.log(estado);
    })
});

/**
 * recorremos la variable declarada anteriormente llamada keyboard la cual almacena todos los botones
 * con la clase "keyboard". Cada vez que hagamos un click a alguno de estos botones, concatenaremos el
 * valor del boton con el texto que se quiere enviar. Ademas de concatenar, dependiendo del estado, pasaremos
 * el teclado en mayuscula o en minuscula.
 */

keyboard.forEach(letter => {
    letter.addEventListener('click', event => {

        document.getElementById("texto").value += letter.value;
        let typing = document.getElementById("texto");
        // con esta instruccion, le decimos que el scroll vaya
        // bajando cada vez que se escribe en una nueva linea
        typing.scrollTop = typing.scrollHeight;
        if (estado == 1) {
            document.getElementsByClassName("minus")[0].textContent = "🡅";
            toLower();
        } else if (estado == 2) {
            toUpperPerm();
        }

    })
});


//FUNCIONES
/**
 * Funciones de borrar: deleteAll(), deleteWord(), deleteChar(), deleteFirst()
 */

function deleteAll() {
    document.getElementById("texto").value = ""; //el text area sera completamente borrado
}

function deleteWord() {
    let msg = document.getElementById("texto").value.trim(); //borramos todos los espacios que puede haber en los lados
    let space = msg.lastIndexOf(" "); //buscamos el indice del ultimo espacio que haya dentro de la cadena
    msg = msg.substr(0, space); //hacemos un substr para borrar la ultima palabra
    document.getElementById("texto").value = msg; //sustituimos el textarea por el resultado despues de hacer un substr
}

function deleteChar() {
    let msg = document.getElementById("texto").value;
    //le hacemos un substr para borrar el ultimo caracter que se haya introducido en el text area
    document.getElementById("texto").value = msg.substr(0, msg.length - 1);
}

function deleteFirst() {
    let msg = document.getElementById("texto").value;
    document.getElementById("texto").value = msg.substr(1, msg.length);
}

/**
 * funcion line() --> me devuelve una nueva linea. En el text area el intro == \n
 */
function line() {
    document.getElementById("texto").value += `\n`;
}

/**
 * function send() --> al hacer click al boton, enviamos el contenido del text area con la hora actual
 * @returns {number} --> devolvera el estado del teclado
 */

function send() {
    let today = new Date(); //guardamos la fecha actual
    //guardamos la hora y hacemos un slice(-2) para mostrarnos la hora con el siguiente formato: HH:MM
    let hour = ("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2);
    //cogemos el contenido del text area
    let message = document.getElementById("texto").value;

    //a continuacion, reemplazamos todos los \n por un <br> ya que en el text area para hacer una nueva linea es \n,
    // en cambio, al enviarlo al div (html), necesitamos el <br> de esta manera, nos los imprimira en una nueva linea
    while (message.includes("\n")) {
        message = message.replace("\n", "<br>");
    }

    //si el text area NO esta vacio, concateno todos los mensajes con el contenido del text area
    if (message != "") {
        document.getElementsByClassName("app-messagingArea")[0].innerHTML +=
            `<div class="message"><p class="textContent">${message}</p><p class="time">${hour} <img src="images/tick.png" class="tick"></p></div>`;
    }

    //vacio el text area
    document.getElementById("texto").value = "";
    let myMsg = document.getElementsByClassName("app-messagingArea")[0];
    // con esta instruccion, le decimos que el scroll vaya
    // bajando cada vez que se envia un mensaje
    myMsg.scrollTop = myMsg.scrollHeight;
    //una vez que enviamos el mensaje, ponemos el teclado en mayuscula
    toUpperPerm();
    document.getElementsByClassName("minus")[0].textContent = "🡅";
    //y pasamos el estado a 1
    return estado = 1;
}

/**
 * function onLoad() --> Al cargarse la app, enviaremos la fecha actual junto con un mensaje
 *
 */
function onLoad() {
    let today = new Date();
    //Teclado en mayuscula
    toUpperPerm();
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];

    //guardamos la fecha actual en la variable fecha
    let fecha = today.getDay() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();
    document.getElementById("date").innerHTML = fecha;

    //guardamos la hora actual en la variable hour
    let hour = ("0" + today.getHours()).slice(-2) + ':' + ("0" + today.getMinutes()).slice(-2);
    document.getElementsByClassName("app-messagingArea")[0].innerHTML +=
        `<div class="otro"><p class="textContent">Bienvenid@ a mi aplicacion</p><p class="time">${hour}</p></div>`;


    // Devolvemos el estado a 1
    return estado = 1;
}

//TECLADOS
/**
 * function toUpperPerm() --> teclado en mayuscula
 */
function toUpperPerm() {
    document.getElementById('keyboardMinus').style.display = "none";
    document.getElementById('keyboardMayus').style.display = "block";
    document.getElementById('keyboardNum').style.display = "none";
    document.getElementById('keyboardSymb').style.display = "none";
    document.getElementById('keyboardGif').style.display = "none";
    if (estado == 2){
        document.getElementsByClassName("minus")[0].textContent = "⇪";
    }
}

/**
 * function toKeyboard() --> teclado en minuscula y con el boton gif
 */
function toKeyboard() {
    document.getElementById('keyboardMinus').style.display = "block";
    document.getElementById('keyboardMayus').style.display = "none";
    document.getElementById('keyboardNum').style.display = "none";
    document.getElementById('keyboardSymb').style.display = "none";
    document.getElementById('keyboardGif').style.display = "none";
    document.getElementById('keyboard2Gif').style.display = "block";
    document.getElementById('gif2Keyboard').style.display = "none";
}

/**
 * function toLower() --> teclado en minuscula
 */
function toLower() {
    document.getElementById('keyboardMinus').style.display = "block";
    document.getElementById('keyboardMayus').style.display = "none";
    document.getElementById('keyboardNum').style.display = "none";
    document.getElementById('keyboardSymb').style.display = "none";
    document.getElementById('keyboardGif').style.display = "none";
    return estado = 0;
}

/**
 * function toNum() --> teclado numerico
 */
function toNum() {
    document.getElementById('keyboardMinus').style.display = "none";
    document.getElementById('keyboardMayus').style.display = "none";
    document.getElementById('keyboardNum').style.display = "block";
    document.getElementById('keyboardSymb').style.display = "none";
    document.getElementById('keyboardGif').style.display = "none";
}

/**
 * function toSigns() --> teclado de caracteres especiales
 */
function toSigns() {
    document.getElementById('keyboardMinus').style.display = "none";
    document.getElementById('keyboardMayus').style.display = "none";
    document.getElementById('keyboardNum').style.display = "none";
    document.getElementById('keyboardSymb').style.display = "block";
    document.getElementById('keyboardGif').style.display = "none";
}

/**
 * function toEmojis() --> teclado de emojis
 */
function toEmojis() {
    document.getElementById('keyboardMinus').style.display = "none";
    document.getElementById('keyboardMayus').style.display = "none";
    document.getElementById('keyboardNum').style.display = "none";
    document.getElementById('keyboardSymb').style.display = "none";
    document.getElementById('keyboardGif').style.display = "block";
    document.getElementById('keyboard2Gif').style.display = "none";
    document.getElementById('gif2Keyboard').style.display = "block";
}