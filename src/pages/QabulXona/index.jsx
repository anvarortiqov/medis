import React from 'react'
import MainListItem from "../../components/Cards/MainListCard/index";
import Mainavatar1 from "../../assets/images/mainlist_avatar.png";
import Mainavatar2 from "../../assets/images/mainlist_avatar2.png";
import Mainavatar3 from "../../assets/images/mainlist_avatar3.png";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './style.css'

const index = () => {
    

    const MainInfoList = [
        {
          id: 1,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar1,
        },
        {
          id: 2,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar1,
        },
        {
          id: 3,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar2,
        },
        {
          id: 4,
          name: "ilhomjon",
          surname: "Solijonov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar1,
        },
        {
          id: 5,
          name: "Muslima",
          surname: "Ortiqova",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar3,
        },
        {
          id: 6,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar2,
        },
        {
          id: 7,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar2,
        },
        {
          id: 8,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar3,
        },
        {
          id: 9,
          name: "Anvarjon",
          surname: "Ortiqov",
          year: 1998,
          month: 2,
          day: 18,
          number: 948373745,
          img: Mainavatar1,
        },
        {
            id: 9,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
          {
            id: 10,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
          {
            id: 11,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
          {
            id: 12,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
          {
            id: 13,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
          {
            id: 14,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
          {
            id: 15,
            name: "Anvarjon",
            surname: "Ortiqov",
            year: 1998,
            month: 2,
            day: 18,
            number: 948373745,
            img: Mainavatar1,
          },
      ];

  return (
    <div className="main-page_bottom">
      <div className='qabulhona-head'>
        <h1 className='qabulhona-title'>Kasallar Ro'yhati: </h1>
        <Link to="add-patient"><button className='qabulhona-btn form-btn'>Bemor Qo'shish<FaPlus/></button></Link>
      </div>
        <form>
          <input
            className="main-head_from-items input-style"
            type="text"
            placeholder="Ism"
          />
          <input
            className="main-head_from-items input-style"
            type="text"
            placeholder="Familiya"
          />
          <input
            className="main-head_from-items input-style"
            type="date"
            placeholder="Tug'ulgan kun"
          />
          <input
            className="main-head_from-items input-style"
            type="number"
            placeholder="Telefon Raqam"
          />
        </form>
        <ul className="main-bottom_left-classlist">
          {MainInfoList.map((patientitem) => (
            <div >
                <MainListItem
                    key={patientitem.id}
                    name={patientitem.name}
                    surname={patientitem.surname}
                    year={patientitem.year}
                    month={patientitem.month}
                    day={patientitem.day}
                    number={patientitem.number}
                    img={patientitem.img}
                />
            </div>
          ))}
        </ul>
      </div>
  )
}

export default index
