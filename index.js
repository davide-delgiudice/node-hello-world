console.log("Hello Boolean");

// const newPhrase = require('./phrase');

// console.log(newPhrase("Quanto è bello Dragon Age?"));

const newPhrase = require('./phrase')

const phrase = process.argv[2] ? process.argv[2] : "Inserisci una frase";

console.log(newPhrase(phrase));