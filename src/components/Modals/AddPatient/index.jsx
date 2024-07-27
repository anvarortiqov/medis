import {React} from 'react'
import './style.css'
import {TiBackspace} from 'react-icons/ti'


const index = () => {
  const PatientHandler = ()=> {
    let patientadd = document.querySelector('.add-patinet')
    patientadd.classList.toggle('add-patient-exist')
  }

  return (
    <div className='add-patinet'>
        <div className='add-patient_content'>
          <div className='add-patient_head'>
            <h1>Bemor ma’lumotlari</h1>
            <p>Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</p>
            <hr className='addpatient-hr' />
            <TiBackspace onClick={PatientHandler} className='add-patient_content-backspace' />
          </div>
          <form className='add-patient_form'  >
            <div className='add-patient-form_child'>
              <div>
                <label className='form-label-style' for="#ism">Ism Familiya</label>
                <input className='input-style' type="text" id='ism' placeholder='Ortiqov Anvar'  disabled />
              </div>
              <div>
                <label className='form-label-style' for="#number">Tel-Raqam</label>
                <input  className='input-style' type="number" id='number' placeholder='(998) 99 254 24 84'  disabled />
              </div>
              <div>
                <label className='form-label-style' for="#number">Ko'rik narxi</label>
                <input className='input-style' type="number" id='number' placeholder="40 000 so'm"  disabled />
              </div>
              <div>
                <label className='form-label-style' htmlFor="#select">Shifokorni tanlang</label>
                <select className='addpatient-select' required id="select"  >
                  <option value="">Shifkor - bo'lim</option>
                  <option value="1">Aliyev Bobur - dermatolog</option>
                  <option value="1">Ali Vali - kardiolog</option>
                </select>
              </div>
              <btnblock className='add-patient-tolov-holati'>
                <label className='form-label-style' htmlFor="tolovholati">To'lov xolati</label>
                <div id='tolovholati'>
                  <button>To'landi</button>
                  <button>To'lanmadi</button>
                </div> 
              </btnblock>
              <div  >
                <button className='add-patient-form_btn'>Malumotlarni yuklash</button> 
              </div>
            </div>
            <div  className='add-patient-form_child2'>
              <div>
                <label className='form-label-style' htmlFor="#textarea1">Kasalliklari</label>
                <textarea id="textarea1" cols="20" rows="7"></textarea>
              </div>
              <div>
                <label className='form-label-style' htmlFor="#textarea2">Qo'shimcha Malumotlar</label>
                <textarea id="textarea2" cols="20" rows="7"></textarea>
              </div>
            </div>
          </form>  
        </div>
    </div>
  )
}

export default index