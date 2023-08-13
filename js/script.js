let timer = 60;

let score = 0;

let hitrn = 0;

function incraseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent  = hitrn;
}

function makeBubble(){
    
let cutler = "";


for (let i = 0; i <= 168; i++){

      let count = Math.floor(Math.random()*10);
       
     cutler += `<div class="bubble"> ${count} </div>`;
};


document.querySelector("#pbtm").innerHTML = cutler ;
};


function runTimer(){
  let timerInt = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
    }
    else{
        clearInterval("timerInt");
        
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        document.querySelector("h1").style.fontSize = " 70px"
        document.querySelector("h1") .style.textTransform = "uppercase";
    }
   }, 1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function (dets){
    let clickNum = Number (dets.target.textContent);
    if(clickNum === hitrn){
        incraseScore();
        makeBubble();
        getNewHit(); 
    }
})

runTimer();
makeBubble();
getNewHit();
