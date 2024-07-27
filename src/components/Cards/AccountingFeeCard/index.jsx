import React from 'react'
import { Link } from 'react-router-dom'

const index = (props) => {

    const {index, name, status, price, reason, feetype, feeid, date, } = props

  return (
    <Link to="../payment-info">
      <div className='payment-card'>
        <div>{index + 1}</div>
        <div>{name}</div>
        <div>{reason}</div>
        <div>{price} so'm</div>
        <div>{feetype}</div>
        <div>#{feeid}</div>
        <div>{date}</div>
        <div>{status}</div>
      </div>
    </Link>
  )
}

export default index
