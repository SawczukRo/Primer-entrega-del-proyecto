class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = "Arroz";
        this.precio= parseFloat(40.50);
        this.cantidad= 15; 
        this.disponible = true; 
     }

sumarIva() {
    return this.precio *2.48;
}
}




let arrayProductos = [];
do{
    let comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
    if (comprobacion === "fin"|| comprobacion === "FIN" || comprobacion ==="Fin"){
        break;
    }else{
        nombreP = comprobacion; 
        let precioP = prompt('Ingrese el precio del producto');
        let cantidadP = prompt('Ingrese la cantidad comprada del producto');
        arrayProductos.push(new Producto(nombreP,precioP,cantidadP));
    }
}
while (comprobacion != "fin"|| comprobacion != "FIN" || comprobacion != "Fin")


console.log(arrayProductos);



for (let producto of arrayProductos){
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li>");
    document.write("<li><h3> Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3> Precio con IVA es: " + producto.sumarIva() + "</h3></li>/ul><br>");
    console.log(producto.nombre);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());
}


// PRODUCTOS SIN STOCK 
let sinStock = arrayProductos.filter(producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin stock (cantidad = 0 o disponible = false): </h3>");

for (let producto of sinStock) {
    document.write("ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}



// ORDENADOS POR CANTIDAD 

let ordenadosCantidad =[];
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b){
    return a.cantidad- b.cantidad;
});
console.log('Ordenados por Cantidad Ascendente: ');
console.log(ordenadosCantidad);
document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");

for (let producto of ordenadosCantidad){
    document.write("<ul><li><h3> Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}