const initialize = () => {
    let red = localStorage.getItem("red");
    let green = localStorage.getItem("green");
    let blue = localStorage.getItem("blue");

    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();

    btnSave.addEventListener("click", saveSwatch);
};

const saveSwatch = () => {
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);
    let array = [swatch]
    localStorage.setItem("swatchs", array.toString())
};

const configureSwatch = (swatch) => {
    let red = document.getElementById("sldRed").value;
    swatch.setAttribute("data-red", red);

    let green = document.getElementById("sldGreen").value;
    swatch.setAttribute("data-green", green);

    let blue = document.getElementById("sldBlue").value;
    swatch.setAttribute("data-blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const buildSwatchComponent = () => {
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    swatch.className = "swatch";
    configureSwatch(swatch);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};

const setColorPickerFromSwatch = (event) => {
    let swatch = event.target;

    let red = swatch.getAttribute("data-red");
    document.getElementById("sldRed").value = red;

    let green = swatch.getAttribute("data-green");
    document.getElementById("sldGreen").value = green;

    let blue = swatch.getAttribute("data-blue");
    document.getElementById("sldBlue").value = blue;

    update();
};

const deleteSwatch = (event) => {
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
};
const update = () => {
    let red;
    let green;
    let blue;

    red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;

    green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;

    blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue",blue);
    updateCurrentValue();
};

const updateCurrentValue = () => {
    let red = localStorage.getItem("red");
    let green = localStorage.getItem("green");
    let blue = localStorage.getItem("blue");

    console.log("Red: " + red);
    console.log("Green: " + green);
    console.log("Blue: " + blue);
}
window.addEventListener("load", initialize);