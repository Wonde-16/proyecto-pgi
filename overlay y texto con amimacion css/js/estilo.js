const bot = document.querySelector(".boton")
console.log(bot)

const cajaA = document.querySelector(".caja-arriba")
console.log(cajaA)


bot.addEventListener("click", function(){
    cajaA.classList.toggle("caja-arriba")
    cajaA.classList.toggle("c-abierta")

})