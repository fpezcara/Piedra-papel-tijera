// // If else
// Hacer un programa que le permita a dos usuarios jugar al piedra, papel o tijera
// El primer usuario tiene que ingresar su eleccion
// Si no ingresa piedra, papel o tijera le decimos que no puede jugar
// Despues el segundo usuario
// Les respondemos quien gano .
// consejo de Male: Empecemos por un caso. Por ej si uno escribe piedra y el otro tijera

let usuario1;
let usuario2;
let papel = "papel";
let tijera = "tijera";
let piedra = "piedra";
let puntajeJugador1 = 0;
let puntajeJugador2 = 0;
let total = puntajeJugador1 + puntajeJugador2;

alert("¡Bienvenidx a PIEDRA, PAPEL o TIJERA!")

usuario1 = prompt("USUARIO 1: Por favor ingrese una opción: piedra, papel o tijera");
usuario2 = prompt("USUARIO 2: Por favor ingrese una opción: piedra, papel o tijera");

if (usuario1 === tijera && usuario2 === papel) {
    alert(`¡Usuario 1 ganaste este turno!`)
    puntajeJugador1++
}

else if (usuario1 === tijera && usuario2 === piedra) {
    alert(`¡Usuario 2 ganaste este turno!`)
    puntajeJugador2++
}

else if (usuario1 === tijera && usuario2 === tijera) {
    alert(`¡Esto es un EMPATE!`)
}

else if (usuario1 === piedra && usuario2 === papel) {
    alert(`¡Usuario 2 ganaste este turno!`)
    puntajeJugador2++
}

else if (usuario1 === piedra && usuario2 === piedra) {
    alert(`¡Esto es un EMPATE!`)
}

else if (usuario1 === piedra && usuario2 === tijera) {
    alert(`Usuario 1 ganaste este turno!`)
    puntajeJugador1++
}

else if (usuario1 === papel && usuario2 === papel) {
    alert(`¡Esto es un EMPATE!`)
}

else if (usuario1 === papel && usuario2 === piedra) {
    alert(`¡Usuario 1 ganaste este turno!`)
    puntajeJugador1++
}

else if (usuario1 === papel && usuario2 === tijera) {
    alert(`Usuario 2 ganaste este turno!`)
    puntajeJugador2++
}

else {
    alert(`¡Lo siento! No ingresaste nada`)
}


for (let i = 0; i >= 2; i++) {
    if (usuario1 === tijera && usuario2 === papel) {
        alert(`¡Usuario 1 ganaste este turno!`)
        puntajeJugador1++
    }
    
    else if (usuario1 === tijera && usuario2 === piedra) {
        alert(`¡Usuario 2 ganaste este turno!`)
        puntajeJugador2++
    }
    
    else if (usuario1 === tijera && usuario2 === tijera) {
        alert(`¡Esto es un EMPATE!`)
    }
    
    else if (usuario1 === piedra && usuario2 === papel) {
        alert(`¡Usuario 2 ganaste este turno!`)
        puntajeJugador2++
    }
    
    else if (usuario1 === piedra && usuario2 === piedra) {
        alert(`¡Esto es un EMPATE!`)
    }
    
    else if (usuario1 === piedra && usuario2 === tijera) {
        alert(`Usuario 1 ganaste este turno!`)
        puntajeJugador1++
    }
    
    else if (usuario1 === papel && usuario2 === papel) {
        alert(`¡Esto es un EMPATE!`)
    }
    
    else if (usuario1 === papel && usuario2 === piedra) {
        alert(`¡Usuario 1 ganaste este turno!`)
        puntajeJugador1++
    }
    
    else if (usuario1 === papel && usuario2 === tijera) {
        alert(`Usuario 2 ganaste este turno!`)
        puntajeJugador2++
    }
    
    else {
        alert(`¡Lo siento! No ingresaste nada`)
    }   
}
    
