    
    
   window.onload = function(){
        var body  = document.querySelector("body");
        var menu  = document.getElementById("menu__toggle");
        var burg  = document.querySelector(".menu__btn span");
        var show  = document.getElementById("show-more");
        var arrow = document.getElementById("show-more");
        
        menu.addEventListener('change', () => {
            if(menu.checked){
                body.style.overflow = "hidden";
            } else {
                body.style.overflow = "";
            }
        })

        document.addEventListener('scroll', () =>{
            if ( window.scrollY > 60){
                     burg.style.background = "#0F0F0F";
                 } else {
                    burg.style.background = "white";
                 }
        })

        show.addEventListener('click', function(e){
            var visible = document.querySelectorAll(".speciality__works .visible");
            arrow.classList.toggle('show-more__active');
            visible.forEach(function(v) {
                v.style.display = v.style.display === 'block' ? 'none' : 'block';
            });
           
        })
        
    }
    

  
        

