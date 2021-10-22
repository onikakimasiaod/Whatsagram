//TODO 0 SEGUEIX LES PAUTES DEL TREBALL EN PROJECTES VISTES A CLASSE ✅


/*TODO 4 EMOJI BUTTONS*/
function emoji(){

}


/*TODO 5 CEC: LA TECLA C ESBORRA EL TEXT DE LA TEXT AREA Y CE ESBORRA LA DARRERA PARAULA (TRIM) ✅*/
function deleteAll() {
    document.getElementById("texto").innerHTML = "";
}

function deleteWord(){
    let msg = document.getElementById("texto").value.trim();
    let space = msg.lastIndexOf(" ");
    msg = msg.substr(0,space);
    document.getElementById("texto").innerHTML = msg;
}


/*TODO 6 LA TECLA <-- ESBORRA EL DARRER CARÀCTER I--> ESBORRA EL PRIMER CARÀCTER ✅*/

function deleteChar() {
    let msg = document.getElementById("texto").value;
    document.getElementById("texto").innerHTML = msg.substr(0, msg.length - 1);
}

function deleteFirst(){
    let msg = document.getElementById("texto").value;
    document.getElementById("texto").innerHTML=msg.substr(1,msg.length);
}






/*TODO 2 TEXT AREA: LLETRES ✅*/
//KEYBOARD CODE
let keyboard = document.querySelectorAll('.keyboard');
keyboard.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML +=letter.value;})});

//FOR SPECIAL CHARACTERS
let special = document.querySelectorAll('.special');
special.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML+=letter.value; })});

/*TODO 8 SPACE BUTTON ✅*/
let space = document.querySelectorAll('.space');
space.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML += letter.value;
    })});


/*TODO 9 NEW LINE BUTTON*/
//funciona en el text area pero no al enviar
function line(){
    document.getElementById("texto").innerHTML+=`\n`;
}
//KEYBOARD TO MINUS TO
/*TODO 7 MAJUSCULES DESACTIVAT/ 1 CARACTER EN MAJUSCULA / MAJUSCULES PERMANENTS */
/*MAJUSCULES PERMANENTS: EL DBLCKICK ME FUNCIONA EN VISTA DESKTOP, PERÒ EN VISTA S5 NO! */
    function toUpper() {
        console.log("hey");
        document.getElementById('keyboardMinus').style.display = "none";
        document.getElementById('keyboardMayus').style.display = "block";
        document.getElementById('keyboardNum').style.display = "none";
        document.getElementById('keyboardSymb').style.display = "none";
    }
    function toLower() {
        document.getElementById('keyboardMinus').style.display = "block";
        document.getElementById('keyboardMayus').style.display = "none";
        document.getElementById('keyboardNum').style.display = "none";
        document.getElementById('keyboardSymb').style.display = "none";
    }
    function toNum() {
        document.getElementById('keyboardMinus').style.display = "none";
        document.getElementById('keyboardMayus').style.display = "none";
        document.getElementById('keyboardNum').style.display = "block";
        document.getElementById('keyboardSymb').style.display = "none";
    }
    function toSigns() {
        document.getElementById('keyboardMinus').style.display = "none";
        document.getElementById('keyboardMayus').style.display = "none";
        document.getElementById('keyboardNum').style.display = "none";
        document.getElementById('keyboardSymb').style.display = "block";
    }

/*TODO 3 SEND BUTTON ✅*/

/*
* <div class="message">
            <p id="textContent">Hola</p>
            <p id="time">19:20</p>
        </div>
*/
    function send(){
        let today = new Date();
        let hour = ("0"+today.getHours()).slice(-2)+':'+("0"+today.getMinutes()).slice(-2);
        //message with class without hour
        let myDiv = document.createElement("div");
        let clase = document.createAttribute("class");
        clase.value="message";
        myDiv.setAttributeNode(clase);

        //añadimos las p's
        //primera p con textContent
        let p1 = document.createElement("p");
        let classP1 = document.createAttribute("class");
        classP1.value = "textContent";
        p1.setAttributeNode(classP1);

        //ya hemos creado <p class="textContent"></p>
        //a continuacion creamos el texto
        let content = document.getElementById("texto").value
        //TODO ARREGLAR LA LINEA NUEVA!!!!! (ARREGLADO PERO UNA CACA)
        content = content.replace("\n"," <br> ");
        let message = document.createTextNode(content);

        p1.appendChild(message); //mensaje hecho <p class="textContent">MESSAGE</p>
        /*document.getElementsByClassName("message")[divsNum].appendChild(p1);*/
        //segunda p con time
        let p2 = document.createElement("p");
        let classP2 = document.createAttribute("class");
        classP2.value = "time";
        p2.setAttributeNode(classP2);

        //ya hemos creado <p class="time"></p>
        //a continuacion creamos el texto
        let hourMinutes = document.createTextNode(hour);
        p2.appendChild(hourMinutes); //mensaje hecho <p class="time">hourMinutes</p>

        let divsNum = document.querySelectorAll('.message').length;
        //a continuación, añadimos la p dentro del div

        myDiv.appendChild(p1);
        myDiv.appendChild(p2);
        /*document.getElementsByClassName("message")[divsNum].appendChild(p2);*/

        //añado el div
        document.getElementsByClassName("app-messagingArea")[0].appendChild(myDiv);
        document.getElementsByClassName("message")[divsNum].innerHTML = content;
        document.getElementById("texto").innerHTML="";

    }

    //TODO ARREGLAR LOS MARGINS DEL BACKGROUND DE LOS MENSAJES



function fechaActual(){
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let fecha = today.getDay()+" "+monthNames[today.getMonth()]+" "+today.getFullYear();
    document.getElementById("date").innerHTML=fecha;
}
/*TODO 19 FORMATO DE LA HORA ✅*/