function isListEven(list) {
    let check = true;
    for (let i = 0; i < list.length; i++){
        if (list[i] % 2 !== 0){
            check = false;
        }
    }
    return check
}

function initTable(n, m) {
    
    let mat = [];
    
    for (let i = 0; i < n; i++){
        let li = [];
    
        for (let j = 0; j < m; j++){
            li.push(0);
        }
    
        mat.push(li);
    }
    return mat;
}

function distanceOfTarget(target, value) {

    let dist = Math.abs(value - target);
    if (dist > (target * 0.1)) {
        return "is far"
    }
    return "is not far"
}

function hideVoyels(str) {
    let voyels = ["a", "e", "i", "o", "u", "y"];
    let resultat = "";
    for (let i = 0; i < str.length; i++) {
        let lettre = str[i]
        if (voyels.includes(lettre)) {
            resultat += "*";
        }
        else {
            resultat += lettre;
        }
        
    }
    return resultat
}

function rockPaperScissors(p1, p2) {
    if (p1 === p2) {
        return "égalité";
    }
    if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock")) {
        return "player 1 won";
        
    }
    return "player 2 won";
}


function BonneNote(note) {
    if (note > 20 || note < 0) {
        return false;
    }
    else if (note > 14) {
        return "Bonne note";
    }
    return "Note normale";
}

function inverseBool(bool) {
    return !bool;
}

function trouveIndex(list, n) {
    for (let i = 0; i < list.length; i++){
        if (list[i] === n) {
            return i;
        }   
    }  
}

function supprimeDoublons(list) {
    resultat = [];
    for (let i = 0; i < list.length; i++){
        if (!resultat.includes(list[i])) {
            resultat.push(list[i])
        }
    }
    return resultat
}

function premierElement(list) {
    if (list.length === 0) {
        return false
    }
    return list[0]
}

function dernierElement(list) {
    if (list.length === 0) {
        return 0
    }
    return list[list.length-1]
}

function additionListe(list) {
    if (list.length === 0) {
        return 0
    }
    let resultat = 0;
    for (let i = 0; i < list.length; i++){
        resultat += list[i]
    }
    return resultat
}

function elementSelonBool(list, bool) {
    if (list.length === 0) {
        return false
    }
    else if (bool) {
        return list[0]
    }
    else {
        return list[list.length-1]
    }
    
}

function inverserListe(list) {
    let resultat = []; // on initialise une liste vide 
    for (let i = 1; i <= list.length; i++){
        resultat.push(list[list.length - i]); // pour chaque element de la liste on ajoute le dernier élément dans la variable résultat

    }
    return resultat; // renvoie la liste inversée :)
}

function filtreNombre(list) {
    let resultat = [];
    for (let i = 0; i < list.length; i++){
        if (list[i] % 3 == 0) {
            resultat.push(list[i]);
        }
    }
    return resultat;
}

function moyenneListe(list) {
    let somme = 0;
    for (let i = 0; i < list.length; i++){
        somme += list[i];
    }
    let moyenne = somme / list.length;
    return moyenne;
}


let list = [
{ prenom: "Alice", notes: [19, 17.5, 12.5, 13.2, 18.5] },
{ prenom: "Bob", notes: [14, 11, 16, 18, 15] },
{ prenom: "Charlie", notes: [9, 10.5, 12, 8.5, 11] }
]



function moyenneEleves(list) {
    for (let i = 0; i < list.length; i++){
        print (list[i].prenom + " a une note de : " + moyenneListe(list[i].notes));    
    }
}





function nombreOccurences(list, n) {
    let resultat = 0;
    for (let i = 0; i < list.length; i++){
        if (n === list[i]) {
            resultat += 1;
        }
    }
    return (resultat + " occurences");
}