'use strict';

var getDummyToJSON = function getDummyToJSON() {
    $.get('http://localhost:80/api/beer/oeGSxs').done(function (data) {
        return generateBeers(data);
    });
};
var getRandomBeerToJSON = function getRandomBeerToJSON() {};
function getBeerVariationsJSON(id) {
    $.get('http://localhost:80/api/beer/' + id + '/variations').done(function (data) {
        return generateBeers(data);
    });
}
var getBeerOfDayToJSON = function getBeerOfDayToJSON() {};

function sendData(url, method, data, done) {
    $.ajax({
        url: url,
        dataType: 'json',
        type: method,
        contentType: 'application/json',
        data: JSON.stringify(data),
        processData: false,
        success: done(data),
        error: function error(res) {
            return console.log(res);
        }
    });
}