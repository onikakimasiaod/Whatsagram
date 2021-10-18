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


/*TODO 6 LA TECLA <-- ESBORRA EL DARRER CARÀCTER I✅ --> ESBORRA EL PRIMER CARÀCTER ✅*/

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
    document.getElementById("texto").innerHTML +=letter.value;
    /*document.getElementById("texto").innerHTML+=letter.value;*/})});

//FOR SPECIAL CHARACTERS
let special = document.querySelectorAll('.special');
special.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML+=letter.value; })});

/*TODO 8 SPACE BUTTON ✅*/
let space = document.querySelectorAll('.space');
space.forEach(letter => {letter.addEventListener('click', event => {
    document.getElementById("texto").innerHTML += letter.value;
    })});


/*TODO 9 NEW LINE BUTTON ✅*/
function line(){
    document.getElementById("texto").innerHTML+="\n";
}





//KEYBOARD TO MINUS TO
/*TODO 7 MAJUSCULES DESACTIVAT ✅/ 1 CARACTER EN MAJUSCULA / MAJUSCULES PERMANENTS */
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
    function send(){
        let today = new Date();
        let hour = today.getHours()+':'+today.getMinutes();

        //message with class without hour
        let msg = document.createElement("div");
        let text = document.createTextNode(document.getElementById("texto").value +" "+ hour);
        msg.appendChild(text); //mensaje hecho
        let attribute = document.createAttribute("class");
        attribute.value = "convo";
        msg.setAttributeNode(attribute);
        document.getElementById("conversation").appendChild(msg);
        document.getElementById("texto").innerHTML="";

    }



function fechaActual(){
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let fecha = today.getDay()+" "+monthNames[today.getMonth()];

    //CREATING DIV
    let myDiv = document.createElement("div");
    let text = document.createTextNode(fecha);
    myDiv.appendChild(text); //mensaje hecho
    let attribute = document.createAttribute("class");
    attribute.value = "date";
    myDiv.setAttributeNode(attribute);
    document.getElementById("conversation").appendChild(myDiv   );
}
