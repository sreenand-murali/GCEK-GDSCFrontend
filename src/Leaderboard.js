import React from 'react'
import { useState, useEffect } from 'react'
import './Leaderboard.css'

const Leaderboard = () => {
    const [data, setData] = useState([]);
  let i=1;
    const fetchInfo = () => { 
        return fetch('http://localhost:8080/leaderboard') 
                .then((res) => res.json()) 
                .then((d) => setData(d)) 
                .catch((e) => console.log("Error Occured : "+e))
        }
        
        useEffect(() => {
            fetchInfo();
        }, [])



  return (
    <table>
      <thead>
        <tr>
          <th>RANK</th>
          <th>NAME</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>
      {data.map((d)=>
        <tr>
          <td className='rankd'>{i++}</td>
          <td className='named'>{d.name}</td>
          <td className='scored'>{d.score}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

export default Leaderboard