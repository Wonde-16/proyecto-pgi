var cajas =document.querySelectorAll(".tarjeta")
console.log(cajas)

var todas = document.querySelector(".todas")
var par = document.querySelector(".par")
var impar = document.querySelector(".impar")




todas.addEventListener("click", function(){

    cajas.forEach(caja => {
        caja.style.display="inline-flex"
    }) 
})

par.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "par"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none"
        }
    }) 
})

impar.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "impar"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none" 
        }
    }) 
})
