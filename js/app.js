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

function getRandomInt1to5() {
    return Math.floor((Math.random() * 5) + 1)
}

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

const evenOrOdd = parseInt(prompt(
    `Scegli pari o dispari:
    0 = pari 
    1 = dispari`
))

let playerLose = false

if (evenOrOdd !== 0 && evenOrOdd !== 1) {
    console.error('Valore inserito per la selezione ERRATO!')
    playerLose = true
}

const playerNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))

if (playerNumber < 1 || playerNumber > 5) {
    console.error('Valore inserito per il lancio ERRATO!')
    playerLose = true
}
console.log('Player chose: ' + playerNumber)

const playerEven = evenOrOdd === 0

const botNumber = getRandomInt1to5()
console.log('Bot chose: ' + botNumber)

let message = 'Bot wins!'

const result = playerNumber + botNumber
console.log(result)

if (playerLose === true) {
    message = 'Player forfeited: ' + message
} else if (playerEven && isEven(result) || !playerEven && !isEven(result)) {
    message = 'Player wins'
}

console.log(message)