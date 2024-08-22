import "./style.css";
import { FaPlus } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function index() {
  

  const navigate = useNavigate();

  useEffect(() => {
    // Проверка, посещал ли пользователь сайт ранее
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      // Установка флага в localStorage
      localStorage.setItem('hasVisited', 'true');
      // Перенаправление пользователя на другой маршрут
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="main-page">
      <div className="main-page_head">
        <h1 className="main-page-head_title">Kunlik Statistika</h1>
        <ul className="main-page-head_statistics">
          <li>
            <BsCashCoin className="main-page-head_icon" />
            <h4>Kunlik Tushum(Naqt)</h4>
            <h3>
              10.000.000 <div>so'm</div>
            </h3>
          </li>
          <li>
            <FaMoneyCheckDollar className="main-page-head_icon" />
            <h4>Kunlik Tushum(Karta)</h4>
            <h3>
              10.000.000 <div>so'm</div>
            </h3>
          </li>
          <li>
            <button >
              <FaPlus className="main-acceptence_card-btn" />
            </button>
            <h3>Xizmat Qo'shish</h3>
          </li>
          <li>
            <button>
              <FaPlus className="main-acceptence_card-btn" />
            </button>
            <h3>Hona Qo'shish</h3>
          </li>
          <li>
            <button>
              <FaPlus className="main-acceptence_card-btn" />
            </button>
            <h3>Online navbat</h3>
          </li>
        </ul>
      </div>
      {/* <div className="main-page_bottom">
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
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default index;

