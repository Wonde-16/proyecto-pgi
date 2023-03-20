var cajas =document.querySelectorAll("#caja")
console.log(cajas)

var enlaces = document.querySelectorAll("ul li")
console.log(enlaces)

cajas.forEach(caja => {
    console.log(caja)

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(){
            
            
            var filtroE =enlace.getAttribute("data-filter")  
            var filtroC =caja.getAttribute("data-filter")


            if(filtroE != filtroC){
                
                caja.classList.add("quitar")
            }
            

        })
    })
})