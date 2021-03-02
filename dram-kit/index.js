var len = document.querySelectorAll("button").length;
for(var i=0;i<len;i++){
    document.querySelectorAll("button")[i].addEventListener("click" ,function(){
        var text = this.innerHTML;
        console.log(text);
        playAudio(text);
        playAnimation(text);
    })
}


    document.addEventListener('keypress',function(event){
    var text1 = event.key;
    var text = text1.toUpperCase();
      document.querySelector("p").innerHTML="you have pressed: "+ text;
        playAnimation(text);
        playAudio(text);

    }
    
    )

function playAudio(text){
    switch(text){
        case "A":
            var audio = new Audio("sounds/music1.mp3");
            audio.play();
            break;

         case "S":
             var audio = new Audio("sounds/music2.mp3");
             audio.play();
             break;

         case "D":
                var audio = new Audio("sounds/music3.mp3");
                 audio.play();
                break;
         case "F":
                    var audio = new Audio("sounds/music1.mp3");
                    audio.play();
                    break;
        
          case "G":
                     var audio = new Audio("sounds/music2.mp3");
                     audio.play();
                     break;
        
           case "H":
                        var audio = new Audio("sounds/music3.mp3");
                         audio.play();
                        break;

            case "J":
                            var audio = new Audio("sounds/music1.mp3");
                            audio.play();
                            break;
                
             case "K":
                             var audio = new Audio("sounds/music2.mp3");
                             audio.play();
                             break;
                
             case "L":
                                var audio = new Audio("sounds/music3.mp3");
                                 audio.play();
                                break;
    }
}

function playAnimation(text){
    var select = document.querySelector("."+text);
    select.classList.add("anim") ;

    setTimeout(function(){
        select.classList.remove("anim")
    },1000);
}
 


