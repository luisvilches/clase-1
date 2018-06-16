function Product(nombre,desc,img,price){
    this.nombre = nombre;
    this.desc = desc;
    this.imagen = img;
    this.price = price;
    this.storage = this.validStorage();
}

Product.prototype.getStorage = function(){
    return JSON.parse(window.localStorage.getItem('productos'));
}

Product.prototype.setStorage = function(arr){
    window.localStorage.setItem('productos',JSON.stringify(arr));
}

Product.prototype.validStorage = function(){
     if(this.getStorage() == null){
        this.setStorage([]);
        return this.getStorage();
    } else {
        return this.getStorage();
    }
}

Product.prototype.save = function(){
    var producto = {
        nombre:this.nombre,
        descripcion:this.desc,
        imagen:this.imagen,
        precio:this.price
    };

    
    this.storage.push(producto);
    this.setStorage(this.storage);
}