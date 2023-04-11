/**
 * -Escriba un programa que pregunte cuántos números se van a introducir, pida esos números, 
 * y escriba el mayor, el menor y la media aritmética.
 * 
 */

let cantidadNumeros = parseInt(prompt("Ingrese cantidad de numeros")), numerosIngresados = [], suma = 0, resultado = 0;

if (!isNaN(cantidadNumeros) && cantidadNumeros !== 0) {
    for (let index = 0; index < cantidadNumeros; index++) {
        let numero_ingresado = parseInt(prompt("Ingrese numeros"));
        if (!isNaN(numero_ingresado)) {
            suma = suma + numero_ingresado;
            numerosIngresados.push(numero_ingresado);
        } else {
            index = cantidadNumeros;
        }

    }
    resultado = (suma / cantidadNumeros).toFixed(2);
    numerosIngresados.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    })
    console.log(`El menor es: ${numerosIngresados[0]}`);
    console.log(`El mayor es: ${numerosIngresados[cantidadNumeros - 1]}`);
    console.log(`la media aritmética es: ${resultado}`);
} else {
    alert('Ingrese un numero valido');
}