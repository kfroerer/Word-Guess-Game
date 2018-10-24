
var wordBank =["Leslie", "Ron", "April", "Ann", "Donna", "Gerry"];
var wins = 0
var attempts = 10
var wrongGuesses = []


var compPick = function(){    
   return wordBank[Math.floor((Math.random()*wordBank.length))];
};
console.log(compPick())
var wordPick = compPick();
console.log(wordPick.split(""))
var splitWord = wordPick.split("")

for (var i = 0; i < splitWord.length; i++){
    $("#computerWord").append("_ ");
}




$(document).on("keyup", function (event){
    var userGuess = event.key;
    console.log(userGuess);
    
    if (splitWord.indexOf(userGuess) !== -1){
        console.log(splitWord.indexOf(userGuess))
        //have letter show, make a function to loop through the array of the word to check if the index = userguess,
    }else {
    $("#wrongGuesses").append(userGuess);
    }
})

// function printWord ()
//     for (var i = 0; i < letterSpaces.length;)
// }


