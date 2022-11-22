


const icono_burger = document.getElementById("burger");

// console.log(icono_burger);

icono_burger.addEventListener("click", 
      function(){

      const menu = document.querySelector(".menu");

      // console.log(menu.classList);

      // menu.classList.add("nuevo")
      // menu.classList.remove("menu")

      // console.log(menu.classList);


      //  console.log(menu.classList.contains("nuevo"));

      if (menu.classList.contains("nuevo") == true){
        menu.classList.remove("nuevo")
        menu.classList.add("menu")
      }
      else if (menu.classList.contains("menu") == true){
          menu.classList.remove("menu")
          menu.classList.add("nuevo")
      }

      // div.classList.replace("ocultar", "mostrar");    
      // div.classList.replace("mostrar", "ocultar"); 
    });