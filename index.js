console.log("Hello Boolean");

// const newPhrase = require('./phrase');

// console.log(newPhrase("Quanto è bello Dragon Age?"));

const newPhrase = require('./phrase')

const phrase = process.argv[2];

console.log(newPhrase(phrase));