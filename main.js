/*
var int = 10;
var str = "abcd";
var bool = true;
var und;

console.log(typeof int);
console.log(typeof str);
console.log(typeof  bool);
console.log(typeof und);


var num1 = 10;
var num2 = 20;

console.log("sum",(num1 + num2) + " pesos");
console.log("res", num1 - num2);
console.log("mul", num1 * num2);
console.log("div", num1 / num2);


var num = 1;
console.log(num);
var num2 = ++num;
console.log(num2);



var bool1 = true;
var bool2 = false;

console.log(bool1 === bool2);
console.log(bool1 !== bool2);
console.log(bool1 !== bool1);
console.log(bool2 === bool2);


var num1 = 10;
var num2 = 20;

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num1);



var num1 = 10;
var num2 = 20;

console.log(num1 < num2 || num2 > num1);
console.log(num1 < num2 || num2 >= num1);
console.log(num1 > num2 || num2 > num1);
console.log(num1 > num2 || num2 < num1);
*/



//console.log(num1 < num2 ? 'si es verdadero' : 'no es falso');
//console.log(num1 > num2 ? 'si es verdadero' : 'no es falso');
/*
if(num1 < num2 && num1 > num2){
    console.log("se ejcuta");
} else if(num1 < num2 || num1 > num2) {
    console.log("se ejecuta el if else if");
} else {
    console.log("no se ejecuta");
}


var num1 = 10;
var num2 = 10;

var rango = function (num){
    if(num <= 5){
        return 0;
    } else if(num >= 6 && num <= 10){
        return 1
    }
}

var nombre = "luis";

switch(rango(7)){
    case 0:
        console.log("1");
        break;
    case 1:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    default:
        console.log("es otro valor");
}

function nombreCompleto(nombre,apellido){
    console.log(nombre + " " + apellido);
}

nombreCompleto("Luis",);
*/

function edad(anioNac){
    return 2018 - anioNac;
}

console.log(edad(1989));

if(edad(1989) >= 18){
    console.log("eres mayor de edad");
} else {
    console.log("eres menor de edad");
}










