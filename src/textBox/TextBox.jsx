import React from 'react'
import './textBox.css'
function TextBox({text,img}) {
  return (
    <div className='textBox'>
        <img src={img} alt='pic'/>
      <p>{text}</p>
    </div>
  )
}

export default TextBox
