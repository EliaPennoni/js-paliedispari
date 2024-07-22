// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

const userChoice = prompt('scegli pari o dispari');
console.log('userchoice', userChoice, typeof userChoice);

const userNumber = parseInt(prompt ('scegli un numero tra uno e dieci'));
console.log('usernumber', userNumber, typeof userNUmber);

const computerNumber = numberGenerator();
console.log('computerNumber', computerNumber, typeof computerNumber);

const somma = userNumber + computerNumber

// function
if(userChoice == "pari" && pariedispari() == "pari" ){
    alert('hai vinto')
}
else if(userChoice == "dispari" && pariedispari() == "dispari" ){

    alert('hai vinto')


}
else{
    alert('hai perso')
}
    


// function

function numberGenerator(){
    const num = Math.floor(Math.random() * 10 )+ 1;

    return num
}

// function

function pariedispari(){
    if( somma % 2 ==0){
        return "pari";
    }
    else {
        return"dispari"
    }

}