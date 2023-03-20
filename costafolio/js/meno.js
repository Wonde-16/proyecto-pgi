const ham = document.querySelector(".ham");
console.log(ham)

const nav = document.querySelector(".naveg");
console.log(nav)

ham.addEventListener("click", function(){
    nav.classList.toggle("navAl")
})