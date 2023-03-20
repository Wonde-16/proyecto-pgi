var corazones = document.querySelectorAll(".cora")
console.log(corazones)


corazones.forEach(corazon => {

    corazon.addEventListener("click", function(){
        console.log("hola")
        
        corazon.classList.toggle("cora2")
    })
});