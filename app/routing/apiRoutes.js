// Dependencies
const pets = require("../data/getPets.js");
const scorePets = require("../data/petScores.js");

// Routes
module.exports = function (app) {

    app.get("/api/pets", function (req, res) {
        return res.json(pets);
    });

    app.post("/api/survey", function (req, res) {
        console.log(req.body)

    });

    app.get("/api/petscores", function (req, res) {

    });
}