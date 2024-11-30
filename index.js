/*let chien =
{
    race: 'chiba',
    poil: 'Court',
    aboyer: () => {
        console.log('Whof whof ')
    }
}
chien.aboyer(); */

let magicien = {
    attaque: function () {
        console.log('Le magicien lance un sort');
    }
}


let guerrier = {
    attaque: function () {
        console.log('Le guerrier lance son épée');
    }
}

magicien.attaque();
guerrier.attaque();
