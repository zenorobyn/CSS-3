const test = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let count = 0;
    let i = tekst.indexOf("an")
    while(i>0 && i<tekst.length) {
        i = tekst.indexOf("an",1);
        count++
    }
    console.log(count);
}
window.addEventListener("load", setup);