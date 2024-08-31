
import React from 'react'
import './style.css'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from "../../../hooks/useAuth"

const index = () => {
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
  
    const onLogout = () => {
        window.sessionStorage.setItem("token", null);
        setIsAuthenticated(false);
        navigate("/login", { replace: true })
    }

    const HandleYesNo = ()=> {
        let patientadd1 = document.querySelector('.yes-no-box')
        patientadd1.classList.toggle('yes-no-box-active')
    }
    
    return (
    <div className='yes-no-box' onClick={HandleYesNo}>
        <div className='yes-no-card'>
            <p>Do you really want to Log-out?</p>
            <div className='yes-no-btns'>
                <NavLink to="/login" onClick={onLogout} ><button className='yes-no-btn1'>Yes</button></NavLink>
                <button className='yes-no-btn2' onClick={HandleYesNo}>No</button>
            </div>
        </div>
    </div>
  )
}

export default index
