import React from 'react'
import './Cards.css'
import gcImage from './gc.jpg';
const Cards = (props) => {
  return (
    <div className='cardContainer'>
        <img className='gcImage' src={gcImage}/>
        <h className='cardTitle'>{props.title}</h>

    </div>
  )
}

export default Cards