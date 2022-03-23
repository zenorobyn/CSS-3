const setup = () => {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", change)
}

const change = () => {
    let txt = document.getElementById("text").value;
    let array = txt.split(" ");
    for(let index = 0; index < array.length; index ++){
        if(array[index] === "de"){
            array[index] = "het";
        }
    }
    let tekst = "";

    for(let index = 0; index < array.length; index ++){
        tekst += array[index] + " ";
    }
    console.log(tekst.trim());
}



window.addEventListener("load", setup);