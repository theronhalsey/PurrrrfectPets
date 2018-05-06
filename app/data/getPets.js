const $ = require("jquery");

let pets = []

function getPets() {
    const queryURL = "http://api.petfinder.com/pet.getRandom?key=ed58377893bb1ab4b2a658c376a78939&output=basic&format=json"
    for (i = 0; i < 10; i++) {
        $.ajax({
            url: queryURL,
            method: "GET",
            crossDomain: true,
            dataType: 'jsonp'
        })
            .then(function (response) {
                pets.push(response)
                console.log(response)
                console.log(pets)
            })
    }

};

getPets();

module.exports = pets;