import React from 'react'
import './style.css'
import { NavLink, Outlet } from 'react-router-dom'
import { GrAnalytics } from "react-icons/gr";
import { FaBedPulse } from 'react-icons/fa6'

const index = () => {
  return (
    <div className='labaratory'>
      <div className='patientdata_navbar-block'>
        <ul className='patientdata_navbar'>

          <NavLink className='patientnavbar_item' to="allanalyses" >
            <li >
              <div className='pat-data-navbar_icon'>
                <FaBedPulse />
              </div>
              <h3 className='pat-data-navbar_text1'>
                Analizlar
              </h3>
            </li>
          </NavLink>
          <NavLink className='patientnavbar_item' to="analyseresults" >
            <li>
              <div className='pat-data-navbar_icon'>
                <GrAnalytics />
              </div>
              <h3 className='pat-data-navbar_text1'>
                Natijalar
              </h3>
            </li>
          </NavLink>
          <NavLink className='patientnavbar_item' to="addanalyses">
            <button className='form-btn'>Analiz Qo'shish</button>
          </NavLink>
        </ul>
      </div>
      <div className='labaratory-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default index
