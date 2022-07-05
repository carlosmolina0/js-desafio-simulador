///Desafio Simulador Interactivo - Calculadora de Cambio Euro - Dollar

//declaro las variables
let importe, moneda1, moneda2, valorC;
let repetir = "no"

//creo las constantes con el tipo de cambio actual
const cambioEuroDollar = 1.03;
const cambioDollarEuro = 0.97;

//inicio el ciclo para dar la opción de calcular varias veces
do{

//solicito el importe a convertir
do {
    importe = parseFloat(prompt("Indica el importe que quieres convertir"));

    //Pido otro monto si no es un numero
    if (isNaN(importe)) {
        alert("Por favor ingrese un monto válido.")
    }
} while (isNaN(importe))

//solicito la moneda actual
do {
    moneda1 = (prompt("Ingrese la moneda actual (euro o dolar)")).toLowerCase();

    // pido que ingrese nuevamente la moneda si no es valida
    if ((moneda1 != "euro") && (moneda1 != "dolar")) {
        alert("Por favor ingrese una moneda válida (euro o dolar).")
    }
} while ((moneda1 != "euro") && (moneda1 != "dolar"))


//calculo el importe de la moneda cambiada
switch (moneda1) {
    case "euro":
        valorC = parseFloat(importe*cambioEuroDollar)
        moneda2 = "dolar"
        break
    case "dolar":
        valorC = parseFloat(importe*cambioDollarEuro)
        moneda2 = "euro"
        break
    default:
        alert("Ha habido un problema al calcular el cambio")
    }
    console.log(valorC)
    console.log(importe)


    //Devuelvo el mensaje con el tipo de cambio
    if (isNaN(valorC)) {
        alert("Ha habido un problema al calcular el cambio")
    }  else {
        alert(`El valor de tus ${importe} ${moneda1} son ${valorC} ${moneda2}`)
    }

    //Le pregunto al usuario si desea repetir la operacion
    repetir = prompt("¿Quieres volver a realizar un cálculo de cambio de moneda? si - no").toLowerCase()
 } while (repetir == "si");
