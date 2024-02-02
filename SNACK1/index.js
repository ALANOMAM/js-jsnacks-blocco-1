/*
Snack 1:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let primaParola = "andy" 
let secondaParola = "alan"

if(primaParola.length > secondaParola.length){
  console.log(primaParola)
}else if(primaParola.length < secondaParola.length){
    console.log(secondaParola)
}else{
    console.log("sono lunghe uguali")
}