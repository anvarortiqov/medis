import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import LabaratoryCard from '../Cards/LabarotoryCard/index'
import { FaDownload } from "react-icons/fa6";

const allanalyses = () => {

  const Massaj = [
    {
      id: 1,
      name: "Peshvob",
      date: "12,05,2024", 
      status: "Tayyor", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 2,
      name: "Qon Analizi",
      date: "12,05,2024", 
      status: "In proccess", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 3,
      name: "Qon Analizi",
      date: "12,05,2024",  
      status: "Tayyor", 
      doctor: "ilhomjon solijonov"
    },
    {
      id: 4,
      name: "Qon Analizi",
      date: "12,05,2024", 
      status: "Tayyor", 
      doctor: "Anvarjon Artiqov"
    },
    {
      id: 5,
      name: "fziyo terapia",
      date: "12,05,2024", 
      status: "Tayyor", 
      doctor: "Anvarjon Artiqov"
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
        <div>Analiz Turi</div>
        <div>Doktor</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <div className='massaj-content'>
        {Massaj.map((item,index) => (
          <LabaratoryCard
            index={index}
            key={item.id}
            name={item.name}
            date={item.date}
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
        <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default allanalyses
