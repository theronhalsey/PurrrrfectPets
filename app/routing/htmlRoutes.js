// DEPENDENCIES
const path = require("path");
const pets = require("../data/getPets.js");
const scorePets = require("../data/petScores.js");

// ROUTING
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        scorePets();
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};