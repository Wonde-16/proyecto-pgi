const secciones = document.querySelectorAll("section");
console.log(secciones);




tamaños=["5vw", "3vw", "7vw"]

var contador = 0

window.addEventListener("scroll",function(){
    secciones.forEach(seccion => {
    
        const barra = this.document.querySelector(".lineaDentro")

        let s1 = seccion.getBoundingClientRect();
        console.log("TOP: "+s1.top);
        
            if(s1.top == "0"){
            
                barra.style.width = tamaños[contador] 
                contador = contador +1 
            }
        
    });
});



