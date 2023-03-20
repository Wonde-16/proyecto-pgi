const azul = document.querySelector(".azul")
console.log(azul)

const rosa = document.querySelector(".rosa")
console.log(rosa)

const amarillo = document.querySelector(".amarillo")
console.log(amarillo)

const cerrarAzul = azul.querySelector(".abre")
console.log(cerrarAzul)

const cerrarRosa = rosa.querySelector(".abre")
console.log(cerrarRosa)

const cerrarAmarillo = amarillo.querySelector(".abre")
console.log(cerrarAmarillo)

var articulos = document.getElementsByTagName("div div div article")
console.log(articulos)

// const articulosAzul = azul.querySelector("article")
// console.log(articulosAzul)

// const articulosRosa = rosa.querySelector("article")
// console.log(articulosRosa)

// const articulosAmarillo = rosa.querySelector("article")
// console.log(articulosAmarillo)

// AZUL

azul.addEventListener("click", function(){
    azul.classList.add("amplia")
    cerrarAzul.classList.add("cierre")
})

cerrarAzul.addEventListener("click", function(e){
    e.stopPropagation()
    azul.classList.remove("amplia")
    cerrarAzul.classList.remove("cierre")
})

// ROSA


rosa.addEventListener("click", function(){
    rosa.classList.add("amplia")
    cerrarRosa.classList.add("cierre")
})

cerrarRosa.addEventListener("click", function(e){
    e.stopPropagation()
    rosa.classList.remove("amplia")
    cerrarRosa.classList.remove("cierre")
})

// AMARILLO

amarillo.addEventListener("click", function(){
    amarillo.classList.add("amplia")
    cerrarAmarillo.classList.add("cierre")
})

cerrarAmarillo.addEventListener("click", function(e){
    e.stopPropagation()
    amarillo.classList.remove("amplia")
    cerrarAmarillo.classList.remove("cierre") 
})


