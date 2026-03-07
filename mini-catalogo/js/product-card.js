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

customElements.define("product-card",ProductCard)