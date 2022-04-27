const setup = () => {
    let student=[
        {
            voornaam: 'Zeno',
            familienaam: 'Robyn',
            geboorteDatum: new Date('2000-03-03'),
            email: 'zeno.d.2000@hotmail.com',
            aantalKinderen: 20
        }
    ];

    let tekst = JSON.stringify(student);
    console.log(student)
}
window.addEventListener("load", setup);