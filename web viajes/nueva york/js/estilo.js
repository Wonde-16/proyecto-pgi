const galeria = ["./img/nueva-york/brooklyn-bridge-g027c25a62_1920.jpg", 
                 "./img/nueva-york/george-washington-bridge-g262f85914_1920.jpg", 
                 "./img/nueva-york/chinatown-g92097fcf3_1920.jpg", 
                 "./img/nueva-york/usa-g1a3785d62_1920.jpg"]

const puntero_der = document.querySelector(".pasar-der");
console.log(puntero_der)

const puntero_izq = document.querySelector(".pasar-izq");
console.log(puntero_izq)

const imagen = document.querySelector(".mod");
console.log(imagen)

var clicks = 0

puntero_der.addEventListener("click", function(){
    if (clicks == 3){
        clicks = 0}
        
    else{
        clicks =clicks+1
        imagen.style.backgroundImage = "url("+galeria[clicks]+")";}
    
    }
  
)

puntero_izq.addEventListener("click", function(){
    if (clicks == 0){
        clicks = 3}
        
    else{
        clicks =clicks-1
        imagen.style.backgroundImage = "url("+galeria[clicks]+")";}
    
    }
  
)




let gallery =document.querySelector('.x');
console.log(gallery)
let wrapped =document.querySelector('.mas-entradas');
console.log(wrapped)

let dragging = false, mouseLocation, galleryLocation;


const dragStart = e =>{
    dragging = true;
    mouseLocation = e.pageX;
    galleryLocation =  wrapped.scrollLeft;
}

const dragActive = e =>{
    if(!dragging) return;

    let offset = e.pageX - mouseLocation;
    wrapped.scrollLeft = galleryLocation - offset;
}

const dragStop = e =>{
    dragging=false;
    mouseLocation= e.pageX;
    galleryLocation= wrapped.scrollLeft;
}


gallery.addEventListener('mousedown', dragStart);
gallery.addEventListener('mousemove', dragActive);
gallery.addEventListener('mouseup', dragStop);




const im1 = document.querySelector(".im1");
console.log(im1)

const im2 = document.querySelector(".im2");
console.log(im2)

const im3 = document.querySelector(".im3");
console.log(im3)

const imagGrande = document.querySelector(".imagen-primera");
console.log(imagGrande)


im1.addEventListener("click", function(){
    const url = imagGrande.getAttribute("src")
    const url1 = im1.getAttribute("src")
    imagGrande.setAttribute("src",url1);
    im1.setAttribute("src",url);
})

im2.addEventListener("click", function(){
    const url = imagGrande.getAttribute("src")
    const url2 = im2.getAttribute("src")
    imagGrande.setAttribute("src",url2);
    im2.setAttribute("src",url);})

im3.addEventListener("click", function(){
    const url = imagGrande.getAttribute("src")
    const url3 = im3.getAttribute("src")
    imagGrande.setAttribute("src",url3);
    im3.setAttribute("src",url);
})  