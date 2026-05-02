<<<<<<< HEAD
class ProductCard extends HTMLElement{

connectedCallback(){

const nombre = this.getAttribute("nombre")
const precio = this.getAttribute("precio")
const descripcion = this.getAttribute("descripcion")
const imagen = this.getAttribute("imagen")

this.innerHTML = `

<div class="card">

<img src="${imagen}" alt="${nombre}">

<h3>${nombre}</h3>

<p>${descripcion}</p>

<span class="precio">${precio}</span>

<button>Comprar</button>

</div>

`

}

}

=======
class ProductCard extends HTMLElement{

connectedCallback(){

const nombre = this.getAttribute("nombre")
const precio = this.getAttribute("precio")
const descripcion = this.getAttribute("descripcion")
const imagen = this.getAttribute("imagen")

this.innerHTML = `

<div class="card">

<img src="${imagen}" alt="${nombre}">

<h3>${nombre}</h3>

<p>${descripcion}</p>

<span class="precio">${precio}</span>

<button>Comprar</button>

</div>

`

}

}

>>>>>>> 1b04d98fc7506a2c4568cc699a95da15bd3036a7
customElements.define("product-card",ProductCard)