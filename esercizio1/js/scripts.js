console.log('js connected')

// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('inserisci una parola');
console.log('userword', userWord.length, typeof userWord);

checkPalindrome(userWord)

function checkPalindrome(Word){
    let reverseWord = '';
for(let i = Word.length -1; i >= 0 ; i--){
    console.log(Word[i])
    reverseWord = reverseWord + Word[i]
}
console.log('reverseWord', reverseWord.length, typeof reverseWord);


if(reverseWord == Word){
    alert( 'la parola e palindroma')
}
else{
    alert( 'la parola non e palindroma')
}
}