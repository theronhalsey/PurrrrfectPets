// Dependencies
const pets = require("../data/getPets.js");
let bestPet = " ";
// Routes
module.exports = function (app) {

    app.get("/api/pets", function (req, res) {
        return res.json(pets);
    });

    app.post("/api/survey", function (req, res) {
        let scoredPets = [];
        let userScores = req.body.scores

        function ScoredPet(name, photo, description, scores) {
            this.name = name;
            this.photo = photo;
            this.description = description;
            this.scores = scores;
        }

        const scorePets = function (pets) {
            for (i = 0; i < pets.length; i++) {

                let name = pets[i].petfinder.pet.name.$t;
                let photo = pets[i].petfinder.pet.media.photos.photo[3].$t;
                let description = pets[i].petfinder.pet.description.$t;
                let scores = [];

                (function () {
                    if (pets[i].petfinder.pet.animal.$t === "Cat") {
                        scores.push(1);
                    } else if (pets[i].petfinder.pet.animal.$t === "Dog") {
                        scores.push(5)
                    } else {
                        scores.push(3)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.age.$t === "Young") {
                        scores.push(1);
                    } else if (pets[i].petfinder.pet.age.$t === "Adult") {
                        scores.push(5)
                    } else {
                        scores.push(3)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.sex.$t === "M") {
                        scores.push(1);
                    } else if (pets[i].petfinder.pet.sex.$t === "F") {
                        scores.push(5)
                    } else {
                        scores.push(3)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.size.$t === "S") {
                        scores.push(1);
                    } else if (pets[i].petfinder.pet.size.$t === "L") {
                        scores.push(5)
                    } else {
                        scores.push(3)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.mix.$t === "yes") {
                        scores.push(1);
                    } else if (pets[i].petfinder.pet.mix.$t === "no") {
                        scores.push(5)
                    } else {
                        scores.push(3)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.size.$t === "S") {
                        scores.push(1);
                    } else if (pets[i].petfinder.pet.size.$t === "L") {
                        scores.push(5)
                    } else {
                        scores.push(3)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.animal.$t === "Cat") {
                        scores.push(3);
                    } else if (pets[i].petfinder.pet.animal.$t === "Dog") {
                        scores.push(5)
                    } else {
                        scores.push(1)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.animal.$t === "Cat") {
                        scores.push(3);
                    } else if (pets[i].petfinder.pet.animal.$t === "Dog") {
                        scores.push(5)
                    } else {
                        scores.push(1)
                    }
                })();

                (function () {
                    if (pets[i].petfinder.pet.animal.$t === "Cat") {
                        scores.push(3);
                    } else if (pets[i].petfinder.pet.animal.$t === "Dog") {
                        scores.push(5)
                    } else {
                        scores.push(1)
                    }
                })();

                (function () {
                    scores.push(5);
                })();


                let newPet = new ScoredPet(name, photo, description, scores)
                scoredPets.push(newPet);
            }
        }

        scorePets(pets);

        (function () {

            let absVals = [];
            let absValsArray = [];
            let absValSums = [];

            for (i = 0; i <= scoredPets.length; i++) {
                if (i < scoredPets.length) {
                    absVals = [];
                    for (j = 0; j <= userScores.length; j++) {
                        if (j < userScores.length) {
                            (function () {
                                absVals.push(Math.abs(userScores[j] - scoredPets[i].scores[j]))
                            })();
                        } else {
                            absValsArray.push(absVals)
                        }
                    }
                } else {
                    for (k = 0; k <= absValsArray.length; k++) {
                        if (k < absValsArray.length) {
                            absValSums.push(absValsArray[k].reduce(function (acc, val) { return acc + val; }));
                        } else {
                            Array.min = function (array) {
                                return Math.min.apply(Math, array);
                            };
                            var bestPetVal = Array.min(absValSums);
                            var bestPetIndex = absValSums.indexOf(bestPetVal);
                            bestPet = scoredPets[bestPetIndex];


                        }
                    }
                }
            }

        })();
    });

    app.get("/api/survey", function (req, res) {
        console.log(bestPet)
        return res.json(bestPet);
    });
}