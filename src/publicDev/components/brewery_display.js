import React, {Component} from 'react'

const BreweryDisplay  = ({data}) => {
        if(!data){
            return <div>Loading...</div>;
        }
        console.log('Brewery:', data)
        return(
            <div className ='brewery-display row'>
                <h3 className='text-center'> Brewed By: {data.name} </h3>
                <p> {data.desc}  </p>
            </div>
        )
}

export default BreweryDisplay