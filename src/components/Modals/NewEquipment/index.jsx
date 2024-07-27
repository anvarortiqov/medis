import React from 'react'
import './style.css'

const index = () => {
  return (
    <div className='new-equipment'>
       <form>
            <div>
                <label className='form-label-style' htmlFor="name">Qurilma Nomi</label>
                <input className='input-style' type="text" placeholder='Qurilma nomini kiriting' name='name' />
            </div>
            <div>
                <label className='form-label-style' htmlFor="name">Ishlab Chiqarilgan Sana</label>
                <input className='input-style' type="date" placeholder='Sanani kiriting' name='name' />
            </div>
            <div>
                <label className='form-label-style' htmlFor="name">Olib Kelingan Sana</label>
                <input className='input-style' type="date" placeholder='Sanani kiriting' name='name' />
            </div>
            <div>
                <label className='form-label-style' htmlFor="ser5">Status</label>
                <select className='input-style' name="ser5">
                    <option value="default" disabled>Statusni Tanlang</option>
                    <option value="1" >Faol</option>
                    <option value="2" >Faol Emas</option>
                    <option value="3">O'chirilgan</option>
                </select>
            </div>  
            <div className='add-employee-textarea'>
                <label className='form-label-style' htmlFor="extra">Qo'shimcha Malumot</label>
                <textarea className='input-style' type="text" name='extra' placeholder="Qo'shimcha malumot bolsa kiriting" />
            </div> 
            <button className='form-btn'>Saqlash</button>
       </form>
    </div>
  )
}

export default index
