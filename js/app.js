console.log('Pali & Dispari')

// // Funzione che restituisce la stringa data invertita
// function reverseString (string) {
//     if (typeof(string) !== 'string') {
//         console.error('reverseString bad value type')
//         return
//     }

//     let reversedString = ''
//     for(let i = 0; i < string.length; i++) {
//         reversedString = string[i] + reversedString
//     }

//     return reversedString
// }

// // Funzione che controlla se la parola inserita in input è palindroma e restituisce true o false
// function isPalindrome (word) {
//     // Controllo se il valore inserito è una stringa
//     if (typeof(word) !== 'string') {
//         console.error('isPalindrome bad value type')
//         return
//     }

//     word = word.toLowerCase()
//     let reversedWord = reverseString(word)
    
//     for(let i = 0; i < word.length; i++) {
//         if (word[i] !== reversedWord[i]) {
//             return false
//         }
//     }

//     return true
// }

// Genero un numero random tra 1 e 5 e lo restituisce
function getRandomInt1to5() {
    return Math.floor((Math.random() * 5) + 1)
}

// Controlla se il numero passato è pari e restituisce un boolean
function isEven(number) {
    const checkEven = number % 2 === 0

    if (checkEven) {
        return true
    }

    return false
}

// // Main code

// // Chiedo una stringa in input dall'utente e la converto in una stringa
// const userString = String((prompt('Inserisci una parola!')))
// let message = 'La parola inserita non è palindroma'

// // Controllo se la stringa è palindroma e modifico il messaggio in base alla risposta data dalla funzione isPalindrome
// if (isPalindrome(userString)) {
//     messange = 'La parola inserita è palindroma'
// }

// // Stampo il messaggio
// console.log(message)

// Selezione tramite input tra pari e dispari
const evenOrOdd = parseInt(prompt(
    `Scegli pari o dispari:
    0 = pari 
    1 = dispari`
))

// Inizializzo una variabile booleana per indicare se il player ha dato forfeit, utilizzata se inserisce dati non validi
let playerForfeit = false

// Controllo se i dati immessi, se non vanno bene mando un console error e forzo la sconfitta del giocatore
if (evenOrOdd !== 0 && evenOrOdd !== 1) {
    console.error('Valore inserito per la selezione ERRATO!')
    playerForfeit = true
}

// Chiedo in input un numero da 1 a 5
const playerNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))

// Controllo se i dati immessi, se non vanno bene mando un console error e forzo la sconfitta del giocatore
if (playerNumber < 1 || playerNumber > 5) {
    console.error('Valore inserito per il lancio ERRATO!')
    playerForfeit = true
}

console.log('Player chose: ' + playerNumber)

// Controllo se il giocatore ha scelto pari o dispari
const playerEven = evenOrOdd === 0

// Genero il tiro del Bot
const botNumber = getRandomInt1to5()
console.log('Bot chose: ' + botNumber)

// Messaggio di default
let message = 'Bot wins!'

// Inizializzo e stampo la somma dei numeri del giocatore e del bot
const result = playerNumber + botNumber
console.log(result)

// Controllo se la variabile di perdita forzata è vera o falsa, se è falsa controllo se il numero del risultato e la selezione del giocatore sono entrambi pari o entrambi dispari
if (playerForfeit === true) {
    message = 'Player forfeited: ' + message
} else if (playerEven && isEven(result) || !playerEven && !isEven(result)) {
    message = 'Player wins'
}

console.log(message)