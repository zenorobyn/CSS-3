const setup = () => {
    let berekenTotaal=document.getElementById("btn");
    berekenTotaal.addEventListener("click",bereken);
}

const bereken = () => {
    //product 1
    let aantal1=document.getElementById("aantal1").value;
    let prijs1=document.getElementById("prijs1").textContent;
    let btw1=document.getElementById("btw1").textContent;
    let sb1=document.getElementById("sb_product1");

    //product 2
    let aantal2=document.getElementById("aantal2").value;
    let prijs2=document.getElementById("prijs2").textContent;
    let btw2=document.getElementById("btw2").textContent;
    let sb2=document.getElementById("sb_product2");

    //product 3
    let aantal3=document.getElementById("aantal3").value;
    let prijs3=document.getElementById("prijs3").textContent;
    let btw3=document.getElementById("btw3").textContent;
    let sb3=document.getElementById("sb_product3");
    //tussen 1
    let sb1value = Math.round(aantal1*prijs1.split(" ")[0]*(1-btw1.split("%")[0]/100)*100)/100;
    sb1.innerHTML= sb1value;
    //tussen 2
    let sb2value = Math.round(aantal2*prijs2.split(" ")[0]*(1-btw2.split("%")[0]/100)*100)/100;
    sb2.innerHTML= sb2value;
    //tussen 3
    let sb3value = Math.round(aantal3*prijs3.split(" ")[0]*(1-btw3.split("%")[0]/100)*100)/100;
    sb3.innerHTML= sb3value;
    //grote totaal
    let tot = sb1value + sb2value + sb3value;
    let totaal = document.getElementById("totaal");
    totaal.innerHTML = tot;
}
window.addEventListener("load", setup);