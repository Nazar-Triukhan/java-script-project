// ---------------- board ----------------
let board, context;
const boardWidth = 750;
const boardHeight = 250;

// ---------------- dino ----------------
const dinoWidth = 88;
const dinoHeight = 94;
const dinoX = 50;
const dinoY = boardHeight - dinoHeight;

const dinoImg = new Image();
const dinoDeadImg = new Image();

let dino = { x: dinoX, y: dinoY, width: dinoWidth, height: dinoHeight };

// ---------------- cactus ----------------
let cactusArray = [];
const cactus1Width = 34;
const cactus2Width = 69;
const cactus3Width = 102;
const cactusHeight = 70;
const cactusX = 700;
const cactusY = boardHeight - cactusHeight;

const cactus1Img = new Image();
const cactus2Img = new Image();
const cactus3Img = new Image();

// ---------------- physics ----------------
let velocityX = -8;
let velocityY = 0;
const gravity = 0.4;

let gameOver = false;
let gameStarted = false;
let score = 0;

let liRef;

// ---------------- window onload ----------------
window.onload = function () {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    // рекорди
    liRef = document.querySelectorAll(".record");
    const records = JSON.parse(localStorage.getItem("dinoRecords")) || [0,0,0];
    liRef.forEach((li,i) => li.innerText = `${i+1}: ${records[i]}`);

    // картинки (відносні шляхи для GitHub Pages)
    const imagesToLoad = [
        {img: dinoImg, src: "./img/dino.png"},
        {img: dinoDeadImg, src: "./img/dino-dead.png"},
        {img: cactus1Img, src: "./img/cactus1.png"},
        {img: cactus2Img, src: "./img/cactus2.png"},
        {img: cactus3Img, src: "./img/cactus3.png"}
    ];

    let loadedImages = 0;
    imagesToLoad.forEach(item => {
        item.img.src = item.src;
        item.img.onload = () => {
            loadedImages++;
            if (loadedImages === imagesToLoad.length) {
                // старт гри після завантаження всіх картинок
                requestAnimationFrame(update);
                setInterval(placeCactus, 1000);
            }
        };
        item.img.onerror = () => console.error("Не вдалося завантажити картинку:", item.src);
    });

    document.addEventListener("keydown", e => {
        if (["Space","ArrowUp"].includes(e.code)) e.preventDefault();
        if (!gameStarted && (e.code==="Space" || e.code==="ArrowUp")) { 
            gameStarted=true; 
            velocityY=-10; 
            return; 
        }
        if (gameOver && e.code==="Space") location.reload();
        moveDino(e);
    });
};

// ---------------- update ----------------
function update() {
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

    if (!gameStarted) {
        if (dinoImg.complete) context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
        context.fillStyle = "black";
        context.font = "20px courier";
        context.fillText("Press Space to Start", 230, 120);
        return;
    }

    if (gameOver) return;

    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);
    if (dinoImg.complete) context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    cactusArray.forEach(cactus => {
        cactus.x += velocityX;
        if (cactus.img && cactus.img.complete) context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
        if (!gameOver && detectCollision(dino,cactus)) endGame();
    });

    context.fillStyle = "black";
    context.font = "20px courier";
    context.fillText(score,5,20);
    if (!gameOver) score++;
}

// ---------------- moveDino ----------------
function moveDino(e){
    if (gameOver) return;
    if ((e.code==="Space"||e.code==="ArrowUp") && dino.y===dinoY) velocityY=-10;
}

// ---------------- placeCactus ----------------
function placeCactus(){
    if (gameOver||!gameStarted) return;

    let cactus={img:null,x:cactusX,y:cactusY,width:null,height:cactusHeight};
    const chance=Math.random();
    if(chance>0.9){cactus.img=cactus3Img;cactus.width=cactus3Width;}
    else if(chance>0.7){cactus.img=cactus2Img;cactus.width=cactus2Width;}
    else if(chance>0.5){cactus.img=cactus1Img;cactus.width=cactus1Width;}
    else return;

    cactusArray.push(cactus);
    if(cactusArray.length>5) cactusArray.shift();
}

// ---------------- detectCollision ----------------
function detectCollision(a,b){
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

// ---------------- endGame ----------------
function endGame(){
    gameOver=true;

    context.clearRect(0,0,board.width,board.height);
    if(dinoDeadImg.complete) context.drawImage(dinoDeadImg,dino.x,dino.y,dino.width,dino.height);
    cactusArray.forEach(cactus=>{
        if(cactus.img && cactus.img.complete) context.drawImage(cactus.img,cactus.x,cactus.y,cactus.width,cactus.height);
    });

    context.fillStyle="black";
    context.font="20px courier";
    context.fillText(score,5,20);

    setTimeout(()=>{
        alert("Game Over! Your score: "+score);
        let records=JSON.parse(localStorage.getItem("dinoRecords"))||[0,0,0];
        records.push(score);
        records.sort((a,b)=>b-a);
        records=records.slice(0,3);
        localStorage.setItem("dinoRecords",JSON.stringify(records));
        liRef.forEach((li,i)=>li.innerText=`${i+1}: ${records[i]}`);
    },50);
}
