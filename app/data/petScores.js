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
                console.log(response)
                let id = "#slide" + i;
                $(id).attr('src', response.petfinder.pet.media.photos.photo[1].$t);
            })
    }

};

getPets();