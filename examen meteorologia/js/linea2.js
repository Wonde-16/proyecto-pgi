const secciones = document.querySelectorAll("section");
console.log(secciones);


tamaños=["5vw", "3vw", "7vw"]

window.addEventListener("scroll",function(){

    const alturaPantalla = window.innerHeight;
    // console.log ("altura pantalla: " +window.innerHeight);

    var contador = 0

    secciones.forEach(seccion => {

        const  lineaDentro  = seccion.querySelector(".lineaDentro");
        let al1 = lineaDentro.getBoundingClientRect();
        // console.log("TOP s1: "+al1.top);
        
        if(al1.top <= alturaPantalla && al1.top >=0){
           
            lineaDentro.style.width = tamaños[contador] 
            contador = contador + 1 
        }
        else{
            lineaDentro.style.width = "0%" 
        
        }
    })
}) 