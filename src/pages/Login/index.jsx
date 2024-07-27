import React from 'react'
import './style.css'
import Login_Img from '../../assets/images/login_img.png'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='login'>
        <div className='login-container'>
            <div className='login-left'>
                 <img src={Login_Img} alt="" />   
            </div>
            <div className='login-right'>
              <h1>Tizimga Kirish</h1>
              <p>Tizimga kirish orqali siz <a href="#">Foydalanish shartlari</a> va <a href="#">Maxfiylik <br /> siyosatiga</a> rozilik bildirasiz.</p>
              <form action="">
                <input className='input-style' type="text" placeholder='Email Kiriting' />
                <input type="password" className='input-style' placeholder='Password kiriting' />
                <Link to="/"><button className='form-btn'>Kirish</button></Link>
              </form>
              <p>Parolni unitdingizmi? <a href="#">Tiklash</a>.</p>
            </div>
        </div>
    </div>
  )
}

export default index
