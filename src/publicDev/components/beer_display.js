import React from 'react';

const BeerDisplay = ({data}) => {
    if (!data) {
    return <div>Loading...</div>;
  }
  console.log(data)
  const imgURL = data.imgURL;
  const name = data.name;
  const desc = data.desc;
  
  return (
    <div className="beer-display col-md-12">
      <div className="row">
        <img className="col-md-5 img-responsive" src={imgURL} />
        <h3 className='col-md-7 beer-title'>{name}</h3>
        <p className='col-md-7 beer-description'>{desc}</p>
      </div>
      <hr/>
    </div>
  );
}

export default BeerDisplay