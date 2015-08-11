page();

function doAjax(flightNumber, departureDate) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/flight/' + flightNumber + '/' + departureDate + '/configuration',
        dataType: "json",
        success: null
    })
        .done(function (data) {
            var backdropId = data.aircraft.decks[0]['backdrop_id'];
            var imgSrc = "http://localhost:3001/" + backdropId + ".gif";
            $("#backdropIn").attr("src", imgSrc);

            showSeating(data);
        });
}

