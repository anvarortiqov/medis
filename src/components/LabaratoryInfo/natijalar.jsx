import React from 'react'
import './style.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import LabaratoryCard2 from '../Cards/LabaratoryCard2/index'
import { FaDownload } from "react-icons/fa6";

const natijalar = () => {

  const Massaj = [
    {
      id: 1,
      name: "Ali Yuldashev",
      date: "12,05,2024", 
      status: "Tayyor", 
      servicetype: "Qon Analizi"
    },
    {
      id: 2,
      name: "Ali Yuldashev",
      date: "12,05,2024", 
      status: "In proccess", 
      servicetype: "Qon Analizi"
    },
    {
      id: 3,
      name: "Ali Yuldashev",
      date: "12,05,2024",  
      status: "Tayyor", 
      servicetype: "Qon Analizi"
    },
    {
      id: 4,
      name: "Ali Yuldashev",
      date: "12,05,2024", 
      status: "Tayyor", 
      servicetype: "Qon Analizi"
    },
    {
      id: 5,
      name: "Ali Yuldashev",
      date: "12,05,2024", 
      status: "Tayyor", 
      servicetype: "Qon Analizi"
    },
    {
      id: 6,
      name: "Ali Yuldashev",
      date: "12,05,2024", 
      status: "Tayyor", 
      servicetype: "Qon Analizi"
    },
    
  ]

  return (
    <div className='results-analyses'>
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
        <div>Bemor Ismi</div>
        <div>Servis Turi</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <div className='massaj-content'>
        {Massaj.map((item,index) => (
          <LabaratoryCard2
            index={index}
            key={item.id}
            name={item.name}
            date={item.date}
            servicetype={item.servicetype}
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

export default natijalar
