var rood = 0;
var groen= 0;
var blauw = 0;

const setup = () => {
    let slidersR = document.getElementsByClassName("sliderR");
    let slidersG = document.getElementsByClassName("sliderG")
    let slidersB = document.getElementsByClassName("sliderB");
    slidersR[0].addEventListener("change", updateR);
    slidersR[0].addEventListener("input", updateR);

    slidersG[0].addEventListener("change",updateG)
    slidersG[0].addEventListener("input",updateG)

    slidersB[0].addEventListener("change",updateB)
    slidersB[0].addEventListener("input",updateB)

    updateR();
    updateG();
    updateB();
}

const updateR = () => {
    let slidersR = document.getElementsByClassName("sliderR");
    let pRood = document.getElementById("pRood")
    rood=slidersR[0].value;
    pRood.innerHTML = "Rood: " + rood;
    update()
}

const updateG = () => {
    let slidersG = document.getElementsByClassName("sliderG");
    let pGroen = document.getElementById("pGroen")
    groen=slidersG[0].value;
    pGroen.innerHTML = "Groen: " + groen;
    update()
}

const updateB = () => {
    let slidersB = document.getElementsByClassName("sliderB");
    let pBlauw = document.getElementById("pBlauw");
    blauw=slidersB[0].value;
    pBlauw.innerHTML = "Blauw: " + blauw;
    update()
}

const update = () => {
    let color=document.getElementsByClassName("color");
    color[0].style.backgroundColor= "rgb("+rood+","+groen+","+blauw+")";
}

window.addEventListener("load", setup);