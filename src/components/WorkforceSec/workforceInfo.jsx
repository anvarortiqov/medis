import React from 'react'
import './style.css'
// imgs
import { FaPerson } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi"
import Avatar from '../../assets/images/doctor-img.png'
import { FaRegHospital } from "react-icons/fa6";

const workforceInfo = () => {
  return (
    <div className='workforce-info'>
        <div className='abempl-left'>
            <img src={Avatar} alt="" />
            <h1>Muhammadova Dilrabo</h1>
            <div>
                <h2>Shifohona:</h2>
                <h3>Apex</h3>
            </div>
            <div>
                <h2>Ishxona Manzili:</h2>
                <h3>Namangan Viloyati, Chust Tuman</h3>
            </div>
            <div>
                <h2>Mutaxasasisligi:</h2>
                <h3>Gnekolog</h3>
            </div>
            <div>
                <h2>Telefon:</h2>
                <h3>+998 88 654 54 45</h3>
            </div>
            <div>
                <h2>Email:</h2>
                <h3>hasanboyleo97@gmail.com</h3>
            </div>
            <div>
                <h2>Uy Manzili:</h2>
                <h3>Namangan Viloyati, Chust Tuman</h3>
            </div>
            <button className='form-btn'>Ko'rikga Yozilish</button>
        </div>
        <div className='abemp_right'>
            <h2><FaPerson /> Shifokor haqida</h2>
            <p><span>Mahmudova Dilrabo: </span> struggled in his younger years due to familial violence. As a consequence, his studies at school suffered. He came to El Patojismo when he was 11 years old. Over the last 8 years he learned that he cannot change his past, but he can improve his future. After graduating Grade 9 he received a scholarship to study with Agrequima, a non-profit in Guatemala whose aim is to teach.</p>
            <br />
            <h2><GiTeacher /> Ta'lim</h2>

            <ul className='forkforce-edu-work'>
                <li>
                    <div className='workforce-left'>
                        <div className='resume-left-indicator'></div>
                        <div className='resume-left-hr'></div>
                    </div>
                    <div className='workforce-right'>
                        <h3>Toshkent Tibbiyot Universiteti</h3>
                        <p>Ginikalogiya</p>
                        <p>2017-2021</p>
                    </div>
                </li>
                <li>
                    <div className='workforce-left'>
                        <div className='resume-left-indicator'></div>
                        <div className='resume-left-hr'></div>
                    </div>
                    <div className='workforce-right'>
                        <h3>Toshkent Tibbiyot Universiteti</h3>
                        <p>Ginikalogiya</p>
                        <p>2021-2023</p>
                    </div>
                </li>
            </ul>
            <br />
            <h2><FaRegHospital /> Kasalhonalar</h2>
            <ul className='forkforce-edu-work'>
                <li>
                    <div className='workforce-left'>
                        <div className='resume-left-indicator'></div>
                        <div className='resume-left-hr'></div>
                    </div>
                    <div className='workforce-right'>
                        <h3>Namangan Tibbiyot Poliklinikasi</h3>
                        <p>Ginekalog</p>
                        <p>2022-2023</p>
                    </div>
                </li>
                <li>
                    <div className='workforce-left'>
                        <div className='resume-left-indicator'></div>
                        <div className='resume-left-hr'></div>
                    </div>
                    <div className='workforce-right'>
                        <h3>Namangan Tibbiyot Poliklinikasi</h3>
                        <p>Ginekalog</p>
                        <p>2022-2023</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default workforceInfo
