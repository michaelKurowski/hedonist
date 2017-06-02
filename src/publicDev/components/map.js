import React, {Component} from 'react'

class GoogleMap extends Component{
    constructor(props){
        super(props)

        this.state = {
            lat: 0.0,
            long: 0.0
        }
    }
    myMap(){
    var  mapOptions = {
        center: new google.maps.LatLng(this.state.lat,this.state.long),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var  map = new google.maps.Map(document.getElementById('map'), mapOptions)
    }
    
    render(){
        return(
            <div id="map" className="col-xs-5">

            </div>
        )
    }
}

export default GoogleMap