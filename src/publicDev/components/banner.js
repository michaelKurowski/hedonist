import React, {Component} from 'react'


const topic = 'Brewery API - 1.0.0'
const Banner = () => {

    return(
        <div id='home' className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>{topic}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner