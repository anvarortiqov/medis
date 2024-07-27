import React from 'react'
import './style.css'
import {NavLink, Outlet, useParams} from 'react-router-dom'
import { GrAnalytics } from "react-icons/gr";
import { FaBedPulse } from 'react-icons/fa6'
import { MdOutlineWorkHistory } from "react-icons/md";

const index = () => {

    

  return (
    <div className='services-box'>
      <div className='patientdata_navbar-block'>
        <ul className='patientdata_navbar'>
            <NavLink  className='patientnavbar_item' to="massaj" >
              <li>
                <div className='pat-data-navbar_icon'>
                  <FaBedPulse />
                </div>
                <h3 className='pat-data-navbar_text1'>
                    Massaj
                </h3>
              </li>
            </NavLink>
            <NavLink className='patientnavbar_item' to="addservice">
              <button className='form-btn'>Xizmat Qo'shish</button>
            </NavLink>
          </ul>
      </div>
      <div className='services-content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default index
