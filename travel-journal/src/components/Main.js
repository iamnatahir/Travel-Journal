import React from 'react'

export default function Main(props) {
  return (
    <div className='main'>
      <div className="pic">
        <img alt='' src={props.item.locationImage}/>
      </div>
      <div className="info">
        <div className="location">
          <img alt='' src='Fill 219.png'/>
          <p>{props.item.locationName}</p>
          <a href={props.item.maps}>View on Google Maps</a>
        </div>
        <h1>{props.item.place}</h1>
        <h3>{props.item.date}</h3>
        <p className='text'>{props.item.details} </p>
      </div>
    </div>
  )
}
