import React from 'react'
import './style.css'
import LabaratoryCard from '../Cards/LabarotoryCard/index'
import { FaDownload } from "react-icons/fa6";
import { Dropdown, Input } from '../Form';
import Pagination from '../Pagination/index';

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

  ]

  return (
    <div className='results-analyses'>
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
        <div>Analiz Turi</div>
        <div>Doktor</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <div className='massaj-content'>
        {Massaj.map((item, index) => (
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
      <div className="pagination">
          <Pagination current={1} total={3} />
          <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default allanalyses
