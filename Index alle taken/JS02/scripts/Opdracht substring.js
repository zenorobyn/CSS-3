const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnSubstring = document.getElementById("btnSubstring")
    btnSubstring.addEventListener("click",substring)
}
const substring = () =>{
    let txtInput = document.getElementById("txtInput");
    let startIndex = document.getElementById("startIndex");
    let endIndex = document.getElementById("endIndex");
    let output = document.getElementById("txtOutput")
    let text = txtInput.value.substring(startIndex.value,endIndex.value);

    output.innerHTML = text;
}

window.addEventListener("load", setup);