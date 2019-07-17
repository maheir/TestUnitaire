/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire. 
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
    //return texte1 + texte2;
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte[4];
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte === "string" ? true : false;
    if (typeof texte === "string"){
        return true;
    }
    else{
        return false;
    }
}
var AfficherExtensionString = function (texte) {
    var x = texte.split('.');
    return x[1];
    //return texte.substring(texte.lastIndexOf('.')+1);
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length -1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    array = array.map(Math.abs);
    return array;
}
var sufaceCercle = function (rayon) {
    var x = Math.PI * Math.pow(rayon,2);
    return Math.round(x);
}
var hypothenuse = function (ab, ac) {
    var x = Math.pow(ab,2) + Math.pow(ac,2);
    return Math.sqrt(x);
}
var calculIMC = function (poids, taille) {;
    var x = poids / Math.pow(taille,2);
    return Math.round(x*100) /100;
    // return Number((poids/Math.pow(taille,2)).toFixed(2));
}