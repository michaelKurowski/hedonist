import React, {Component} from 'react'
import GoogleMap from './map.js'

class BreweryDisplay extends Component{
    constructor(props){
        super(props);
        
        this.state = { 
            data: {
                name: '',
                desc: '',
                location: [0.0,0.0]
            }
        }
    }

    render(){
        return(
            <div className ='row'>
                <h3> {this.state.data.name} </h3>
                <p> {this.state.data.desc} </p>
                <GoogleMap />
            </div>
        )
    }
}

export default BreweryDisplay