
var len=document.querySelectorAll(".drum").length;


for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var key=this.innerHTML;
        handleclick(key);
        buttonAnimation(key);
    });

}
document.addEventListener("keydown",function(event)
 { 
    handleclick(event.key);
    buttonAnimation(event.key);
 });

function handleclick(key)
{
    //var buttonInnerHtml=this.innerHTML;
        switch (key) {
          case "w":
             var tom1=new Audio("./sounds/tom-1.mp3");
              tom1.play(); 
              break;
        case "a":
             var tom2=new Audio("./sounds/tom-2.mp3");
              tom2.play(); 
              break;
        case "s":
             var tom3=new Audio("./sounds/tom-4.mp3");
              tom3.play(); 
              break;
       case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
              tom4.play(); 
              break;
       case "j":
            var  snare=new Audio("./sounds/snare.mp3");
             snare.play(); 
              break;
      case "k":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play(); 
              break;
       case "l":
            var crash=new Audio("./sounds/crash.mp3");
              crash.play(); 
              break;
          default:
            alert("Wrong key!");
              break;
        }
    }
function buttonAnimation(currentkey)
{
  var but =  document.querySelector("."+currentkey);
  but.classList.add("pressed");
  setTimeout(function()
  {
    but.classList.remove("pressed");
  }, 100);
}
   
 




//var audio=new Audio("./sounds/crash.mp3");
//audio.play(); 