const setup = () => {
    let btnSubmit=document.getElementById("sub");
    btnSubmit.addEventListener("click", btn)
}
const btn = () =>{
    let tekst = document.getElementById("text").value;
    console.log("Origineel:" + tekst);
    console.log("Zonder spaties: " + tekst.replace(/\s/g, ""));
}

const maakMetSpaties=(inputText)=>{
    let restl = "";
    for(let i = 0; i < inputText.length; i++){
        restl +=inputText[i] + " ";
    }
    console.log("Alle karakters afzonderlijk :" + restl.trim());
    return restl;
}
window.addEventListener("load", setup);

