const modalD = document.getElementById("targeta");
const cora = document.querySelector(".cora");

modalD.addEventListener("click", 
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