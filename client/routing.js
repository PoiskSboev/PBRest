page('/single-deck', singleDeck);
page('/double-deck', doubleDeck);
page();

function singleDeck() {
    doAjax('NVR123', 'departureDate');
}

function doubleDeck() {
    doAjax('NVR124', 'departureDate');
}

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

            if (data.aircraft.decks.length > 1) {
                backdropId = data.aircraft.decks[1]['backdrop_id'];
                imgSrc = "http://localhost:3001/" + backdropId + ".gif";
                $("#backdropOut").attr("src", imgSrc);
            } else {
                $("#backdropOut").attr("src", "");
            }

            $("#allJson").html(stringify_(data));
        });
}

