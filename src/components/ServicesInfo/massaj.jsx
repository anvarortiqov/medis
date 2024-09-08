import React from 'react'
import './style.css'
import { usePDF } from 'react-to-pdf';
import ServiceCard from '../Cards/ServiceCard/index'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { Dropdown, Input } from '../Form';
import Pagination from '../Pagination';

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

  ]

  return (
    <div className='massaj'>
      <div className='rooms-head '>
        <Input required={{ required: true, message: "Kiriting!" }} placeholder={"Serach..."} />
        <div></div>
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
        <Pagination current={1} total={10} />
      </div>
    </div>
  )
}

export default massaj
