import React from 'react'
import './movement.css'
import mic from '../../Hotdrop-Assets/630e348760dd00f21403456e_microphone-p-800.jpeg'
function Movement() {
  return (
    <div className='hot-drop__movement section__padding'>
      <div className='hot-drop__movement-board'>
          <p>JOIN THE MOVEMENT</p>
          <h2>Music for superfans</h2>
          <h2>Join the hotDrop movement</h2>
          <button type='button' className='promote-btn'>PROMOTE MUSIC</button>
          <button type='button' className='discover-btn'>DISCOVER MUSIC</button>

      </div>
      <div className='hot-drop__movement-mic'>
         <img src={mic} alt='mic-pic'/>
      </div>
    </div>
  )
}

export default Movement
