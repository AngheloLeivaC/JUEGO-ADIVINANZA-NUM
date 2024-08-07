// accion boton
let numeroazar = Math.floor(Math.random()*100) + 1

let numeroEntrada  = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento =  document.getElementById('intento')
let intentos =  0

function resultado(){

    intentos ++
    intento.textContent = intentos
    
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado>100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favot, ingresar un numero valido entre 1 y 100'
        return
    }

    if(numeroIngresado === numeroazar){
        mensaje.textContent = '¡felicitaciones! ¡Has ganado!'
        mensaje.style.color = 'green'
        numeroEntrada.disable = true;
    } else if (numeroIngresado < numeroazar ){
        mensaje.textContent = '¡Sigue...! El numero es mayor al que elegiste'
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = '¡Retrocede! El numero es mejor al que elegiste'
        mensaje.style.color = 'red'
    }
}