import React from "react";
import "./style.css";
import { TiBackspace } from "react-icons/ti";

const index = () => {
  const TakeAnalyseHandler = () => {
    let patientadd3 = document.querySelector(".take-analyse");
    patientadd3.classList.toggle("select-service-exist");
  };

  return (
    <div className="take-analyse">
      <div className="select-service_content">
        <div className="select-service_head">
          <h1>Analiz topshirish</h1>
          <p>
            Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !
          </p>
          <hr className="select-service-hr" />
          <TiBackspace
            onClick={TakeAnalyseHandler}
            className="select-service-backspace"
          />
        </div>
        <form className="take-analyse_form">
          <div className="take-analyse_form-top">
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
              <label className='form-label-style' htmlFor="servicetype">Analizni tanlang</label>
              <select id="servicetype">
                <option value="1">Qon</option>
                <option value="2">Qon</option>
                <option value="3">Qon</option>
                <option value="4">Qon</option>
              </select>
            </div>
            <div>
              <label className='form-label-style' htmlFor="servicetype1">Turni tanlang</label>
              <select id="servicetype1">
                <option value="1">Umumiy qon tahlili</option>
                <option value="2">Umumiy qon tahlili</option>
                <option value="3">Umumiy qon tahlili</option>
                <option value="4">Umumiy qon tahlili</option>
              </select>
            </div>
            <div>
                <button>Band Qilish</button>
            </div>
          </div>
          <div className="take-analyse_form-textarea">
            <label className='form-label-style' htmlFor="#extrainfo">Qo'shimcha Malumotlar</label>
            <textarea id="extrainfo" cols="30" rows="5"></textarea>
           </div>
          <div className="take-analyse_form-bottom">
            <div>Qo'shimcha malumotlar</div>
            <div>Shifokor Ismi: <h4>Aliyev Bobur</h4></div>
            <div>Xizmat Narxi: <h4>40 000 so'm</h4></div>
            <div>Sana: <h4>10/02/2024 10:23</h4></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
