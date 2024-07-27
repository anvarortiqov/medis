import React from 'react'
import {NavLink, Outlet, useParams} from 'react-router-dom'
import { FaBedPulse } from 'react-icons/fa6'

const index = () => {
  return (
    <div className='services-box'>
      <div className='patientdata_navbar-block'>
        <ul className='patientdata_navbar'>
            <NavLink  className='patientnavbar_item' to="shifohona" >
              <li>
                <div className='pat-data-navbar_icon'>
                  <FaBedPulse />
                </div>
                <h3 className='pat-data-navbar_text1'>
                    Shifohona
                </h3>
              </li>
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
