import React from 'react'
import './style.css'
import Pagination from '../Pagination/index'
import { FaDownload } from "react-icons/fa6";
import PaymentsCard from "../Cards/AccountingFeeCard/index"
import { Dropdown, Input } from '../Form';

const payments = () => {

  const Payments = [
    {
      id: 1,
      name: "ilhomjon Solijonov",
      name2: "Anvar Ortiqov",
      reason: "Qon Analizi",
      feetype: "cash",
      price: 2000,
      feeid: "12g324h5g",
      date: "12/12/2024, 16:20",
      status: "To'langan"
    },
    {
      id: 2,
      name: "ilhomjon Solijonov",
      name2: "Anvar Ortiqov",
      reason: "Qon Analizi",
      feetype: "cash",
      price: 2000,
      feeid: "12g324h5g",
      date: "12/12/2024, 16:20",
      status: "To'langan"
    },
    {
      id: 3,
      name: "ilhomjon Solijonov",
      name2: "Anvar Ortiqov",
      reason: "Qon Analizi",
      feetype: "cash",
      price: 2000,
      feeid: "12g324h5g",
      date: "12/12/2024, 16:20",
      status: "To'langan"
    },
    {
      id: 4,
      name: "ilhomjon Solijonov",
      name2: "Anvar Ortiqov",
      reason: "Qon Analizi",
      feetype: "cash",
      price: 2000,
      feeid: "12g324h5g",
      date: "12/12/2024, 16:20",
      status: "To'langan"
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

      <div className='payment-head'>
        <div>N</div>
        <div>Tolovchi F.I.O</div>
        <div>To'lov Sababi</div>
        <div>Summa</div>
        <div>To'lov turi</div>
        <div>To'lov Id</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <div className='payment-content'>
        {
          Payments.map((item, index) => (
            <PaymentsCard
              index={index}
              id={item.id}
              name={item.name}
              price={item.price}
              reason={item.reason}
              feetype={item.feetype}
              feeid={item.feeid}
              date={item.date}
              status={item.status}
            />
          ))
        }
      </div>
      <div className="pagination">
          <Pagination current={1} total={3} />
          <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default payments
