import React from 'react'
import './style.css'
import { FaBedPulse } from 'react-icons/fa6'
import {Link, NavLink, Outlet, useParams} from 'react-router-dom'
import PatientDataImg from '../../assets/images/patient_avatar.png'
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";
import AddPatient from '../../components/Modals/AddPatient/index'
import BookRoom from '../../components/Modals/BookRoom/index';
import SelectService from '../../components/Modals/SelectService/index';
import TakeAnalyse from '../../components/Modals/TakeAnalyses/index';

const index = () => {


  const PatientHandler = ()=> {
    let patientadd = document.querySelector('.add-patinet')
    patientadd.classList.toggle('add-patient-exist')
  }
  const BookRoomtHandler = ()=> {
    let patientadd1 = document.querySelector('.book-room')
    patientadd1.classList.toggle('book-room-exist')
  }
  const SelectServiceHandler = ()=> {
    let patientadd = document.querySelector('.select-service')
    patientadd.classList.toggle('select-service-exist')
  }
  const TakeAnalyseHandler = () => {
    let patientadd3 = document.querySelector(".take-analyse");
    patientadd3.classList.toggle("select-service-exist");
  };

  

  return (
    <div className='patients'>
      <BookRoom/>
      <AddPatient/>
      <SelectService/>
      <TakeAnalyse/>
        <div className='patientdata_navbar-block'>
          <ul className='patientdata_navbar'>
            <NavLink  className='patientnavbar_item' to="personal" >
              <li>
                <div className='pat-data-navbar_icon'>
                  <FaBedPulse />
                </div>
                <h3 className='pat-data-navbar_text1'>
                    Bemor
                </h3>
              </li>
            </NavLink>
            <NavLink  className='patientnavbar_item' to="analyses" >
              <li >
                <div className='pat-data-navbar_icon'>
                  <GrAnalytics />
                </div>
                <h3 className='pat-data-navbar_text1'>
                    Analiz
                </h3>
              </li>
            </NavLink>
            <NavLink  className='patientnavbar_item'to="sickhistory" >
              <li >
                <div className='pat-data-navbar_icon'>
                  <MdOutlineWorkHistory />
                </div>
                <h3 className='pat-data-navbar_text2'>
                    Kasallik Tarihi
                </h3>
              </li>
            </NavLink>
            <NavLink  className='patientnavbar_item' to="statsionar" >
              <li >
                <div className='pat-data-navbar_icon'>
                  <GrAnalytics />
                </div>
                <h3 className='pat-data-navbar_text3'>
                    Statsionar
                </h3>
              </li>
            </NavLink>  
            <NavLink className='patientnavbar_item' to="qabul">
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
