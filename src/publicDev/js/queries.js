const getDummyToJSON = () => {
    $.get('http://localhost:80/api/beer/oeGSxs').done(function(data) { return data.data })

}
const getRandomBeerToJSON = () => {

}
const getBeerVariationsJSON = id => {

    $.post('http://localhost:80/api/beer/', {
        id: id
    }).done(function({ data }) {
        generateBeers(data)
    })
}

const getBOTDayToJSON = () => {

}