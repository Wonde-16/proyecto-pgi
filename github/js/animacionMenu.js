const buscador = document.querySelector(".buscar")
console.log(buscador)

const cajaBuscador = document.querySelector(".cajaBuscador")
console.log(cajaBuscador)


buscador.addEventListener("click", function(){
    console.log("hola")
    
    cajaBuscador.classList.toggle("cajaBuscadorAlt")
})
