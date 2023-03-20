const todas = document.querySelector("a");

const cajas = document.querySelectorAll(".contenido div");



todas.addEventListener("click", function(){
    cajas.forEach(caja =>{
        caja.style.display="inline-flex"
    })
    
})



cajas.forEach(caja =>{
    const basura = caja.querySelector("i");
    console.log(basura);
        basura.addEventListener("click", function(){

            caja.style.display="none";

        })
        
})






