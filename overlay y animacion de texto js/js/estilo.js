var cajas = document.querySelectorAll(".caja")
console.log(cajas)


cajas.forEach(caja => {

    console.log(caja);

    const cajaTitulo = caja.querySelector(".titulo")
    console.log(cajaTitulo)

    caja.addEventListener("mouseover", function(){
        cajaTitulo.classList.add("animate__animated", "animate__fadeInUp")
    
    })

    caja.addEventListener("mouseout", function(){
        cajaTitulo.classList.remove("animate__animated", "animate__fadeInUp")
    })
})


