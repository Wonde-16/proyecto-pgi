const ham = document.querySelector(".ham");
console.log(ham);

const local = document.querySelector(".local");
console.log(local);

const buscador = document.querySelector(".buscador");
console.log(buscador);


ham.addEventListener("click",function(){

    local.classList.toggle("navAlt")
    buscador.classList.toggle("navAlt")

    // local.style.display="inline-flex"
    // buscador.style.display="inline-flex"

})