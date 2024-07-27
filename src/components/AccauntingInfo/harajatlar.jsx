import React from 'react'
import './style.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import HarajatCard from '../Cards/AccoauntingHarCard/index'

const harajatlar = () => {

  const Harajatlar = [
    {
      id: 1,
      name: 'Analiz',
      price: 20000,
      user: "ilhomjon solijonov",
      type: 'bank',
      date: '12.12.2024',
      status: "To'langan"
    },
    {
      id: 2,
      name: 'Analiz',
      price: 20000,
      user: "ilhomjon solijonov",
      type: 'bank',
      date: '12.12.2024',
      status: "To'langan"
    },
    {
      id: 3,
      name: 'Analiz',
      price: 20000,
      user: "ilhomjon solijonov",
      type: 'bank',
      date: '12.12.2024',
      status: "To'langan"
    },
    {
      id: 4,
      name: 'Analiz',
      price: 20000,
      user: "ilhomjon solijonov",
      type: 'bank',
      date: '12.12.2024',
      status: "To'langan"
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
      <div className='harajat-head'>
        <div>N</div>
        <div>Harajat Nomi</div>
        <div>User Ismi</div>
        <div>Summasi</div>
        <div>Turi</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <div className='payment-content'>
        {
            Harajatlar.map((item, index)=>(
            <HarajatCard 
              index={index}
              id={item.id} 
              name={item.name} 
              user={item.user} 
              type={item.type}
              price={item.price}
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

export default harajatlar
