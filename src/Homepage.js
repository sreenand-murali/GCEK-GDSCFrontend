import React from 'react'
import Cards from './Cards'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='eventsTitle'>EVENTS</h1>
        <div onClick={()=>navigate('/gcsj')}>

        <Cards  title="Google Cloud Study Jam"/>
        </div>
    </div>
  )
}

export default Homepage