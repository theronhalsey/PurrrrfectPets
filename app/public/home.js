$(document).ready(function () {

    $("#scrapeButton").on("click", function () {
        $.get("/scrape", function (results) {
        }).then(function (results) {
            console.log("The Data I have is: " + results[0].title)
            results.forEach(function (currentValue) {
                let newTr = $("<tr>");
                newTr.append(`<td>${currentValue.title}</td>`);
                newTr.append(`<td><a class="btn btn-primary" href=${currentValue.link} target="_blank"</a>Visit Page`)
                newTr.append(`<td><button class="btn btn-secondary">Save Article</button>`)
                $("#stories").append(newTr)
            })

        })
    })


});