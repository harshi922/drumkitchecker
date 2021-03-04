for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    this.style.color="white";
    var buttonInnerHTML=this.innerHTML;
    soundMaker(buttonInnerHTML);
    animator(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function (event){
  //console.log(event.key);
  soundMaker(event.key);
  animator(event.key);
 })

 function soundMaker(ch){
   switch (ch) {
     case "w":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;
     case "a":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;
     case "s":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;
     case "d":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;
     case "j":
     var crash = new Audio("sounds/crash.mp3");
     crash.play();
     break;
     case "k":
     var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;
     case "l":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
     break;
     default:
     break;

   }
 }

 function animator(keyPressed){
   var keyelement=document.querySelector("."+keyPressed);
   console.log(keyelement.classList.add("pressed"));
   setTimeout(function(){
     document.querySelector(keyelement.classList.remove("pressed"));
   },100)
 }
