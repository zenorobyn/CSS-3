const setup = () => {
    var divNode = document.createElement("head");
    divNode.innerHTML = "<br><style>.listitem { color: red; }</style>";
    document.body.appendChild(divNode);
    let texts=document.querySelectorAll("li");
    for(let i = 0; i<texts.length;i++ ) {
        texts[i].className ="listitem"
    }
    let img = document.createElement("img");
    img.setAttribute("src", "https://www.jaarthema.nl/2017-2018/wp-content/uploads/2017/08/mens-560x416.jpg")
    document.body.appendChild(img);
}
window.addEventListener("load", setup);