import React from "react";
import "./style.css";
import { TiBackspace } from "react-icons/ti";

const index = () => {
  const SelectServiceHandler = () => {
    let patientadd3 = document.querySelector(".select-service");
    patientadd3.classList.toggle("select-service-exist");
  };

  return (
    <div className="select-service">
      <div className="select-service_content">
        <div className="select-service_head">
          <h1>Xizmatlardan foydalanish</h1>
          <p>
            Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !
          </p>
          <hr className="select-service-hr" />
          <TiBackspace
            onClick={SelectServiceHandler}
            className="select-service-backspace"
          />
        </div>
        <form className="select-service_form">
          <div className="select-service_form-top">
            <div>
              <label className='form-label-style' htmlFor="#ismfam">Ism Familiya</label>
              <input
                className='input-style'
                type="text"
                id="ismfam"
                placeholder="Anvar Ortiqov"
                disabled
              />
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype">Xizmat turini tanlang</label>
              <select id="servicetype">
                <option value="1">Massaj - 10 minut</option>
                <option value="2">Massaj - 10 minut</option>
                <option value="3">Massaj - 10 minut</option>
                <option value="4">Massaj - 10 minut</option>
              </select>
            </div>
          </div>
          <div className="select-service_form-textarea">
            <label className='form-label-style' htmlFor="#extrainfo">Qo'shimcha Malumotlar</label>
                <textarea id="extrainfo" cols="30" rows="5"></textarea>
           </div>
          <div className="select-service_form-bottom">
            <p>Qo'shimcha malumotlar</p>
            <p>Shifokor Ismi: <h4>Aliyev Bobur</h4></p>
            <p>Xizmat Narxi: <h4>40 000 so'm</h4></p>
            <p>Sana: <h4>10/02/2024 10:23</h4></p>
          </div>
          <button>Band Qilish</button>
        </form>
      </div>
    </div>
  );
};

export default index;
