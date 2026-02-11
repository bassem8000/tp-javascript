let creature1 = {
    nom: "",
    espece: "",
    niveauPuissance: 0,
    habitat: "",
    
};

let creature2 = {
    nom: "",
    espece: "",
    niveauPuissance: 0,
    habitat: "",
    
};

let saisieNom = prompt("Entrez le nom de la créature 1 :");
while (saisieNom === "") {
    saisieNom = prompt("Nom invalide. Entrez le nom de la créature 1 :");
}
creature1.nom = saisieNom;

let saisieEspece = prompt("Entrez l'espèce de la créature 1 :");
while (saisieEspece === "") {
    saisieEspece = prompt("Espèce invalide. Entrez l'espèce de la créature 1 :");
}
creature1.espece = saisieEspece;

let saisiePuissance = prompt("Entrez le niveau de puissance de la créature 1 (0 à 100) :");
saisiePuissance = Number(saisiePuissance);

while (isNaN(saisiePuissance) || saisiePuissance < 0 || saisiePuissance > 100) {
    saisiePuissance = Number(prompt("Valeur invalide. Entrez un nombre entre 0 et 100 :"));
}
creature1.niveauPuissance = saisiePuissance;

let saisieHabitat = prompt("Entrez l'habitat de la créature 1 :");
while (saisieHabitat === "") {
    saisieHabitat = prompt("Habitat invalide. Entrez l'habitat de la créature 1 :");
}
creature1.habitat = saisieHabitat;


let rarete1;

if (creature1.niveauPuissance >= 0 && creature1.niveauPuissance < 40) {
  rarete1 = "Commun";
} else if (creature1.niveauPuissance >= 40 && creature1.niveauPuissance < 60) {
  rarete1 = "Peu commun";
} else if (creature1.niveauPuissance >= 60 && creature1.niveauPuissance < 90) {
  rarete1 = "Rare";
} else {
  rarete1 = "Mythique";
}
creature1.rarete = rarete1;



let saisieNom2 = prompt("Entrez le nom de la créature 2 :");
while (saisieNom2 === "") {
    saisieNom2 = prompt("Nom invalide. Entrez le nom de la créature 2 :");
}
creature2.nom = saisieNom2;

let saisieEspece2 = prompt("Entrez l'espèce de la créature 2 :");
while (saisieEspece2 === "") {
    saisieEspece2 = prompt("Espèce invalide. Entrez l'espèce de la créature 2 :");
}
creature2.espece = saisieEspece2;

let saisiePuissance2 = prompt("Entrez le niveau de puissance de la créature 2 (0 à 100) :");
saisiePuissance2 = Number(saisiePuissance2);
while (isNaN(saisiePuissance2) || saisiePuissance2 < 0 || saisiePuissance2 > 100) {
    saisiePuissance2 = Number(prompt("Valeur invalide. Entrez un nombre entre 0 et 100 :"));
}
creature2.niveauPuissance = saisiePuissance2;

let saisieHabitat2 = prompt("Entrez l'habitat de la créature 2 :");
while (saisieHabitat2 === "") {
    saisieHabitat2 = prompt("Habitat invalide. Entrez l'habitat de la créature 2 :");
}
creature2.habitat = saisieHabitat2;




let rarete2;

if (creature2.niveauPuissance >= 0 && creature2.niveauPuissance < 40) {
  rarete2 = "Commun";
} else if (creature2.niveauPuissance >= 40 && creature2.niveauPuissance < 60) {
  rarete2 = "Peu commun";
} else if (creature2.niveauPuissance >= 60 && creature2.niveauPuissance < 90) {
  rarete2 = "Rare";
} else { 
  rarete2 = "Mythique";
}
creature2.rarete = rarete2;



console.log("Créature 1 : " + creature1.nom);
console.log("Espèce : " + creature1.espece);
console.log("Puissance : " + creature1.niveauPuissance);
console.log("Habitat : " + creature1.habitat);
console.log("Rareté de la créature 1 : " + creature1.rarete);

console.log("Créature 2 : " + creature2.nom);
console.log("Espèce : " + creature2.espece);
console.log("Puissance : " + creature2.niveauPuissance);
console.log("Habitat : " + creature2.habitat);
console.log("Rareté de la créature 2 : " + creature2.rarete);


if (creature1.niveauPuissance > creature2.niveauPuissance) {
    console.log(creature1.nom, "est plus fort que", creature2.nom);
} else if (creature1.niveauPuissance < creature2.niveauPuissance){
    console.log(creature2.nom, "est plus fort que", creature1.nom);
} else {
    console.log(creature1.nom, "et", creature2.nom, "ont la meme puissance");
}

if (creature1.habitat == creature2.habitat) {
    console.log("les deux créatures vivent au meme endroit :)");
} else {
    console.log("les deux créatures vivent a des endroits différents :(");
}

if (creature1.espece == creature2.espece) {
    console.log("les deux créatures sont de la meme espece :)");
} else {
    console.log("les deux créatures ne sont pas de la meme espece :(");
}

if (creature1.nom == "pikachu" || creature2.nom == "pikachu") {
    console.log("OUAAAAISSSS PIKACHUUUUUUU");
}

