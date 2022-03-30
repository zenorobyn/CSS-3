const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("button");
    button.addEventListener("click", save);
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update)
    }
}

const update =() => {
    let red= document.getElementById("sldRed").value;
    let green=document.getElementById("sldGreen").value;
    let blue=document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
    let swatch=document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

const save = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    let div = document.createElement("div");
    let button = document.createElement("button");
    button.setAttribute("class", "button")
    document.getElementsByClassName("button").value = "X";
    div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    div.setAttribute("class", "swatch");
    let mainDiv = document.querySelector(".resultaat");

    div.appendChild(button);
    mainDiv.appendChild(div);
}

const remove = () =>{
    let divs = document.getElementsByClassName("swatch");
    divs[0].setAttribute("class","none")
}
window.addEventListener("load", initialize);