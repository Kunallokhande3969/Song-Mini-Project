var left  = document.querySelector("#left")
var right  = document.querySelector("#right")
var play  =  document.querySelector("#play")
var pause = document.querySelector("#pause")
var song   = document.querySelector("audio");


 
 play.addEventListener("click" ,function(){

    song.play();

     play.style.display = "none";
     pause.style.display = "block";
 })
   pause.addEventListener("click" ,function(){
   
    song.pause(); 
    play.style.display = "block"; 
    pause.style.display = "none";  
   
 })
   left.addEventListener("dblclick" ,function(){
   
    song.currentTime = 0 ; 
     pause.style.display = "block"
     play.style.display = "none"
     song.play();
   
 })