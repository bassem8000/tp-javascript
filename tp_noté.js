function tableauPairImpair(list) {
    let list_pair = [];
    let list_impair = [];
    for (let i = 0; i < list.length; i++){
        if (list[i] % 2 === 0) {
            list_pair.push(list[i]);
        }
        else {
            list_impair.push(list[i]);
        }
    }
    console.log(list_pair);
    console.log(list_impair);
}


const voiture1 = {
marque: "Renault",
modele: "Clio",
prix: 13000
};
const voiture2 = {
marque: "Renault",
modele: "Megane",
prix: 18000
};

function comparaisonVoiture(voiture1, voiture2) {
    if (voiture1.prix > voiture2.prix) {
        return ("Voiture la plus chère : " + voiture1.marque + " " + voiture1.modele);
    }
    else if (voiture1.prix < voiture2.prix) {
        return ("Voiture la plus chère : " + voiture2.marque + " " + voiture2.modele);
    }
    else {
        return ("meme prix");
    }
} 


const tableau50 = [
523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
12, 345, 678, 234, 567, 89, 90, 123, 456, 789
];

function plusGrand(list) {
    let resultat = 0;
    for (let i = 0; i < list.length; i++){
        if (list[i] > resultat) {
            resultat = list[i];
        }
    }
    return resultat;
}

function multipleSix(list) {
    let resultat = [];
    for (let i = 0; i < list.length; i++){
        if (list[i] % 6 === 0) {
            resultat.push(list[i]);
        }
    }
    return resultat;
}


function multipleN(list,n) {
    let resultat = [];
    for (let i = 0; i < list.length; i++){
        if (list[i] % n === 0) {
            resultat.push(list[i]);
        }
    }
    return resultat;
}

function censureVoyelles(str) {
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    let mot = str.toLowerCase();
    let resultat = "";
    for (let i = 0; i < str.length; i++){
        lettre = mot[i];
        if (voyelles.includes(lettre)) {
            resultat += "*"
        }
        else {
            resultat += lettre;
        }
    }
    return resultat;
}


let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
]



function censureVoyellesRand(str) {
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    let mot = str.toLowerCase();
    let resultat = "";
    for (let i = 0; i < str.length; i++){
        lettre = mot[i];
        if (voyelles.includes(lettre)) {
            let numRand = Math.floor(Math.random() * (25 - 0 + 1)) + 0
            let lettreRand = alphabet[numRand]
            resultat += lettreRand
        }
        else {
            resultat += lettre;
        }
    }
    return resultat;
}


function vigenere(str, str2) {
    let message = str.toUpperCase();
    let cle = str2.toUpperCase();
    let resultat = "";
    let test = 0;

    for (let i = 0; i < message.length; i++){
        pos1 = chiffrement(message[i]);
        pos2 = chiffrement(cle[test]);
        if (test === cle.length - 1) {
            test -= cle.length;
        }
        test += 1
        if (pos1 === -1 || pos2 === -1) {
            resultat += message[i];
        }
        else {
            let chiffre = (pos1 + pos2) % 26
            resultat += alphabet[chiffre];
        }

    }
    return resultat;
    
}


function vigenereDechiffrement(str, str2) {
    let message = str.toUpperCase();
    let cle = str2.toUpperCase();
    let resultat = "";
    let test = 0;

    for (let i = 0; i < message.length; i++){
        pos1 = chiffrement(message[i]);
        pos2 = chiffrement(cle[test]);
        if (test === cle.length - 1) {
            test -= cle.length;
        }
        test += 1
        if (pos1 === -1 || pos2 === -1) {
            resultat += message[i];
        }
        else {
            let chiffre = (pos1 - pos2) % 26
            resultat += alphabet[chiffre];
        }

    }
    return resultat;
    
}



function chiffrement(l) {
    lettre = l.toLowerCase();
    for (let i = 0; i < alphabet.length; i++){
        if (lettre === alphabet[i]) {
            return i;
        }
        else if (!alphabet.includes(lettre)) {
            return -1;
        }
    }
    
}