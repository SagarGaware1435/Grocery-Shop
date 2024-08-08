import React from 'react'

function Tododisplay(props) {
  return (
    <div>
      <li className='d-flex fs-4 justify-content-center list-unstyle'>
        {props.item}
        </li>
    </div>
  )
}

export default Tododisplay
