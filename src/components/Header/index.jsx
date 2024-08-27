import React, { useState } from 'react'
import './style.css'

// icons import
import {IoMdNotificationsOutline } from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
// images import
import UserImage from '../../assets/images/user-image.png'
import { Link } from 'react-router-dom'



const index = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
}

  return (
    <div className='haeder'>
      <div className='header_container'>
        <Link to="/">
          <div className="logo-block">
              <div className="logo-icon"></div>
              <div className="logo-name"><h3>Medis</h3></div>
          </div>
        </Link>
        <div className='header_center'>
          <div>53</div>
          <h4>Statsionar <span>Bemorlar</span></h4>
          <div>62</div>
          <h4>Band Xonalar</h4>
          <div>23</div>
          <h4>Analizlar</h4>
          <div>38</div>
          <h4>Qabul</h4>
        </div>
        <div className='header_right-side'>
          <div className='header_notification-block'>
            <IoMdNotificationsOutline  className='header_notification-icon' />
          </div>
          <div className='header_account-block'  onClick={handleOpen}>
              <img className='header-account-block_user-img' src={UserImage} alt="not-found" />
              <div className='header-account-block-texts'>
                  <h4>Hasanboy <IoIosArrowDown className={` header_account-block-icon ${open ? "header_account-block-icon-def" : ""} `} /></h4>
                  <h5>Admin</h5>
              </div>
          </div>
          {
            open == false 
            ?
            (<div></div>)
            : 
            (
              <div className='header-extra-menu'>
                <ul>
                  <li><Link to="#"><CgProfile className='header-extra-menu-icon' />  <span>Ilhomjon Solijonov</span></Link></li>
                  <li><Link to="settings/shifohona"><IoSettingsOutline  className='header-extra-menu-icon' /> <span>Sozlamalar</span></Link></li>
                  <li><Link to="login"><FiLogOut   className='header-extra-menu-icon' /> <span>Chiqish</span></Link></li>
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default index
