// Dependencies
const pets = require("./getPets.js");
console.log("Loaded")

let scoredPets = [];

function ScoredPet(name, photo, description, scores) {
    this.name = name;
    this.photo = photo;
    this.description = description;
    this.scores = scores;
}

function getScores() {

    let scores = [];

    (function () {
        if (petfinder.pet.animal.$t === "Cat") {
            scores.push(1);
        } else if (petfinder.pet.animal.$t === "Dog") {
            scores.push(5)
        } else {
            scores.push(3)
        }
    })();

    (function () {
        if (petfinder.pet.age.$t === "Young") {
            scores.push(1);
        } else if (petfinder.pet.age.$t === "Adult") {
            scores.push(5)
        } else {
            scores.push(3)
        }
    })();

    (function () {
        if (petfinder.pet.sex.$t === "M") {
            scores.push(1);
        } else if (petfinder.pet.sex.$t === "F") {
            scores.push(5)
        } else {
            scores.push(3)
        }
    })();

    (function () {
        if (petfinder.pet.size.$t === "S") {
            scores.push(1);
        } else if (petfinder.pet.size.$t === "L") {
            scores.push(5)
        } else {
            scores.push(3)
        }
    })();

    (function () {
        if (petfinder.pet.mix.$t === "yes") {
            scores.push(1);
        } else if (petfinder.pet.mix.$t === "no") {
            scores.push(5)
        } else {
            scores.push(3)
        }
    })();

    (function () {
        if (petfinder.pet.size.$t === "S") {
            scores.push(1);
        } else if (petfinder.pet.size.$t === "L") {
            scores.push(5)
        } else {
            scores.push(3)
        }
    })();

    (function () {
        if (petfinder.pet.animal.$t === "Cat") {
            scores.push(3);
        } else if (petfinder.pet.animal.$t === "Dog") {
            scores.push(5)
        } else {
            scores.push(1)
        }
    })();

    (function () {
        if (petfinder.pet.animal.$t === "Cat") {
            scores.push(3);
        } else if (petfinder.pet.animal.$t === "Dog") {
            scores.push(5)
        } else {
            scores.push(1)
        }
    })();

    (function () {
        if (petfinder.pet.animal.$t === "Cat") {
            scores.push(3);
        } else if (petfinder.pet.animal.$t === "Dog") {
            scores.push(5)
        } else {
            scores.push(1)
        }
    })();

    (function () {
        scores.push(3);
    })();

}

(function () {
    pets.forEach(function () {

        let name = petfinder.pet.name.$t;
        let photo = petfinder.pet.media.photos.photo[4].$t;
        let description = petfinder.pet.description;
        getScores().then(function (result) {
            let pet = new ScoredPet(name, photo, description, result.scores)
            scoredPets.push(pet);
            console.log(scoredPets)
        })

    })
})();

module.exports = scoredPets;