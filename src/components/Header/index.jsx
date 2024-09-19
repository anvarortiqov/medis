import React, { useEffect, useState } from 'react'
import './style.css'

// icons import
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
// images import
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Image from '../Image';
import axios from 'axios';
import { getUserData } from '../../redux/slices/userSlice';

const index = () => {
  const UserStore = useSelector(state => state.user);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()


  const handleOpen = () => {
    setOpen(!open)
  }

  const HandleYesNo = () => {
    let patientadd1 = document.querySelector('.yes-no-box')
    patientadd1.classList.toggle('yes-no-box-active')
  }

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");

    try {
      axios.get(import.meta.env.VITE_API + "/dj-rest-auth/user/", {
        headers: {
          Authorization: "Token " + token
        }
      }).then(response => {
        if (response.status < 400) {
          dispatch(getUserData(response.data));
        }
      }).catch(console.error)
    } catch (error) {
      console.warn(error);
    }
  }, [pathname])

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
            <IoMdNotificationsOutline className='header_notification-icon' />
          </div>
          <div className='header_account-block' onClick={handleOpen}>
            {/* <img className='header-account-block_user-img' src={UserImage} alt="not-found" /> */}
            <div className='header-account-block_user-img'>
              <Image src={UserStore.details?.image} title={UserStore.details?.first_name} />
            </div>
            <div className='header-account-block-texts'>
              <h4><span>{UserStore.details?.surname + " " + UserStore.details?.name?.at(0) ?? "Not Found"}</span> <IoIosArrowDown className={` header_account-block-icon ${open ? "header_account-block-icon-def" : ""} `} /></h4>
              <h5>{UserStore.details?.username ?? "Not Found"}</h5>
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
                    <li><Link to="#"><CgProfile className='header-extra-menu-icon' />  <span>Profil</span></Link></li>
                    <li><Link to="settings/shifohona"><IoSettingsOutline className='header-extra-menu-icon' /> <span>Sozlamalar</span></Link></li>
                    <li><a onClick={HandleYesNo}><FiLogOut className='header-extra-menu-icon' /> <span>Chiqish</span></a></li>
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
