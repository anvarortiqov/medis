import React from 'react'
import './style.css'
import PatientDataImg from '../../assets/images/patient_avatar.png'

const patientinfo = () => {
  return (
    <div className='patientdata_left'>
          <div className='patiendata-left_head'>
            <img src={PatientDataImg} alt="not-found" />
            <div className='patientdata_fullname'>
              <h3>Ali</h3>
              <h4>Olimov</h4>
            </div>
          </div>
          <div className='patientdata-left_content'>
            <h2 className='patilentdata-left_title'>Bemor Malumotlari</h2>
            <ul className='patientdata-left_info'>
              <li>
                <h3>Ism Familiyasi</h3>
                <h4>Ali Olimov</h4>
              </li>
              <li>
                <h3>Telefon Raqmai</h3>
                <h4>+998883715271</h4>
              </li>
              <li>
                <h3>Tug'ilgan Yili</h3>
                <h4>10.29.1997</h4>
              </li>
              <li>
                <h3>Manzil</h3>
                <h4>Chust Shahri</h4>
              </li>
              <li>
                <h3>Kasallik Tarixi</h3>
                <h4>Qandli diyabed</h4>
              </li>
              <li>
                <h3>Oxirgi Qabul</h3>
                <h4>22.02.2024</h4>
              </li>
            </ul>
          </div></div>
  )
}

export default patientinfo
