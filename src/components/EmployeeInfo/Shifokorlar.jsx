import React from 'react'
import './style.css'
import EmployeeCard from '../Cards/EmployeeCard/index'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";

const Shifokorlar = () => {

  const Shifokorlar = [
    {
      id: 1,
      name: "Anvarjon Artiqov",
      number: 990651212, 
      status: "ishlayapti", 
      position: "kardiolog"
    },
    {
      id: 2,
      name: "Anvarjon Artiqov",
      number: 990651212, 
      status: "ishlayapti", 
      position: "kardiolog"
    },
    {
      id: 3,
      name: "ilhomjon solijonov ",
      number: 990651212, 
      status: "ishlayapti", 
      position: "Urolog"
    },
    {
      id: 4,
      name: "Anvarjon Artiqov",
      number: 990651212, 
      status: "ishlayapti", 
      position: "Lor"
    },
    {
      id: 5,
      name: "Anvarjon Artiqov",
      number: 990651212, 
      status: "ishlayapti", 
      position: "kardiolog"
    },
  ]

  return (
    <div className='rahbarlar'>
      <div className='rooms-head'>
          <input className='input-style' type="search" placeholder='Search...' />
          <select className='input-style'>
              <option disabled value="">Choose Category</option>
              <option value="1">Premium Xonalar</option>
              <option value="2">2-kishilik Xonalar</option>
              <option value="4">1-kishilik Xonalar</option>
              <option value="3">Bo'sh Xonalar</option>
          </select>
          
      </div>
      <div className='massaj-head'>
        <div>N</div>
        <div>Doctor Name</div>
        <div>Position</div>
        <div>Phone Number</div>
        <div>Status</div>
      </div>
      <div className='rahbarlar-content'>
        {Shifokorlar.map((item,index) => (
          <EmployeeCard
            index={index}
            key={item.id}
            name={item.name}
            number={item.number}
            position={item.position}
            status={item.status}
          />
        ))}
      </div>
      <div className='pagination'>
        <div className='pagination-left'>
          <GoArrowLeft />
        </div>
        <div className='pagination-number'>
          1
        </div>
        <div className='pagination-number'>
          2
        </div>
        <div className='pagination-number'>
          3
        </div>
        <div className='pagination-right'>
          <GoArrowRight />
        </div>
        <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default Shifokorlar
