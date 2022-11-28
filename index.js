//seleccionar todos los nodos de nuestro html para añadir interactividad a la página

const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// const calculadora = new Calculadora();
//VERIFICAR QUE ESTE REALIZANDO LAS OPERACIONES
// console.log(calculadora.sumar(4,2))
// console.log(calculadora.restar(4,2))
// console.log(calculadora.multiplicar(4,2))
// console.log(calculadora.dividir(4,2))

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

