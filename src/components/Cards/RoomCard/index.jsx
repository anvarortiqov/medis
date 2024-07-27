import React from 'react'
import './style.css'

const index = (props) => {
    const {id, price, roomnumber, img, characteristics, status, persons,} = props
  return (
    <div className='room-card-box'>
      <img src={img} alt="Room card img" />
      <div className='room-card-info'>
        <h1>{roomnumber}-Xona</h1>
        <ul>
            <li>{persons}-kishilik</li>
            <li>{status}</li>
        </ul>
      </div>
      <div className='room-card-price'>
        <div>
            <h4>Qulayliklar</h4>
            <p>{characteristics}</p>
        </div>
        <div>
            <h4>Narxi:</h4>
            <p>{price} so'm</p>
        </div>
      </div>
      <button className='form-btn'>Band Qilish</button>
    </div>
  )
}

export default index
