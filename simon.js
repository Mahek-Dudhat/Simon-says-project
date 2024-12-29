let gameSeq = [];

let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;
let score = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", () => {

    if (start == false) {
        console.log("game started..");

        start = true;

        levelUp();
    }


})

function gameFlash(btn) {

    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);


}

function userFlash(btn) {

    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);

    let uColor = btn.getAttribute("id");

    userSeq.push(uColor);

}


function levelUp() {

    userSeq = [];
    level++;
    score++;

    h2.innerText = `Level ${level}`;

    let rndIdx = Math.floor(Math.random() * 3);

    let rndColor = btns[rndIdx];

    let rndBtn = document.querySelector(`.${rndColor}`);

    // console.log(rndIdx);
    // console.log(rndColor);
    // console.log(rndBtn);

    gameSeq.push(rndColor);
    console.log(gameSeq);

    gameFlash(rndBtn);

}

function checkAns(ind) {



    if (userSeq[ind] === gameSeq[ind]) {

        //   console.log("curr level:",level);

        if (userSeq.length == gameSeq.length) {

            setTimeout(levelUp, 1000);
            console.log(userSeq);

        }
    } else {

        h2.innerHTML = `Game Over! Better Luck Next Time,<b>Your Score is ${level}</b> <br /> Press Any Key For Start`;

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {

            document.querySelector("body").style.backgroundColor = "white";

        }, 200);

        highScore(score);

        reset();
    }
}

function highScore(score) {

    let h3 = document.createElement("h3");
    h3.innerText = `Your Highest Score is: ${score}`;

    let scoreDiv = document.querySelector(".score");

    scoreDiv.appendChild(h3);

    setTimeout(function () {

        scoreDiv.removeChild(h3);

    }, 2000);


}

function btnPress() {

    btn = this;
    console.log(this);

    userFlash(btn);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {

    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;



}