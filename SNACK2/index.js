/*
Snack 2:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let numbers =[];
let sum =0;
for(let i=0 ; i<10 ; i++){
 let number= Number(prompt("inserisci un numero"))
  numbers.push(number) 
  sum = sum+numbers[i]
}

console.log(sum)


