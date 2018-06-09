function add(nombre,descripcion,imagen,precio){
    var p = new Product(nombre,descripcion,imagen,precio);
    p.save();
}
