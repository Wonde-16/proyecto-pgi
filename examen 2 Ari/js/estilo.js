const texto = document.querySelector(".fondo h1")
console.log(texto)

const tarjeta = document.querySelector(".tarjeta")
console.log(tarjeta)

const guardado = document.querySelector(".fondo i")
console.log(guardado)

tarjeta.addEventListener("mouseover", function(){
    texto.classList.add("animate__animated", "animate__fadeInUp")
    texto.classList.add(".textoAbierto")

})

tarjeta.addEventListener("mouseout", function(){
    texto.classList.remove("animate__animated", "animate__fadeInUp")
    texto.classList.remove(".textoAbierto")
})

guardado.addEventListener("click", function(){
    
    if (guardado.classList.contains("fa-regular")){
        guardado.classList.replace("fa-regular", "fa-solid");
    }
    else{
        guardado.classList.replace("fa-solid", "fa-regular");
    }
    

})