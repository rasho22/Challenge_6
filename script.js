
var score = 0;
var multi = 1;

/*//fontion + 1 en cliquant sur le cookie
function clicker() {
    score = score + multi
    document.getElementById("score").innerHTML = score;
}*/


//fontion ajout de point + le multiplicateur
function clicker() {
    score = score + multi
    document.getElementById("score").innerHTML = score;
} if (score>=10) {
    score = setInterval(onclick, 1000);
}



//fontion * 2 bouton multiplicateur, si assez de point pour le payer
function incrementer() {
    if (score >= 5) {
        multi = multi * 2;
        score = score - 5;
    document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
    document.getElementById("prix").innerHTML= "Prix " + 5 * multi;
    document.getElementById("score").innerHTML = score;
    }

    else {
        alert("Va t'acheter de l'argent !");
    }
}






