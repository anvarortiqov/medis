import { React, useState } from "react";
import './style.css'
import { NavLink, useNavigate } from "react-router-dom";

// icons links
import { FaChartPie } from 'react-icons/fa'
import { FiBarChart2 } from 'react-icons/fi'
import { FaBedPulse } from 'react-icons/fa6'
import { RiCustomerService2Line } from 'react-icons/ri'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { FaUserDoctor } from "react-icons/fa6";
import { GiSoapExperiment } from 'react-icons/gi'
import { GoGear } from 'react-icons/go'
import { TbLogout } from 'react-icons/tb'
import { MdOutlineCalculate } from 'react-icons/md'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import useAuth from "./../../hooks/useAuth"

const index = () => {

    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false)
    const handleAuto = () => {
        setOpen(!open)
    }
    const [open2, setOpen2] = useState(false)
    const handleAuto2 = () => {
        setOpen2(!open2)
    }

    const onLogout = () => {
        localStorage.setItem("token", null);
        setIsAuthenticated(false);
        navigate("/login", { replace: true })
    }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar_head">
                    <div className="head-direction">
                        <FaChartPie className="head_direction-icon" />
                        <h2 className="head_directin-name">Bo'limlar</h2>
                    </div>
                </div>
                <ul className="navbar_links">
                    <NavLink to='/' className="navbar_link"  >
                        <FiBarChart2 className="navbar_link-icon" />
                        <h4>Asosiy</h4>
                    </NavLink>
                    <NavLink to='qabulxona' className="navbar_link">
                        <MdOutlineBedroomChild className="navbar_link-icon" />
                        <h4>Qabulxona</h4>
                    </NavLink>
                    <NavLink to='bemorlar' className="navbar_link">
                        <FaBedPulse className="navbar_link-icon" />
                        <h4>Bemorlar</h4>
                    </NavLink>
                    <NavLink to='rooms' className="navbar_link">
                        <MdOutlineBedroomChild className="navbar_link-icon" />
                        <h4>Xonalar</h4>
                    </NavLink>
                    
                    <div>
                        <NavLink to="services/massaj" onClick={() => handleAuto()} className="navbar_link" >
                            <MdManageAccounts className="navbar_link-icon" />
                            <h4>Management</h4>
                            <MdKeyboardArrowRight className={`navbar_link-icon  ${open ? "navbar_link-icon-act" : ""}`} />
                        </NavLink>
                        <div className={`navabar-links3  ${open ? "navabar-links3-active" : ""}`}>
                            <NavLink to='services/massaj' className="navbar_link3">
                                <RiCustomerService2Line className="navbar_link-icon3" />
                                <h4>Xizmatlar</h4>
                            </NavLink>
                            <NavLink to='hodimlar/rahbarlar' className="navbar_link3">
                                <FaUserDoctor className="navbar_link-icon3" />
                                <h4>Hodimlar</h4>
                            </NavLink>
                            <NavLink to='laboratory/analyseresults' className="navbar_link3">
                                <GiSoapExperiment className="navbar_link-icon3" />
                                <h4>Labaratoriya</h4>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <NavLink to='statistics' onClick={() => handleAuto2()} className="navbar_link" >
                            <MdOutlineCalculate className="navbar_link-icon" />
                            <h4>Bugalteria</h4>
                            <MdKeyboardArrowRight className={`navbar_link-icon  ${open2 ? "navbar_link-icon-act" : ""}`} />
                        </NavLink>
                        <div className={`navabar-links3  ${open2 ? "navabar-links3-active" : ""}`}>
                            <NavLink to='statistics' className="navbar_link3">
                                <FaUserDoctor className="navbar_link-icon3" />
                                <h4>Statistika</h4>
                            </NavLink>
                            <NavLink to='accaunting/payments' className="navbar_link3">
                                <GiSoapExperiment className="navbar_link-icon3" />
                                <h4>Income & Spendings</h4>
                            </NavLink>
                        </div>
                    </div>
                    <NavLink to='settings/shifohona' className="navbar_link">
                        <GoGear className="navbar_link-icon" />
                        <h4>Sozlamalar</h4>
                    </NavLink>
                    <NavLink to='/login' onClick={onLogout} className="navbar_link">
                        <TbLogout className="navbar_link-icon" />
                        <h4>Chiqish</h4>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default index



