let petSlides = [];

function populateSlidesArray() {
    const queryURL = "http://api.petfinder.com/pet.getRandom?key=ed58377893bb1ab4b2a658c376a78939&output=basic&format=json"
    for (i = 0; i < 10; i++) {
        $.ajax({
            url: queryURL,
            method: "GET",
            crossDomain: true,
            dataType: 'jsonp'
        })
            .then(function (response) {
                petSlides.push(response)
            })
    }

};

populateSlidesArray().then(function (response) {
    petSlides.forEach(function () {
        $('#slide' + index).attr('src', response.petfinder.pet.media.photos.photo[3].$t);
    })
})