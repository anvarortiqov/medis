import React from 'react'
import './style.css'
import { usePDF } from 'react-to-pdf';
import ServiceCard from '../Cards/ServiceCard/index'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";

const massaj = () => {
   
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  const Massaj = [
    {
      id: 1,
      name: "fziyo terapia",
      price: 123000, 
      status: "faol", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 2,
      name: "fziyo terapia",
      price: 123000, 
      status: "no faol", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 3,
      name: "fziyo terapia",
      price: 123000, 
      status: "bo'sh", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 4,
      name: "fziyo terapia",
      price: 123000, 
      status: "bo'sh", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 5,
      name: "fziyo terapia",
      price: 123000, 
      status: "bo'sh", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 6,
      name: "fziyo terapia",
      price: 123000, 
      status: "bo'sh", 
      doctor: "Anvarjon Artiqov"
    },
    
  ]

  return (
    <div className='massaj'>
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
        <div>Serviec Name</div>
        <div>Doctor</div>
        <div>Price</div>
        <div>Status</div>
      </div>
      <div className='massaj-content'  ref={targetRef}>
        {Massaj.map((item,index) => (
          <ServiceCard
            index={index}
            key={item.id}
            name={item.name}
            price={item.price}
            doctor={item.doctor}
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
        <button className='form-btn pagination-btn-download' onClick={() => toPDF()}><FaDownload /></button>
      </div>
    </div>
  )
}

export default massaj
