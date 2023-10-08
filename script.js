var timer=60;
var score=0;
var rnn;
function makeBubble(){
    var clutter="";
for(let i=1;i<=192;i++){
    let rn=Math.floor(Math.random()*10);
    clutter += ` <div class="bubble">${rn}</div> `;
}
document.querySelector(".pbtn").innerHTML=clutter;
};
function runTime(){
    let time = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(time);
            document.querySelector(".pbtn").innerHTML=`<h2>Game Over!!! <p>Wanna Play Again?Refresh the Page....</p> </h2>`;
        } 
    }, 1000);
    
};
function newHit(){
     rnn=Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent=rnn;

}
function increaseScore(){
    score+=10;
    document.querySelector("#scorein").textContent=score;
}

document.querySelector(".pbtn").addEventListener("click",function(dets){
    
   let clickedNum=Number(dets.target.textContent);
   console.log(clickedNum);
   if(rnn == clickedNum){

       increaseScore();
       makeBubble();
       newHit();
   }

})
makeBubble();
runTime();
newHit();
// increaseScore();

