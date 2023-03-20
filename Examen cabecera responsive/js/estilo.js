const icono_burger = document.getElementById("burguer");
console.log(icono_burger);


 const nave= document.querySelector(".navegador")
 console.log(nave);

icono_burger.addEventListener("click",
    function(){
        console.log("hosdfbla");
        nave.classList.toggle("mostrar")
    }
)

const buscar = document.getElementById("buscador");
console.log(buscar);


const bus= document.querySelector(".caja-buscar")
console.log(bus);

buscar.addEventListener("click",
    function(){
        console.log("hosdfbla");
        bus.classList.toggle("abrir")
    }
)
