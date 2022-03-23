const setup = () => {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", tri)
}
const tri = () => {
    let txt = document.getElementById("text");
    for(let index = 0; index < txt.value.length ; index ++){
        if(txt.value.slice(index, index + 3).length === 3) {
            console.log(txt.value.slice(index, index + 3));
        }
    }
}
window.addEventListener("load", setup);