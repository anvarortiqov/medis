import React from 'react'
import './style.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
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
      <div className='rooms-head rooms-head-wrapper'>
        <Input required={{ required: true, message: "Kiriting!" }} placeholder={"Serach..."} />

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
      </div>
    </div>
  )
}

export default payments
