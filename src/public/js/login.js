'use strict';

function loginToServer() {

    var URL = 'http://localhost:80/authenticate/signIn';

    $.ajax({
        url: URL,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({}),
        processData: false,
        success: function success(data) {
            console.log("success", data);
            getBeerVariationsJSON('oeGSxs');
        },
        error: function error(res) {
            console.log(res);
        }
    });
}