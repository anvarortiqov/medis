import {useState} from 'react'
import "./style.css"

const index = () => {

  const [category, setCategory]=useState("default")
  

  return (
    <div className='add-employee'>
      <form className='add-emoloyee-content'>
        <div className='add-employee-left'>
          <div>
            <label className='form-label-style' htmlFor="ism">Ism</label>
            <input className='input-style' type="text" name='ism' placeholder='Ismingizni kiriting' required />
          </div>
          <div>
            <label className='form-label-style' htmlFor="familiya">Familiya</label>
            <input className='input-style' type="text" name='familiya' placeholder='Familiyangizni kiriting' required  />
          </div>
          <div>
            <label className='form-label-style' htmlFor="ochestva">Ochestva</label>
            <input className='input-style' type="text" name='ochestva' placeholder='Ochestvangizni kiriting' required />
          </div>         
          <div>
            <label className='form-label-style' htmlFor="birthday">Tugulgan kun</label>
            <input className='input-style' type="date" name='birthday' placeholder='Tugulgan kun' required />
          </div>      
          <div>
            <label className='form-label-style' htmlFor="tel">Telefon Raqam</label>
            <input className='input-style' type="tel" name='tel' placeholder='Telefon Raqam' required />
          </div>  
          <div>
            <label className='form-label-style' htmlFor="tel2">Qo'shimcha Telefon Raqam</label>
            <input className='input-style' type="tel" name='tel2' placeholder="Qo'shimcha Telefon Raqam" />
          </div>  
          <div>
            <label className='form-label-style' htmlFor="email">Email</label>
            <input className='input-style' type="email" name='email' placeholder='Emailingizni kiriting' required />
          </div>  
          <div>
            <label className='form-label-style' htmlFor="address">Address</label>
            <input className='input-style' type="text" name='address' placeholder='Adresingizni kiriting' required />
          </div>  
          <div>
            <label className='form-label-style' htmlFor="lavozm">Lavozim</label>
            <select className='input-style' name="lavozm" required>
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
            <input className='input-style' type="file" name='image' placeholder='Rasmingizni kiriting' required />
          </div> 
          <div className='add-employee-textarea'>
            <label className='form-label-style' htmlFor="extra">Qo'shimcha Malumot</label>
            <textarea className='input-style'  type="text" name='extra' placeholder="Qo'shimcha malumot bolsa kiriting" />
          </div> 
          <div>
            <label className='form-label-style' htmlFor="ser5">Status</label>
            <select className='input-style' name="ser5"  required>
                <option value="default" disabled>Statusni Tanlang</option>
                <option value="1" >Faol</option>
                <option value="2" >No Faol</option>
            </select>
          </div>
          
          <div className='ish-vaqti'>
            <label className='form-label-style' htmlFor="">Ish Vaqti</label>
            <div>
              <input type="checkbox" id='dush' />
              <label htmlFor="dush">Dushanba</label>
            </div>
            <div>
              <input type="checkbox" id='dush2' />
              <label htmlFor="dush2">Seshanba</label>
            </div>
            <div>
              <input type="checkbox" id='dush3'  />
              <label htmlFor="dush3">Chorshanba</label>
            </div>
            <div>
              <input type="checkbox" id='dush4' />
              <label htmlFor="dush4">Payshanba</label>
            </div>
            <div>
              <input type="checkbox" id='dush5' />
              <label htmlFor="dush5">Juma</label>
            </div>
            <div>
              <input type="checkbox" id='dush6' />
              <label htmlFor="dush6">Shanba</label>
            </div>
            <div>
              <input type="checkbox" id='dush7' />
              <label htmlFor="dush7">Yakshanba</label>
            </div>
          </div>
          <div className='ish-vaqti2'>
            <div>
            <label className='form-label-style' htmlFor="">Boshlanish Vaqti</label>
            <label className='form-label-style' htmlFor="">Tugash Vaqti</label>
            </div>
            <div>
              <input type="time" className='input-style'  />
              <input type="time" className='input-style'  />
            </div>
            <div>
              <input type="time" className='input-style' />
              <input type="time" className='input-style'  />
            </div>
            <div>
              <input type="time" className='input-style'  />
              <input type="time" className='input-style'  />
            </div>
            <div>
              <input type="time" className='input-style' />
              <input type="time" className='input-style'  />
            </div>
            <div>
              <input type="time" className='input-style' />
              <input type="time" className='input-style'  />
            </div>
            <div>
              <input type="time" className='input-style' />
              <input type="time" className='input-style'  />
            </div>
            <div>
              <input type="time" className='input-style' />
              <input type="time" className='input-style'  />
            </div>
          </div>
        </div>  
        <div className='add-employee-right'>
          <div className='add-employee-salary'>
            <label className='form-label-style' htmlFor="oylik">Oylik Turini tanlang</label>
            <select className='input-style' name="oylik" onChange={(cat)=>{setCategory(cat.target.value)}} defaultValue={"default"} >
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
                    <select  className='input-style' name='fixed'>
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
                    <select  className='input-style' name='fixed'>
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
                    <select  className='input-style' name='fixed'>
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
        
      </form>
    </div>
  )
}

export default index
