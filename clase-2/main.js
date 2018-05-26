/*var dato = "global";

function local(){
    dato = "local";
}

console.log(dato);
console.log(local());
console.log(dato);

*/
var miArray = [1,2,3,4];
/*
var miArray = [1,2,3,4];
console.log("valor" , miArray[2]);
console.log("Mi array tiene",miArray.length,"cantidad de datos");

console.log("valor anterior",miArray);
miArray.push(5);
console.log("valor actual",miArray);*/


function add(a){
    miArray.push(a);
}

console.log(miArray);
add(8);
console.log(miArray);
