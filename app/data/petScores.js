// Dependencies
const pets = require("./getPets.js");

let scoredPets = [];

function ScoredPet(name, photo, description, scores) {
    this.name = name;
    this.photo = photo;
    this.description = description;
    this.scores = scores;
};

const scorePets = function () {

    for (i = 0; i < pets.length; i++) {

        let name = pets[i].petfinder.pet.name.$t;
        let photo = pets[i].petfinder.pet.media.photos.photo[4].$t;
        let description = pets[i].petfinder.pet.description;
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
            if (pets[i].petfinder.pet.age.$t === "Baby") {
                scores.push(1);
            } else if (pets[i].petfinder.pet.age.$t === "Young") {
                scores.push(3)
            } else {
                scores.push(5)
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
    console.log(scoredPets)
}

module.exports = scorePets;