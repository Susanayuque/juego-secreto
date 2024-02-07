let numeroSecreto = 0
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intento} ${(intento===1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El ususario no acertó.
       if (numeroDeUsuario>numeroSecreto){
       asignarTextoElemento('p','El número secreto es menor');
        } else{
        asignarTextoElemento('p','El número secreto es mayor');
        }
        intento++;
        limpiarCaja();
      }
   return; 
   }
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Elige un número de 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intento = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensajes iniciales
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generaNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
