const menu = document.querySelector(".hamb");
console.log(menu)

const nav = document.querySelector("nav");
console.log(nav)


menu.addEventListener("click", function(){
    nav.classList.toggle("navAlt")
})