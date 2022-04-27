const setup = () => {
    let geboortedatum = new Date(2000, 3, 3, 0, 0, 0);
    let vandaag = new Date();
    let resultaat = new Date(vandaag-geboortedatum.getTime())/ (1000 * 3600 * 24);

    console.log(resultaat)
}
window.addEventListener("load", setup);