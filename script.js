var timer = 10;
var score = 0;
var hitrn = 0;
//Event BUbbling
// jspe click karoge woh element par event raise hoga , aur event listner na milne par event element ke parent 
// apr lsitner dhundega, waha bhi na milne apr event parent ke parent pr lsitner dhundega and so on.

function increaseScore(){
    score += 10;
    document.getElementById("scorval").textContent = score;
}

function makeBubble(){
    var clutter = "";

    for(var i=1;i<=168;i++){
        var num = Math.floor(Math.random()*10);
        
        clutter += `<div class="bubble">${num}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}


function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`
        }
    },1000)
}


function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    //console.log(Number(dets.target.textContent));
    var clickedNum = Number(details.target.textContent);

    if(clickedNum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    

});

runTimer();
makeBubble();
getNewHit();














