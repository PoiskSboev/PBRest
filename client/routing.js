page('/allocation', allocation);
page();

function allocation() {
    doAjax('NVR123', 'departureDate');
}

function doAjax(flightNumber, departureDate, bookingNumber) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/flight/' + flightNumber + '/' + departureDate + '/allocation/' + bookingNumber,
        dataType: "json",
        success: null
    })
        .done(function (data) {
            printData(data);
			printServicesData(data.definitions.services);
			printSeatMapData(data.seatmap)
        });
}

