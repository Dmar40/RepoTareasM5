function calculadora() {
    const args = process.argv.slice(2);
    const num1 = parseFloat(args[0]);
    const operacion = args[1];
    const num2 = parseFloat(args[2]);
    function suma(a, b) {
        return a + b;
    }
    
    function resta(a, b) {
        return a - b;
    }
    
    function multiplicacion(a, b) {
        return a * b;
    }
    
    function division(a, b) {
        if (b === 0) {
            return 'Error: División por cero';
        }
        return a / b;
    }

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Error: Los argumentos deben ser números.');
        return;
    }

    let resultado;
    switch (operacion) {
        case '+':
            resultado = suma(num1, num2);
            break;
        case '-':
            resultado = resta(num1, num2);
            break;
        case '*':
            resultado = multiplicacion(num1, num2);
            break;
        case '/':
            resultado = division(num1, num2);
            break;
        default:
            console.log('Error: Operación no válida.');
            return;
    }

    console.log(`Resultado: ${resultado}`);
}

// Ejecutar la función principal
calculadora(2 + 3);