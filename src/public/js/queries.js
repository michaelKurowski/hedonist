'use strict';

var getDummyToJSON = function getDummyToJSON() {
    $.get('http://localhost:80/api/beer/oeGSxs').done(function (data) {
        return generateBeers(data);
    });
};
var getRandomBeerToJSON = function getRandomBeerToJSON() {};
function getBeerVariationsJSON(id) {
    var URL = 'http://localhost:80/api/beer/' + id + '/variations';
    $.ajax({
        url: URL,
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        data: JSON.stringify({
            username: 'testUser',
            password: 'bfb0dhedonistAdmin37b45dc1',
            email: 'bla@gma.pl'
        }),
        processData: false,
        success: function success(data) {
            console.log("success", data);
            generateBeers(data);
        },
        error: function error(res) {
            console.log(res);
        }
    });
}
var getBeerOfDayToJSON = function getBeerOfDayToJSON() {};