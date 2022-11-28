class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined; //tipo de operacion que esta usando el usuario
        this.valorActual = ''; //son los numeros que estamos guardando
        this.valorAnterior = ''; //son los numeros que estamos guardando
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
        }
    }
    // funcion borra un valor a la vez, el ultimo numero
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }
    //borrar todo, deja el display sin informacion 'C', deja todo en blanco
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    //funcion computar valor anterior con valor actual
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
    //agregar numeros 
    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
//IMPRIME VALORES EN LA PANTALLA DE LA CALCULADORA
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
//calcular, tomar valores cargados en display y darselos a la calculadora par que realice la operacion correspondiente
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);//guardar valores como numeros, al convertirlos de string a valor numerico
        const valorActual = parseFloat(this.valorActual);//guardar valores como numeros, al convertirlos de string a valor numerico

        if (isNaN(valorActual) || isNaN(valorAnterior)) return// si no hay informacion en las variables no haga nada 
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}