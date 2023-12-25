let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "blue", "red", "green"];

document.addEventListener("keypress", function() {
   if(started == false){
    console.log("Game Started");
    started = true;
    
    levelUp();
   }
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    flash(randomBtn);
}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function checkSeq(idx){  
        if(gameSeq[idx] === userSeq[idx]){
           if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,2000);
           }     
        } else{
            h2.innerHTML = `Game Over! Your score was : <b> ${level} </b> <br> Press Any key to Restart`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            },150)
            reset();
        }
}

function btnPressed(){
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);

    userSeq.push(usercolor);
    // console.log(userSeq);
    checkSeq(userSeq.length - 1);
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}