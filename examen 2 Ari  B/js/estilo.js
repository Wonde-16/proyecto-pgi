var tarjetas = document.querySelectorAll(".contenido div")
console.log(tarjetas)

tarjetas.forEach(tarjeta=>{
    const texto = tarjeta.querySelector(".fondo h1")
    console.log(texto)

    tarjeta.addEventListener("mouseover", function(){
        texto.classList.add("animate__animated", "animate__fadeInUp")
        texto.classList.add(".textoAbierto")
    
    })
    
    tarjeta.addEventListener("mouseout", function(){
        texto.classList.remove("animate__animated", "animate__fadeInUp")
        texto.classList.remove(".textoAbierto")
    })
    

    const guardado = tarjeta.querySelector(".fondo i")
    console.log(guardado)

    guardado.addEventListener("click", function(){
    
        if (guardado.classList.contains("fa-regular")){
            guardado.classList.replace("fa-regular", "fa-solid");
        }
        else{
            guardado.classList.replace("fa-solid", "fa-regular");
        }
        
    
    })
})