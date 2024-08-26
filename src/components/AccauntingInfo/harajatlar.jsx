import React from 'react'
import './style.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import HarajatCard from '../Cards/AccoauntingHarCard/index'
import { Dropdown, Input } from '../Form';

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
        <Input required={{ required: true, message: "Kiriting!" }} placeholder={"Serach..."} />
        <div></div>
        <Dropdown options={[
          { value: "ACTIVE", label: "ACTIVE" },
          { value: "DELETED", label: "DELETED" }
        ]} />

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
          Harajatlar.map((item, index) => (
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
