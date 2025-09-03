// Ejercicio de Funciones:

// a. Crea una función llamada calcularAreaTriangulo que tome dos parámetros: base y altura. Esta función debería calcular y retornar el área de un triángulo utilizando la fórmula (base * altura) / 2.

const calcularAreaTriangulo = (base, altura) => {
    resultado = (base * altura)/2
    console.log("El resultado del area es:", resultado)
}

// b. Crea una función llamada calcularCircunferencia que tome un parámetro radio. Esta función debería calcular y retornar la circunferencia de un círculo utilizando la fórmula 2 * Math.PI * radio.

const calcularCircunferencia = (radio) => {
    resultado = (2 * Math.PI * radio)
    console.log("La circunferencia es:", resultado)
}

// c. Llama a ambas funciones y muestra los resultados en la consola.

calcularAreaTriangulo(3, 5)
calcularCircunferencia(3)

// Ejercicio de Recursividad:

// a. Crea una función recursiva llamada calcularFactorial que tome un parámetro n. Esta función debería calcular y retornar el factorial de n. (Recuerda que el factorial de un número n es el producto de todos los enteros positivos desde 1 hasta n).

function calcularFactorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

// b. Llama a la función calcularFactorial con un número entero y muestra el resultado en la consola.

const factorial = console.log("El resultado del factorial es:", calcularFactorial(5))

// Ejercicio Combinado:

// a. Crea una función llamada calcularPotencia que tome dos parámetros: base y exponente. Esta función debería calcular y retornar base elevado a la exponente utilizando recursividad.

function calcularPotencia (base, exponente) {
    if (exponente === 0) {
        return 1;
    } else {
        return base * calcularPotencia(base, exponente -1)
    }
}

// b. Llama a la función calcularPotencia con valores diferentes y muestra los resultados en la consola.

const funcionPotencia = console.log("El resultado es:", calcularPotencia(2,4))