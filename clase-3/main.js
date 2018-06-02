// validamos el localStorage
validStorage();
// llamamos a los elementos del DOM 
var btn = document.getElementById('add');
var nombre = document.getElementById('name');
var desc = document.getElementById('desc');
var img = document.getElementById('img');
var price = document.getElementById('price');

// creamos el evento para el boton ( click )
btn.addEventListener('click', function(){
    nuevoProducto(nombre.value,desc.value,img.value,price.value);
    alert('nuevo producto ' + nombre.value + ' creado con exito!');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    price.value = '';
})