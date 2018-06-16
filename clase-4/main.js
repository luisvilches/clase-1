document.addEventListener('DOMContentLoaded', function(){
    var name = document.getElementById('name');
    var desc = document.getElementById('desc');
    var img = document.getElementById('img');
    var price = document.getElementById('price');

    document.getElementById('add').addEventListener('click', function(){
        add(name.value,desc.value,img.value,price.value);
        console.log(name.value,desc.value,img.value,price.value)
    })
})



function add(nombre,descripcion,imagen,precio){

    var p = new Product(nombre,descripcion,imagen,precio);
    p.save();

    document.getElementById('name').value = "";
    document.getElementById('desc').value = "";
    document.getElementById('img').value = "";
    document.getElementById('price').value = "";

    alert('ok');
}