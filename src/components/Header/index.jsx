import React from 'react'
import './style.css'

// icons import

import {IoMdNotificationsOutline } from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
// images import
import UserImage from '../../assets/images/user-image.png'
import { Link } from 'react-router-dom'



const index = () => {
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
          <div className='header_account-block'>
              <img className='header-account-block_user-img' src={UserImage} alt="not-found" />
              <div className='header-account-block-texts'>
                  <h4>Hasanboy <IoIosArrowDown className='header_account-block-icon' /></h4>
                  <h5>Admin</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
