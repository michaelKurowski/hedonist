const getDummyToJSON = () => {
    $.get('http://localhost:80/api/beer/oeGSxs').
    done(data =>generateBeers(data)
    )}
const getRandomBeerToJSON = () => {

}
function getBeerVariationsJSON(id){
    const URL = `http://localhost:80/api/beer/${id}/variations`
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
    success: function(data){
        console.log("success", data);
        generateBeers(data);
    },
    error: function(res){
        console.log(res)
    }
    })
}
const getBeerOfDayToJSON = () => {

}
