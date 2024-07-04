
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.querySelector('#reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p','El número secreto es menor');
    } else {
      asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
  console.log(listaNumerosSorteados);
  //  Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
  } else {
    // si el numero generado está incluido en la lista
  if(listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;  
    }

  }
  
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
  
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  let intentos = 1;
  console.log(numeroSecreto)
}

function reiniciarJuego() {
  // Limpiar imput
  limpiarCaja()
  // reiniciar indicaciones
  // Generar el nemero aleatorio
  // Reiniciar el numero de intentos
  condicionesIniciales() 
  // Desabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()