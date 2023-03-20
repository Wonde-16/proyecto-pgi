const boton1 = document.querySelector(".boton1")
console.log(boton1)

const boton2 = document.querySelector(".boton2")
console.log(boton2)

const caInterior = document.querySelector(".caInterior")
console.log(caInterior)

boton2.addEventListener("click", function(){
    console.log("hola")
    caInterior.classList.add("posicion1")
})

boton1.addEventListener("click", function(){
    console.log("hola")
    caInterior.classList.remove("posicion1")
})