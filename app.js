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
}