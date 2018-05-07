var request = require("request");

let pets = [];

function getPets() {

    for (i = 0; i < 10; i++) {

        request("http://api.petfinder.com/pet.getRandom?key=ed58377893bb1ab4b2a658c376a78939&output=basic&format=json", function (error, response, body) {

            if (!error && response.statusCode === 200) {
                pets.push(JSON.parse(body))
            }
        })
    }
}

getPets();

module.exports = pets;