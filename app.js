// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo");
    let amigo = amigoIngresado.value; //Obtengo el valor del input

    if(amigo != ""){
        listaDeAmigos.push(amigo); //Agrego el amigo a la lista
        amigoIngresado.value = ""; //Reseteo el input
        listaAmigosHtml(); //Muestro los amigos en el HTML
    }

    else{
        alert("Debe ingresar un nombre valido"); //Si el input esta vacio muestro un alert
    }
}

//Funcion para mostrar los amigos en el HTML
function listaAmigosHtml(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Reseteo la lista antes de mostrar los amigos


    for (let amigo of listaDeAmigos) {//Recorro la lista de amigos
        let nuevoNombre = document.createElement("li"); //Creo un elemento "li" siendo "nuevoNombre" en forma de lista
        nuevoNombre.textContent = amigo;  
        lista.appendChild(nuevoNombre); //Agrego el nombre a la lista 
    }
}

function sortearAmigo () {
    if (listaDeAmigos.length > 1) {
        let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        let textoAmigo = document.getElementById("resultado");
        textoAmigo.innerHTML = "El amigo sorteado es: " + amigoSorteado;
    }
    else {
        alert("No hay suficientes amigos para sortear");
    }
}