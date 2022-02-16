const familieleden = ['Zeno','Brent', 'Maxime', 'Berre', 'Joshua'];
console.log(familieleden.length);
console.log(familieleden[0], familieleden[2], familieleden[4]);

const voegNaamToe = () => {
    let resultaat = window.prompt();
    familieleden.push(resultaat);
}
familieleden.join();


