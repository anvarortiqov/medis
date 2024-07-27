import React from 'react'
import './style.css'
import {NavLink, Outlet, useParams} from 'react-router-dom'
import { GrAnalytics } from "react-icons/gr";
import { FaBedPulse } from 'react-icons/fa6'
import { MdOutlineWorkHistory } from "react-icons/md";

const index = () => {
  return (
    <div className='employees'>
      <div className='patientdata_navbar-block'>
        <ul className='patientdata_navbar'>
            <NavLink className='patientnavbar_item' to="rahbarlar" >
              <li>
                <div className='pat-data-navbar_icon'>
                  <FaBedPulse />
                </div>
                <h3 className='pat-data-navbar_text1'>
                    Rahbariyat
                </h3>
              </li>
            </NavLink>
            <NavLink className='patientnavbar_item' to="shifokorlar" >
              <li >
                <div className='pat-data-navbar_icon'>
                  <GrAnalytics />
                </div>
                <h3 className='pat-data-navbar_text1'>
                    Shifokorlar
                </h3>
              </li>
            </NavLink>
            <NavLink className='patientnavbar_item'to="texhodimlar" >
              <li >
                <div className='pat-data-navbar_icon'>
                  <MdOutlineWorkHistory />
                </div>
                <h3 className='pat-data-navbar_text2'>
                    Texnik Hodimlar
                </h3>
              </li>
            </NavLink>
            <NavLink className='patientnavbar_item' to="addemployee">
              <button className='form-btn'>Hodim Qo'shish</button>
            </NavLink>
          </ul>
      </div>
      <div className='employee-content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default index
