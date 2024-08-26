import React from 'react'
import './style.css'
import { FaBedPulse } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";

const index = () => {
  const patientId = window.localStorage.getItem("patient-id");

  return (
    <div className='patients'>
      <div className='patientdata_navbar-block'>
        <ul className='patientdata_navbar'>
          <NavLink className='patientnavbar_item' to={"/qabulxona/patient/personal/" + patientId} >
            <li>
              <div className='pat-data-navbar_icon'>
                <FaBedPulse />
              </div>
              <h3 className='pat-data-navbar_text1'>
                Bemor
              </h3>
            </li>
          </NavLink>
          <NavLink className='patientnavbar_item' to={"/qabulxona/patient/analyses/" + patientId} >
            <li >
              <div className='pat-data-navbar_icon'>
                <GrAnalytics />
              </div>
              <h3 className='pat-data-navbar_text1'>
                Analiz
              </h3>
            </li>
          </NavLink>
          <NavLink className='patientnavbar_item' to={"/qabulxona/patient/sickhistory/" + patientId} >
            <li >
              <div className='pat-data-navbar_icon'>
                <MdOutlineWorkHistory />
              </div>
              <h3 className='pat-data-navbar_text2'>
                Kasallik Tarihi
              </h3>
            </li>
          </NavLink>
          <NavLink className='patientnavbar_item' to={"/qabulxona/patient/statsionar/" + patientId} >
            <li >
              <div className='pat-data-navbar_icon'>
                <GrAnalytics />
              </div>
              <h3 className='pat-data-navbar_text3'>
                Statsionar
              </h3>
            </li>
          </NavLink>
          <NavLink className='patientnavbar_item' to={"/qabulxona/patient/qabul/" + patientId}>
            <button className='form-btn'>
              Qabul
            </button>
          </NavLink>
        </ul>
      </div>
      <div className='patientdata-right_information'>
        <div className='patientdata-information_left'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default index
