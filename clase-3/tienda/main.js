// validar el localStorage
validStorage();

// llamar a los inputs

var btn = document.getElementById('add');
var nombre = document.getElementById('name');
var desc =  document.getElementById('desc');
var img =  document.getElementById('img');
var price =  document.getElementById('price');

// creamos el evento click del boton

btn.addEventListener('click', function(){
    nuevoProducto(nombre.value,desc.value,img.value,price.value);
    alert('nuevo producto ' + nombre.value + ' sea creado con exito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    price.value = '';
})