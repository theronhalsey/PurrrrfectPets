// Dependencies
const pets = require("../data/getPets.js");
const scorePets = require("../data/petScores.js");

// Routes
module.exports = function (app) {

    app.get("/api/pets", function (req, res) {
        return res.json(pets);
    });

    app.post("/api/pets", function (req, res) {


    });

    app.get("/api/petscores", function (req, res) {
        petScores = scorePets()
        return res.petScores
    });
}