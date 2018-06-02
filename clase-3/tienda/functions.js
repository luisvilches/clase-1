function nuevoProducto(nombre,desc,img,price){
    // creamos un nuevo objeto producto
    var producto = {
        nombre:nombre,
        descripcion:desc,
        imagen:img,
        precio:price
    }
    // enviamos el objeto producto al la funcion
    // addProduct que se encarga de guardar el producto
    addProduct(producto);
}

function getStorage(){
    return JSON.parse(window.localStorage.getItem('productos'));
}
function setStorage(arr){
    window.localStorage.setItem('productos',JSON.stringify(arr))
}

function addProduct(obj){
    // traemos el array con os datoas almacenados
    //  en localStorage
    var nuevoArrayProductos = getStorage();
    // insertamos el nuevo objeto en el array
    nuevoArrayProductos.push(obj);
    // guardamos nuevamente en localStorage
    setStorage(nuevoArrayProductos);
}

function validStorage(){
    // validamos si localStorage es nulo
    if(getStorage() == null){
        // insertamos una arry vacio
        var nuevoArr = [];
        setStorage(nuevoArr);
        // devlvemos el localStorage
        return getStorage();
    } else {
        // devlvemos el localStorage
        return getStorage();
    }
}

function renderView(arr){
    // llamamos al contenedor productosList
    var ul = document.getElementById('productosList');
    // seteamos su html
    ul.innerHTML = '';
    // iteramos el array de productos
    arr.forEach(function(item,index){
        // creamos los elemntos de html
        var li = document.createElement('li');
        var col1 = document.createElement('span');
        var col2 = document.createElement('span');
        var img = document.createElement('img');
        var titulo = document.createElement('h3');
        var desc = document.createElement('p');
        var price = document.createElement('strong');
        // seteamos los atributos de los elementos
        titulo.innerText = item.nombre;
        desc.innerText = item.descripcion;
        price.innerText = '$ ' + item.precio;
        img.src = item.imagen;
        
        // insertamos los elementos en el DOM
        col1.appendChild(img);
        col2.appendChild(titulo);
        col2.appendChild(desc);
        col2.appendChild(price);
        li.appendChild(col1);
        li.appendChild(col2);
        ul.appendChild(li);
    });

}