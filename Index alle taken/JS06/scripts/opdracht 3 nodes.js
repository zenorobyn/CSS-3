const setup = () => {
    let p = document.createElement("p");
    p.innerHTML += "tekst";
    let div = document.querySelector("#myDIV");
    div.appendChild(p);
}
window.addEventListener("load", setup);