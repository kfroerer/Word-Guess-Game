
var words = [
    ["L", "E", "S", "L", "I", "E"],
    ["R", "O", "N"], 
    ["A", "P", "R", "I", "L"],
    ["A", "N", "D", "Y"],
    ["T", "O", "M"],
    ["J", "E", "R", "R", "Y"],
    ["D", "O", "N", "N", "A"],
    ["A", "N", "N"]
];
var wins = 0
var guessesLeft = 
var wrongLetters = 0
 

//picks name from array at random
var random = Math.floor((Math.random()*(words.length-1))); 

//word to guess will be chosen from array
var guessWord = words[random];

var letterSpaces = new Array(guessWord.length);

//letter spaces resverved with an underscore
for (var i = 0; i < letterSpaces.length; i++){
	letters[i] = "_ ";
}


function printWord () {
    for (var i = 0; i < letterSpaces.length;)
}


