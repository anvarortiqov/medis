import React from 'react'
import "./status.css"

const Status = ({ color, background, text }) => {
    return (
        <div style={{ color, background }} className='status'>{text}</div>
    )
}

export default Status