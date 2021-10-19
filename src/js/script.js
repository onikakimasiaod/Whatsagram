//TODO 0 SEGUEIX LES PAUTES DEL TREBALL EN PROJECTES VISTES A CLASSE ✅


/*TODO 4 EMOJI BUTTONS*/
function emoji(){

}


/*TODO 5 CEC: LA TECLA C ESBORRA EL TEXT DE LA TEXT AREA Y CE ESBORRA LA DARRERA PARAULA (TRIM)*/
function deleteAll() {
    document.getElementById("texto").innerHTML = "";
}

function deleteWord(){
    let msg = document.getElementById("texto").value.trim();
    let space = msg.lastIndexOf(" ");
    msg = msg.substr(0,space);
    document.getElementById("texto").innerHTML = msg;
}


/*TODO 6 LA TECLA <-- ESBORRA EL DARRER CARÀCTER I--> ESBORRA EL PRIMER CARÀCTER*/

function deleteChar() {
    let msg = document.getElementById("texto").value;
    document.getElementById("texto").innerHTML = msg.substr(0, msg.length - 1);
}

function deleteFirst(){
    let msg = document.getElementById("texto").value;
    document.getElementById("texto").innerHTML=msg.substr(1,msg.length);
}






/*TODO 2 TEXT AREA: LLETRES*/
//KEYBOARD CODE
let keyboard = document.querySelectorAll('.keyboard');
keyboard.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML +=letter.value;})});

//FOR SPECIAL CHARACTERS
let special = document.querySelectorAll('.special');
special.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML+=letter.value; })});

/*TODO 8 SPACE BUTTON*/
let space = document.querySelectorAll('.space');
space.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML += letter.value;
    })});


/*TODO 9 NEW LINE BUTTON*/
function line(){
    document.getElementById("texto").innerHTML+="\n";
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

/*TODO 3 SEND BUTTON*/

/*
* <div class="message">
            <p id="textContent">Hola</p>
            <p id="time">19:20</p>
        </div>
*/
    function send(){
        let today = new Date();
        let hour = today.getHours()+':'+today.getMinutes();

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
        let message = document.createTextNode(document.getElementById("texto").value);
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
        console.log(divsNum);
        //a continuación, añadimos la p dentro del div

        myDiv.appendChild(p1);
        myDiv.appendChild(p2);
        /*document.getElementsByClassName("message")[divsNum].appendChild(p2);*/

        console.log(p1);
        console.log(p2);
        console.log(myDiv);
        //añado el div
        document.getElementsByClassName("app-messagingArea")[0].appendChild(myDiv);
        document.getElementById("texto").innerHTML="";

    }



function fechaActual(){
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let fecha = today.getDay()+" "+monthNames[today.getMonth()]+" "+today.getFullYear();
    document.getElementById("date").innerHTML=fecha;
}
