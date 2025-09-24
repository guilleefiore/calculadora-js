document.addEventListener('DOMContentLoaded', (event) => {

    // Selecciona la pantalla por su ID
    const display = document.querySelector('#display');

    // Selecciona todos los botones con la clase 'numero'
    const botonesNumeros = document.querySelectorAll('.numero');

    // Selecciona los botones de operación, excluyendo '=' y 'C'
    const botonesOperadores = document.querySelectorAll('.operador:not(#igual):not(#clear)');

    // Selecciona los botones especiales por su ID
    const botonIgual = document.querySelector('#igual');
    const botonClear = document.querySelector('#clear');

    let expresion = '';

    // Agrega el evento de clic a los botones numéricos
    botonesNumeros.forEach(boton => {
        boton.addEventListener('click', () => {
            expresion += boton.textContent;
            display.value = expresion;
        });
    });

    // Agrega el evento de clic a los botones de operación
    botonesOperadores.forEach(boton => {
        boton.addEventListener('click', () => {
            expresion += boton.textContent;
            display.value = expresion;
        });
    });

    // Lógica para el botón de igual
    botonIgual.addEventListener('click', () => {
        try {
            // Evalúa la expresión de manera segura
            const resultado = Function('return ' + expresion)();
            display.value = resultado;
            expresion = resultado.toString();
        } catch (error) {
            display.value = 'Error';
            expresion = '';
        }
    });

    // Lógica para el botón de limpiar
    botonClear.addEventListener('click', () => {
        expresion = '';
        display.value = '';
    });
});