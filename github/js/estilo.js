const tag = document.getElementById("targeta");
console.log(tag)
const cora = document.querySelector(".cora");
console.log(cora)
tag.addEventListener("click", 
      function(){

       if (cora.classList.contains("cora1") == true){
         cora.classList.remove("cora1")
         cora.classList.add("cora2")
       }
       else if (cora.classList.contains("cora2") == true){
           cora.classList.remove("cora2")
           cora.classList.add("cora1")
       }

    
     });