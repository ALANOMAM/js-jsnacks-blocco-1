/*
Snack 1:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let primaParola = prompt("inserisci la prima parola") 
let secondaParola = prompt("inserisci la seconda parola") 

let primoOutput = document.querySelector("#first")
let secondoOutput = document.querySelector("#second")
let risultato = document.querySelector("#result")

primoOutput.innerHTML=primaParola
secondoOutput.innerHTML=secondaParola

if(primaParola.length > secondaParola.length){
 risultato.innerHTML=primaParola
}else if(primaParola.length < secondaParola.length){
    risultato.innerHTML=secondaParola
}else{
    risultato.innerHTML= "sono lunghe uguali"
}


