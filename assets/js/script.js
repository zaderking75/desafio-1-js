  
    cantidad = 0;
    valor = 0;
   
function aumentar_cantidad(aumentar) {

    cantidad++;
    valor += 400000;
    actualizarCantidadValor()

}

function disminuir_cantidad(disminuir) {

    cantidad--;
    valor -= 400000;
    actualizarCantidadValor()

}


function actualizarCantidadValor() {
    document.getElementById('cantidad').innerHTML = cantidad;
    document.getElementById('valor').innerHTML = valor;
}


// cantidad = document.querySelector('#cantidad') uno1 = Number(cantidad.innerHTML) uno1 = uno1 + 1cantidad.innerHTML = uno1 //

//cantidad = document.querySelector('#cantidad') uno1 = Number(cantidad.innerHTML) uno1 = uno1 - 1 cantidad.innerHTML = uno1// 

// A pesar de mi intento no me lo tomaba y probaba de diferentes maneras entrelazar los botones en dos direcciones que se me dificultaba ala hora de hacerlo,lo hize de esta manera y me daba el resultado que yo queria //