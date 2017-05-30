const getDummyToJSON = () => {
    $.get('http://localhost:80/api/beer/oeGSxs').
    done(data =>generateBeers(data)
    )}
const getRandomBeerToJSON = () => {

}
function getBeerVariationsJSON(id){
    $.get(`http://localhost:80/api/beer/${id}/variations`).
    done(data => generateBeers(data))
}
const getBeerOfDayToJSON = () => {
 
}

function sendData(url, method, data, done){
    $.ajax({
    url: url,
    dataType: 'json',
    type: method,
    contentType: 'application/json',
    data: JSON.stringify(data),
    processData: false,
    success: done(data),
    error: res => console.log(res)
    })
}