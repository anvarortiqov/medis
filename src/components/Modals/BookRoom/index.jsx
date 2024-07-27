import React from "react";
import "./style.css";
import { TiBackspace } from "react-icons/ti";

const index = () => {
  const BookRoomtHandler = () => {
    let patientadd = document.querySelector(".book-room");
    patientadd.classList.toggle("book-room-exist");
  };

  return (
    <div className="book-room">
      <div className="book-room_content">
        <div className="book-room_head">
          <h1>Xona band qilish</h1>
          <p>
            Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !
          </p>
          <hr className="book-room-hr" />
          <TiBackspace
            onClick={BookRoomtHandler}
            className="book-room_content-backspace"
          />
        </div>
        <form className="book-room_form">
          <div className="book-room-up">
            <div>
              <label className='form-label-style' htmlFor="#ismfam">Ism Familiyia</label>
              <input
                className='input-style'
                type="text"
                placeholder="Anvarjon Ortiqov"
                id="ismfam"
                disabled
              />
            </div>
            <div>
              <label className='form-label-style' htmlFor="#number">Telefon raqam</label>
              <input
                 className='input-style'
                type="text"
                placeholder="(998) 99 074 72 72"
                id="number"
                disabled
              />
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype">Shifokorni tanlang</label>
              <select id="servicetype">
                <option value="1">Aliyev Bobur - dermatolog</option>
                <option value="2">Massaj - 10 minut</option>
                <option value="3">Massaj - 10 minut</option>
                <option value="4">Massaj - 10 minut</option>
              </select>
            </div>
          </div>
          <div className="book-room-center">
            <div>
              <label className='form-label-style' htmlFor="servicetype1">Xona qavati</label>
              <select id="servicetype1">
                <option value="1">1 - qavat</option>
                <option value="2">2 - qavat</option>
                <option value="3">3 - qavat</option>
              </select>
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype2">Xona sig'imi</label>
              <select id="servicetype2">
                <option value="1">1 - odam</option>
                <option value="2">2 - odam</option>
                <option value="3">3 - odam</option>
              </select>
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype3">Xona Turi</label>
              <select id="servicetype3">
                <option value="1">Standard</option>
                <option value="2">Premium</option>
                <option value="3">Premium Plus</option>
              </select>
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype4">Xona raqami</label>
              <select id="servicetype4">
                <option value="1">11A</option>
                <option value="2">16A</option>
                <option value="3">15B</option>
              </select>
            </div>
            <div>
              <label className='form-label-style' htmlFor="#began">Boshlanish Sanasi</label>
              <input  className='input-style' type="text" placeholder="05.10.2024" id="begun" disabled />
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype5">Necha Kun</label>
              <select id="servicetype5">
                <option value="1">1 kun</option>
                <option value="2">2 kun</option>
                <option value="3">3 kun</option>
              </select>
            </div>
          </div>
          <div className="book-room-down">
            <div>
              <label className='form-label-style' htmlFor="textarea1">Kasallilari</label>
              <textarea  id="textarea1" cols="30" placeholder="kasalliklari xaqida" rows="6"></textarea>
            </div>
            <div>
              <label className='form-label-style' htmlFor="textarea2">Qo'shimcha malumotlar</label>
              <textarea id="textarea2" cols="30" placeholder="Qoshimcha malumtlar" rows="6"></textarea>
            </div>
            <result className="book-room_result">
              <div>
                <label className='form-label-style' htmlFor="#narxi">Xona narxi (kunlik)</label>
                <input
                  className='input-style'
                  type="text"
                  placeholder="200 000 som"
                  id="narxi"
                  disabled
                />
              </div>
              <div>
                <label className='form-label-style' htmlFor="#overall">Jami</label>
                <input
                   className='input-style'
                  type="text"
                  placeholder="800 000 som"
                  id="overall"
                  disabled
                />
              </div>
              <button>
                Qabulga yozilish
              </button>
            </result>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
