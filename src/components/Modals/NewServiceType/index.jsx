import React from 'react'
import './style.css'

const index = () => {
  return (
    <div className='new-service-type'>
        <form>
            <div>
                <label className='form-label-style' htmlFor="new">Yangi Xizmat Nomi</label>
                <input className='input-style' type="text" required name='new' placeholder='Xizmat Nomini Kiriting' />
            </div>
            <button className='form-btn'>Saqlash</button>
        </form>
    </div>
  )
}

export default index
