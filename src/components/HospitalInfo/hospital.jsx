import React from 'react'
import './style.css'

const hospital = () => {
  return (
    <div className='shifohona'>
      <form >
        <div>
            <label className='form-label-style' htmlFor="name" >Nomi</label>
            <input className='input-style' type="text" id='name' placeholder='Nomi' value="Nigoh Shifohonasi" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="logo">Logo</label>
            <input className='input-style' type="file" id='logo' placeholder='Logotip' />
        </div>
        <div>
            <label className='form-label-style' htmlFor="viloyat">Viloyat</label>
            <input className='input-style' type="text" id='viloyat' placeholder='Viloyat' value="Namangan" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="tuman">Tuman</label>
            <input className='input-style' type="text" id='tuman' placeholder='Tuman' value="Chust" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="address">Address</label>
            <input className='input-style' type="text" id='address' placeholder='Address' value="Buyuk Ipak Yoli, 57" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="eamil">Email</label>
            <input className='input-style' type="eamil" id='eamil' placeholder='Eamil' value="ilhomjonsolijonov@gmail.com" disabled  />
        </div>
        <div>
            <label className='form-label-style' htmlFor="tel">Phone Number</label>
            <input className='input-style' type="tel" id='tel' placeholder='Phone Number' value="+998 99 057 1401" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="stir">Shifohona Stir</label>
            <input className='input-style' type="number" id='stir' placeholder='Shifohona Stir' value="923874289" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="rahbar">Rahbar FIO</label>
            <input className='input-style' type="text" id='rahbar' placeholder='Rahbar FIO' value="I.S.Aliyevich" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="rahbartel">Rahbar Tel Raqami</label>
            <input className='input-style' type="tel" id='rahbartel' placeholder='Rahbar Tel Raqami' value="+998 99 876 9898" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="rahemail">Rahbar Emaili</label>
            <input className='input-style' type="email" id='rahemail' placeholder='Rahbar Emaili' value="example@gmail.com" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="hosize">Shifohona Hajmi(Necha kishilik)</label>
            <input className='input-style' type="number" id='hosize' placeholder='Shifohona Hajmi' value="2000" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="status">Status</label>
            <input className='input-style' type="text" id='status' placeholder='Status' value="Ishlayapti" disabled />
        </div>
        <div>
            <label className='form-label-style' htmlFor="lab">Labaratoria</label>
            <input className=' sec'  type="checkbox" id='lab'/>
        </div>
        <div>
            <label className='form-label-style' htmlFor="stat">Statsionar</label>
            <input className='sec'  type="checkbox" id='stat' />
        </div>
        <button className='form-btn'>Saqlash</button>
      </form>
    </div>
  )
}

export default hospital
