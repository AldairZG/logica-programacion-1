
let numerosIngresados = [];

for (let i = 0; i < 3; i++) {
    let numero = parseFloat(prompt("Ingrese un número"))
    numerosIngresados.push(numero);

    if (i === 0) {
        var max = numero;
        var min = numero;
        var mid = numero;
    } else {
        if (numero > max) {
            mid = max;
            max = numero;
        } else if (numero < min) {
            mid = min;
            min = numero;
        } else {
            mid = numero;
        }
    }
}
console.log(max + "," + mid + "," + min);
console.log(min + "," + mid + "," + max);