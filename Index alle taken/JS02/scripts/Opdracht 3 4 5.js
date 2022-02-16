const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button=document.getElementById("button");
    button.addEventListener("click",click)
}

const click = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);