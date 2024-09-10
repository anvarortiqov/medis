import React, { useMemo, useState } from 'react'
import './style.css'
import { usePDF } from 'react-to-pdf';
import ServiceCard from '../Cards/ServiceCard/index'
import { FaDownload } from "react-icons/fa6";
import { Dropdown, Input } from '../Form';

import Pagination from '../Pagination/index';
import axios from 'axios';

const massaj = () => {

  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  const [Data, setData] = useState([]);

  const data = useMemo(async () => {

    try {
      const response = await axios.get(import.meta.env.VITE_API + "/management/xizmat/");
      if (response.status < 400) {
        setData(response.data.results);
      }
    } catch (error) {
      console.error(error)
    }

    return Data
  }, []);

  const item = Data.map((item, index) => (
    <ServiceCard
      index={index}
      key={index}
      name={item.name}
      price={parseFloat(item.amount)}
      doctor={item.doctor}
      status={item.status}
      data={item}
    />
  ))

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
        {item.length === 0 ? "Yuklanmoqda..." : item}
      </div>
      <div className="pagination">
        <Pagination current={1} total={3} />
        <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default massaj
