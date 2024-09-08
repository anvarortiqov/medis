import React from 'react'
import './style.css'
import {NavLink, Outlet, } from 'react-router-dom'
import { GrAnalytics } from "react-icons/gr";
import { FaBedPulse } from 'react-icons/fa6'
import { MdOutlineWorkHistory } from "react-icons/md";




const index = () => {
    

      

  return (
    <div className='about-employee'>
        <div className='patientdata_navbar-block'>
            <ul className='patientdata_navbar'>
                <NavLink className='patientnavbar_item' to={`worker-info`} >
                <li>
                    <div className='pat-data-navbar_icon'>
                    <FaBedPulse />
                    </div>
                    <h3 className='pat-data-navbar_text1'>
                        Shifokor Malumoti
                    </h3>
                </li>
                </NavLink>
                <NavLink className='patientnavbar_item' to="worker-faoliyati" >
                <li >
                    <div className='pat-data-navbar_icon'>
                    <GrAnalytics />
                    </div>
                    <h3 className='pat-data-navbar_text1'>
                        Faoliyati
                    </h3>
                </li>
                </NavLink>
                <NavLink className='patientnavbar_item'to="worker-salary" >
                <li >
                    <div className='pat-data-navbar_icon'>
                    <MdOutlineWorkHistory />
                    </div>
                    <h3 className='pat-data-navbar_text2'>
                        Maosh
                    </h3>
                </li>
                </NavLink>
            </ul>
            <ul className='extra-menu-of-navbar'>
                <li>
                    <span>User Name: </span>
                    #f8hf98w
                </li>
                <li>
                    <span>F.I.O: </span>
                    Solijonov ilhomjon Nazirjon O'g'li
                </li>
                <li>
                    <span>Tel: </span>
                    +998 99 083 7233
                </li>
                <li>
                    <span>Balans: </span>
                    200000
                </li>
            </ul>
        </div>
        <div className='abemp-container'>
            <Outlet/>
        </div>
    </div>
  )
}

export default index
