

const formulaire = document.querySelector('form');
const produit = document.getElementById('pdt');
const quantité = document.getElementById('qte');
const liste = document.getElementById('liste');
const item = document.getElementById('item')


formulaire.addEventListener('submit', (e) => {
    e.preventDefault()
    if(pdt.value && qte.value != ""){
        liste.innerHTML += `<li class="item"><input type="checkbox" class="check" >  ${pdt.value}  ${qte.value}   <select><option value="Kg(s)">Kg(s)<option><option value="L(s)">Litre(s)<option></option><option value="Unité(s)">Unité(s)<option></option></li>`
        storage();
        pdt.value = "";
        qte.value = "";

    }else{
window.alert("Veuillez entrer un produit et/ou quantité");
}
});


    
liste.addEventListener('dblclick', (e)=>{
    if(e.target.classList.contains('item')){
        e.target.remove();
    }
    storage()
});

function storage(){
    window.localStorage.liste = liste.innerHTML;
}

function getValue(){
    if(localStorage.liste != null){
        liste.innerHTML = window.localStorage.liste
    } else {
        liste.innerHTML = '<li>Start Ta liste, Dont forget mon ami, pour supprimer doubleClick, Easy of course ?</li>'
    }
}
getValue();


























































/*class Produit {
    constructor (nom, quantité) {
        this.nom = nom;
        this.quantité = quantité;
    }
}

var produit = document.getElementById("saisiepdt").innerText
   

var liste = [];
var addToList = function (){liste.push(produit)};


function ajouter() {
    document.getElementById("btn").addEventListener('click', addToList)
}
document.querySelector('maliste').innerHTML = produit */














/*function addCart() {

    if (localStorage.produit1 != null) {
        var produit1 = localStorage.produit1

    } else {
        var produit1 = prompt("entrer votre Produit 1")
        localStorage.produit1 = produit1
    }
    if(localStorage.produit2 != null){
        var produit2 = localStorage.produit2

    }else{
        var produit2 = prompt ("entrer votre Produit 2")
        localStorage.produit2 = produit2
    }

     document.querySelector('span').innerText = localStorage.produit1 + " " + localStorage.produit2
    }


document.getElementById('btn').addEventListener('click' , function(){
addCart();
} )

if (localStorage.produit1 == null && localStorage.produit2 == null){

    document.querySelector('span').innerText = 'Pas encore de produit'
}
*/
