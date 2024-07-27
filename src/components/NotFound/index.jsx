import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import Error404img from '../../assets/images/error-img-404.png'
import Bgimgto404 from '../../assets/images/bgimg-to-404.png'

const index = () => {
  return (
    <div className='error-404'>
      <img className='bg-img-404' src={Bgimgto404} alt="not-found" />
      <div className='error-block'>
          <img className='error404img' src={Error404img} alt="not-found" />
          <div className='error-content'>
              <h1 className='error-title'>
                Sahifa topilmadi !
              </h1>
              <p className='error-paragraph'>
              Ooo xatolik ! Berilgan so’rov bo’yicha sahifa topilmadi. Iltimos, bosh sahifaga qaytib yana urinib ko'ring.
              </p>
              <Link to="/">
                <button className='book-btn1'>
                    Bosh sahifaga o'tish
                </button>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default index