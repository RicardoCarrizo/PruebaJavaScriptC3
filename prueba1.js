/* Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento. */

/* 

matriz1 = [3, 6, 9]
matrizDescuentos = []
var sumatotal = 0
var string = ''
var lunes = 'lunes'
var martes = 'martes'
var miercoles = 'miercoles'
var jueves = 'jueves'
var viernes = 'viernes'
var sabado = 'sabado'
var domingo = 'domingo'
    //funcion crea descuento segun dia
function descuento(string, []) {
    //si es martes o jueves aplica descuento
    if (string == martes || string == jueves) {
        //crea un nuevo arreglo con los descuentos aplicados
        matriz1.forEach(i => matrizDescuentos.push(i * 0.80));
        //recorre arreglo para realizar la suma de productos
        for (var i = 0; i < matrizDescuentos.length; i++) {
            sumatotal = sumatotal + matrizDescuentos[i]

        }
    } else {
        //recorre arreglo de un dia SIN descuento, y entrega la suma
        for (var i = 0; i < matrizDescuentos.length; i++) {
            sumatotal = sumatotal + matriz1[i]

        }

    }
    //imprime la suma total de productos
    console.log(sumatotal, matriz1, matrizDescuentos)
}

descuento('lunes', matriz1)

 */


/* Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento. */


/* 
function descuentoPorCondiciones(){


} */



/* 
● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.
 */





/* 
Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso.
 */

arreglo = [200, 5500, 900, 7000, 500, 300]
var mayor = 0
var menor = arreglo[0]

// funcion entrega el producto más costoso
function masCostoso() {
    //recorre arreglo según el largo
    for (var i = 0; i < arreglo.length; i++) {
        //compara el numero del arreglo con la variable mayor
        if (mayor < arreglo[i]) {
            mayor = arreglo[i]
        } else {

        }
    }

    console.log(mayor)
}
masCostoso()

//----------------------------------------------------------------

//funcion entrega el valor menos costoso del arreglo
function menosCostoso() {
    //recorre arreglo según el largo
    for (var i = 0; i < arreglo.length; i++) {
        //compara el numero del arreglo con la variable menor
        if (menor > arreglo[i]) {
            menor = arreglo[i]
        } else {

        }
    }

    console.log(menor)
}
menosCostoso()