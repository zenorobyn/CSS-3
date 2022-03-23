const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", func);
}
const func = () => {
    let isRoker = document.getElementById("isRoker").value;
    if (isRoker === "on") {
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }
    let moedertaal = document.getElementsByName("Moedertaal");
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal is " + moedertaal[i].value)
        }
    }

    let favorietBuurland = document.getElementsByClassName("fav");
    for(var index = 0; index < favorietBuurland.length; index++){
        if(favorietBuurland[index].selected){
            console.log("favoriete buurland is " + favorietBuurland[index].value)
        }
    }

    var array = document.getElementsByClassName("test");
    var  bestelling = "bestelling bestaat uit: ";
    for (var i = 0; i < array.length; i++) {
        if (array[i].selected)
            bestelling += array[i].value + ", ";
    }
    console.log(bestelling.substr(0, bestelling.length-2)+".");
}
window.addEventListener("load", setup);