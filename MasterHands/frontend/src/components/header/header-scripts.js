    
    
    setTimeout( () => {
        var menu  = document.querySelector(".menu__box");
        console.log(menu)
    
        if(menu.style.visibility == "visible") {
            document.getElementsByTagName("body")[0].style.position = "fixed";
        }
        else{   if(menu.style.visibility == "hidden"){
            document.getElementsByTagName("body")[0].style.overflow = "static";
        }
        }
    }, 3000)
    

  
        

