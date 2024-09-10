import React from 'react'
import "./status.css"

const Status = ({ color, background, text }) => {
    const checkColor = () => {
        switch (text?.toLowerCase()) {
            case "active": {
                return { color: "#fff", background: "#24C18F" }
            }
            case "inactive": {
                return { color: "#fff", background: "#D5A300" }
            }
            case "progress": {
                return { color: "#fff", background: "#FF8933" }
            }
            case "deleted": {
                return { color: "#fff", background: "#FF333F" }
            }
            case "pending": {
                return { color: "#fff", background: "#AD6005" }
            }
            default: {
                return { color, background }
            }
        }
    }
    return (
        <div style={checkColor(text)} className='status'>{text}</div>
    )
}

export default Status