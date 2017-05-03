var firstButton= document.getElementById("1p");
var secButton= document.getElementById("2p");
var thirdButton= document.getElementById("reseted");
var p1score=0;
var p2score=0;
var gameon=true;
var winningscore=7;
var playto=document.getElementById("pt");
var inputv=document.getElementById("input");
inputv.addEventListener("change",function(){
  playto.textContent=this.value;
  winningscore=Number(this.value);
});

firstButton.addEventListener("click",function(){
  
  p1score++;
  if(gameon){
  document.getElementById("sc1").textContent=p1score;
  if(p1score===winningscore){
    document.getElementById("sc1").classList.add("green");
    gameon=false;
  }
  }
}) ;
secButton.addEventListener("click",function(){
	p2score++;
  if(gameon){
  document.getElementById("sc2").textContent=p2score;
    if(p2score===winningscore){
      document.getElementById("sc2").classList.add("green");
    gameon=false;
  }}});
thirdButton.addEventListener("click",function(){
	document.getElementById("sc1").textContent=0;
  document.getElementById("sc2").textContent=0;
  p1score=0;
  p2score=0;
  gameon=true;
  document.getElementById("sc1").classList.remove("green");
  document.getElementById("sc2").classList.remove("green");
  
}) ;
