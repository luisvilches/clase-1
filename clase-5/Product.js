class Product {
    constructor(nombre,descripcion,imagen,precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
        this.storage = this.validStorage();
    }

    getStorage(){
        return JSON.parse(window.localStorage.getItem('productos'));
    }

    setStorage(arr){
        window.localStorage.setItem('productos', JSON.stringify(arr));
    }

    validStorage(){
        if(this.getStorage() == null){
            this.setStorage([]);
            return this.getStorage();
        } else {
            return this.getStorage();
        }
    }

    save(){
        this.storage.push({
            nombre:this.nombre,
            descripcion:this.descripcion,
            image:this.imagen,
            precio:this.precio
        });
        this.setStorage(this.storage);
    }
}