<<<<<<< HEAD
async function cargarComponente(id, archivo){

const contenedor = document.getElementById(id)

const respuesta = await fetch(archivo)

const html = await respuesta.text()

contenedor.innerHTML = html

}

cargarComponente("header","components/header/header.html")
cargarComponente("footer","components/footer/footer.html")

/* PRODUCTOS */

const productos = [

{
nombre:"Laptop Gamer",
precio:"$3.500.000",
descripcion:"Laptop potente para juegos y programación",
imagen:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},

{
nombre:"Smartphone Pro",
precio:"$2.000.000",
descripcion:"Celular rápido con excelente cámara",
imagen:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},

{
nombre:"Audífonos Bluetooth",
precio:"$350.000",
descripcion:"Sonido envolvente y batería duradera",
imagen:"https://www.tecnoyescas.com/wp-content/uploads/2021/02/los-mejores-audifonos-inalambricos.jpg"
}

]

const catalogo = document.getElementById("catalogo")

productos.forEach(producto => {

const card = document.createElement("product-card")

card.setAttribute("nombre",producto.nombre)
card.setAttribute("precio",producto.precio)
card.setAttribute("descripcion",producto.descripcion)
card.setAttribute("imagen",producto.imagen)

catalogo.appendChild(card)

=======
async function cargarComponente(id, archivo){

const contenedor = document.getElementById(id)

const respuesta = await fetch(archivo)

const html = await respuesta.text()

contenedor.innerHTML = html

}

cargarComponente("header","components/header/header.html")
cargarComponente("footer","components/footer/footer.html")

/* PRODUCTOS */

const productos = [

{
nombre:"Laptop Gamer",
precio:"$3.500.000",
descripcion:"Laptop potente para juegos y programación",
imagen:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},

{
nombre:"Smartphone Pro",
precio:"$2.000.000",
descripcion:"Celular rápido con excelente cámara",
imagen:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},

{
nombre:"Audífonos Bluetooth",
precio:"$350.000",
descripcion:"Sonido envolvente y batería duradera",
imagen:"https://www.tecnoyescas.com/wp-content/uploads/2021/02/los-mejores-audifonos-inalambricos.jpg"
}

]

const catalogo = document.getElementById("catalogo")

productos.forEach(producto => {

const card = document.createElement("product-card")

card.setAttribute("nombre",producto.nombre)
card.setAttribute("precio",producto.precio)
card.setAttribute("descripcion",producto.descripcion)
card.setAttribute("imagen",producto.imagen)

catalogo.appendChild(card)

>>>>>>> 1b04d98fc7506a2c4568cc699a95da15bd3036a7
})