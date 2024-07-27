import React from 'react'
import { Link } from 'react-router-dom'

const index = (props) => {

    const {index, name, user, status, price, id, type, date, } = props

  return (
    <Link to="../harajat-info">
      <div className='harajat-card' key={id}>
        <div>{index + 1}</div>
        <div>{name}</div>
        <div>{user}</div>
        <div>{price} So'm</div>
        <div>{type}</div>
        <div>{date}</div>
        <div>{status}</div>
      </div>
    </Link>
  )
}

export default index