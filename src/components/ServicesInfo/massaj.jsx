import React from 'react'
import './style.css'
import { usePDF } from 'react-to-pdf';
import ServiceCard from '../Cards/ServiceCard/index'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { Dropdown, Input } from '../Form';

const massaj = () => {

  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

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
      <div className='rooms-head rooms-head-wrapper'>
        <Input required={{ required: true, message: "Kiriting!" }} placeholder={"Serach..."} />

        <Dropdown options={[
          { value: "ACTIVE", label: "ACTIVE" },
          { value: "DELETED", label: "DELETED" }
        ]} />
      </div>

      <div className='massaj-head'>
        <div>N</div>
        <div>Serviec Name</div>
        <div>Doctor</div>
        <div>Price</div>
        <div>Status</div>
      </div>
      <div className='massaj-content' ref={targetRef}>
        {Massaj.map((item, index) => (
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
