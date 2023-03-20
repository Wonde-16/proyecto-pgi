const textos = ["ilusión", 
                "ideas", 
                "diseños",
                "colores", 
                "proyectos" , 
                "ux/ui designer"];

console.log(textos.length-1)

const texMov = document.querySelector(".texMov");
// console.log(texMov)
// console.log(texMov.textContent)
// texMov.textContent ="hola"

var indice = 0

function cambiaTexto() {
    texMov.textContent = textos[indice%textos.length];
    // texMov.textContent ="hola"
    
    indice = indice + 1;
    setTimeout(cambiaTexto, 2000);
}

setTimeout(cambiaTexto, 2000)