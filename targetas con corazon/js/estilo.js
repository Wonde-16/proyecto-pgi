var cajas = document.querySelectorAll("#caja")
console.log(cajas)


cajas.forEach(caja => {
    const corazon = caja.querySelector(".corazon")

    corazon.addEventListener("click", function(){
        
        corazon.classList.toggle("anadeCorazon")
    })

    const  colores = caja.querySelectorAll(".circulos div")

    colores.forEach(color => {

        color.addEventListener("click", function(){
            caja.className = color.className

            color.classList.add("seleccion")

            colores.forEach(colorSeleccion => {

                if (colorSeleccion != color){
                    colorSeleccion.classList.remove("seleccion")
                }

            });
           
    
        });

    });

    // colores[0].addEventListener("click", function(){
    //     caja.classList.replace(caja.className, colores[0].className);
    //     colores[0].classList.add("seleccion")

    // })

    // colores[1].addEventListener("click", function(){
    //     caja.classList.replace(caja.className, colores[1].className);
    //     colores[1].classList.add("seleccion")

    // })

    // colores[2].addEventListener("click", function(){
    //     caja.classList.replace(caja.className, colores[2].className);
    //     colores[2].classList.add("seleccion")

    // })

    // colores[3].addEventListener("click", function(){
    //     caja.classList.replace(caja.className, colores[3].className);
    //     colores[3].classList.add("seleccion")

    // })



   
})


