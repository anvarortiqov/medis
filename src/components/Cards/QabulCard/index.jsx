import React from 'react'

const index = ({id, delates}) => {
  return (
    <div className='qabul-row' id={id} >
      <div>
        {id+1}
      </div>
      <div>
        <select className='input-style' id="qabul">
            <option value="default">Choose Qabul</option>
        </select>
      </div>
      <div>
        <select className='input-style' id="qabulturi">
            <option value="default">Choose Qabul Turi</option>
        </select>
      </div>
      <div>
        <input className='input-style' type="number" id='qabulnarxi' value="20000" disabled />
      </div>
      <div className='qabul-row-last'>
          {delates}
      </div>
    </div>
  )
}

export default index
