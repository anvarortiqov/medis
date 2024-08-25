import React, { Fragment, useEffect, useState } from 'react'
import './style.css'
import EmployeeCard from '../Cards/EmployeeCard/index'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import axios from 'axios';

const Shifokorlar = () => {

  const [Data, setData] = useState([])

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/main_module/hodimlar/").then(response => {
        if (response.status === 200) {
          setData(response.data.results)
        }
      })
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const dataItem = Data.map((item, index) => <Fragment key={index}>
    <EmployeeCard
      index={index}
      name={`${item.surname} ${item.name.at(0)} ${item.middle_name?.at(0) ?? ""}`}
      number={item.phone}
      position={item.lavozimi ?? "Ko'rsatilmagan"}
      status={item.status}
    />
  </Fragment>)

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
        {dataItem.length === 0 ? "Yuklanmoqda..." : dataItem}
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
