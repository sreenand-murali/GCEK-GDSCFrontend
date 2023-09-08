import React from 'react'
import Leaderboard from './Leaderboard';
import './GoogleCloudJam.css'
function GoogleCloudJam() {
  return (
    <div className="containerlb">
        <h1 className="headinglb">LEADERBOARD</h1>
        <div className="lbBox">
            <Leaderboard/>
        </div>
    </div>
  )
}

export default GoogleCloudJam