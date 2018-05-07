// Dependencies
const pets = require("../data/getPets.js");

// Routes
module.exports = function (app) {

    app.get("/api/pets", function (req, res) {
        return res.json(pets);
    });

}