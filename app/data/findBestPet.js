const scoredPets = require("../data/petScores.js");

let bestPet = " ";

(function () {

    let absVals = [];
    let absValsArray = [];
    let absValSums = [];

    for (i = 0; i <= petScores.length; i++) {
        if (i < petScores.length) {
            absVals = [];
            for (j = 0; j <= userNumbers.length; j++) {
                if (j < userNumbers.length) {
                    (function () {
                        absVals.push(Math.abs(userNumbers[j] - petScores[i].scores[j]))
                    })();
                } else {
                    absValsArray.push(absVals)
                    console.log(absValsArray)
                }
            }
        } else {
            for (k = 0; k <= absValsArray.length; k++) {
                if (k < absValsArray.length) {
                    absValSums.push(absValsArray[k].reduce(function (acc, val) { return acc + val; }));
                    console.log(absValSums)
                } else {
                    Array.min = function (array) {
                        return Math.min.apply(Math, array);
                    };
                    var bestPetVal = Array.min(absValSums);
                    console.log(bestPetVal)
                    var bestPetIndex = absValSums.indexOf(bestPetVal);
                    console.log(bestPetIndex);
                    bestPet = petScores[bestPetIndex];
                }
            }
        }
    }
})();

console.log(bestPet)

