const setup = () => {
    console.log("loaded");
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startGame);
};

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX:"images/",
    IMAGE_PATH_SUFFIX:".pgn",

    MOVE_DELAY: 3000,
    score: 0,
    timeoutID: 0
};

const startGame = () => {

    console.log("startgame");
    document.getElementById("btnStart").style.display = "none";

    let target = document.getElementById("target");
    target.addEventListener("click", klik);

    move();
};

const klik = (ev) => {
    console.log(ev.target);
    if (ev.target.className.indexOf("bom") != -1) {
        // bom
        gameOver();
    } else {
        // geen bom
        hit();
    }
}

const move = () => {
    let target = document.getElementById("target");
    let speelScherm = document.getElementById("playField");
    let maxLeft = speelScherm.clientWidth - global.IMAGE_SIZE;
    let maxTop = speelScherm.clientHeight - global.IMAGE_SIZE;
    let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);

    if (nummer == 0) {
        // bom
        target.className = "bom";
    } else {
        target.className = "";
    }
    target.setAttribute("src", global.IMAGE_PATH_PREFIX
        + nummer + global.IMAGE_PATH_SUFFIX);

    target.style.left = Math.floor(Math.random() * maxLeft) + "px";
    target.style.top = Math.floor(Math.random() * maxTop) + "px";

    global.timeoutId = setTimeout(move, global.MOVE_DELAY);
};

const gameOver = () => {
    clearTimeout(global.timeoutID);
    alert ("GAME OVER");
};

const hit = () => {
    let scoreSpans = document.getElementsByClassName("score");
    let i = 0;

    clearTimeout(global.timeoutID);
    global.score++;
    for (i = 0; i < scoreSpans.length; i++) {
        scoreSpans[i].innerText = global.score;
    }
    move();
}
window.addEventListener("load", setup);