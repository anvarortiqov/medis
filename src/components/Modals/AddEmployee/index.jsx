import { useState } from 'react'
import "./style.css"
import Form from '../../Form'
import WorkingTime from './WorkingTime'

const index = () => {

  const [category, setCategory] = useState("default")

  const onFinish = async (values) => {
    console.log({
      ...values,
      working_hours: [

      ]
    });
  }

  return (
    <div className='add-employee' style={{ padding: 20 }}>
      <Form onFininsh={onFinish} className='add-emoloyee-content'>
        <div className='add-employee-left'>
          <div>
            <label className='form-label-style' htmlFor="ism">Ism</label>
            <input className='input-style' type="text" name='name' placeholder='Ismingizni kiriting' required />
          </div>
          <div>
            <label className='form-label-style' htmlFor="familiya">Familiya</label>
            <input className='input-style' type="text" name='surname' placeholder='Familiyangizni kiriting' required />
          </div>
          <div>
            <label className='form-label-style' htmlFor="middle-name">Sharif</label>
            <input className='input-style' type="text" id='middle-name' name='middle_name' placeholder='Sharifingizni kiriting' />
          </div>
          <div>
            <label className='form-label-style' htmlFor="birthday">Tugulgan kun</label>
            <input className='input-style' type="date" name='birthday' placeholder='Tugulgan kun' required />
          </div>
          <div>
            <label className='form-label-style' htmlFor="tel">Telefon Raqam</label>
            <input className='input-style' type="text" name='phone' placeholder='(xx)-xxx-xx-xx' />
          </div>
          <div>
            <label className='form-label-style' htmlFor="tel2">Qo'shimcha Telefon Raqam</label>
            <input className='input-style' type="tel" name='extra_phone' placeholder="Qo'shimcha Telefon Raqam" />
          </div>
          <div>
            <label className='form-label-style' htmlFor="email">Email</label>
            <input className='input-style' type="email" name='email' placeholder='Emailingizni kiriting' />
          </div>
          <div>
            <label className='form-label-style' htmlFor="address">Address</label>
            <input className='input-style' type="text" name='address' placeholder='Adresingizni kiriting' />
          </div>
          <div>
            <label className='form-label-style' htmlFor="lavozm">Lavozim</label>
            <select className='input-style' name="lavozimi" >
              <option value="" disabled>Lavozimni tanlang</option>
              <option value="1" >Vrach</option>
              <option value="2" >Hamshira</option>
              <option value="3" >Kardiolog</option>
              <option value="4" >Urolog</option>
              <option value="5" >Lor</option>
            </select>
          </div>
          <div>
            <label className='form-label-style' htmlFor="image">Rasm</label>
            <input className='input-style' type="file" name='image' placeholder='Rasmingizni kiriting' />
          </div>
          <div className='add-employee-textarea'>
            <label className='form-label-style' htmlFor="extra">Qo'shimcha Malumot</label>
            <textarea className='input-style' type="text" name='extra' placeholder="Qo'shimcha malumot bolsa kiriting" />
          </div>
          <div>
            <label className='form-label-style' htmlFor="ser5">Status</label>
            <select className='input-style' name="ser5" >
              <option value="default" disabled>Statusni Tanlang</option>
              <option value="1" >Faol</option>
              <option value="2" >No Faol</option>
            </select>
          </div>

          <WorkingTime />
        </div>
        <div className='add-employee-right'>
          <div className='add-employee-salary'>
            <label className='form-label-style' htmlFor="oylik">Oylik Turini tanlang</label>
            <select className='input-style' name="oylik" onChange={(cat) => { setCategory(cat.target.value) }} defaultValue={"default"} >
              <option value="default" disabled>Oylik Turini tanlang</option>
              <option value="fixed" >Fixed</option>
              <option value="kpi" >KPI</option>
            </select>
          </div>
          {category == 'fixed'
            ?
            (
              <div className="add-employee-fixed ">
                <label className='form-label-style' htmlFor="fixed">Fixed Salary</label>
                <input className='input-style' type="number" name='fixed' placeholder='Input Fixed Salary' />
              </div>
            )
            :
            ("")
          }
          {category == 'kpi'
            ?
            (
              <div className='add-kpi'>
                <div className="add-employee-fixed ">
                  <label className='form-label-style form-label-style3' htmlFor="fixed">Fixed Salary</label>
                  <input className='input-style' type="number" name='fixed' placeholder='Input Fixed Salary' />
                </div>
                <div>
                  <label className='form-label-style' htmlFor="fixed">Ko'rik</label>
                  <div className="add-employee-kpi">
                    <input className='input-style' type="number" name='fixed' placeholder='Input Fixed Salary' />
                    <select className='input-style' name='fixed'>
                      <option value="default" disabled>Type</option>
                      <option value="percent" >Percent</option>
                      <option value="number" >Number</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className='form-label-style' htmlFor="fixed">Analiz</label>
                  <div className="add-employee-kpi">
                    <input className='input-style' type="number" name='fixed' placeholder='Input Fixed Salary' />
                    <select className='input-style' name='fixed'>
                      <option value="default" disabled>Type</option>
                      <option value="percent" >Percent</option>
                      <option value="number" >Number</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className='form-label-style' htmlFor="fixed">Statsionar</label>
                  <div className="add-employee-kpi">
                    <input className='input-style' type="number" name='fixed' placeholder='Input Fixed Salary' />
                    <select className='input-style' name='fixed'>
                      <option value="default" disabled>Type</option>
                      <option value="percent" >Percent</option>
                      <option value="number" >Number</option>
                    </select>
                  </div>
                </div>
              </div>
            )
            :
            ("")
          }
        </div>
        <div className='add-employee-btn'>
          <button className='form-btn'>Submit</button>
        </div>

      </Form>
    </div>
  )
}

export default index
