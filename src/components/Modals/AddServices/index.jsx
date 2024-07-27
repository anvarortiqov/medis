import {useState} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("default");

    const handleClick = ()=> {
        if(category == 'new'){
            navigate("../newservicetype")
        }else{
            console.log("You have a problem with navigate")
        }
    }

  return (
    <div className='add-employee'>
      <form className='add-analys-content'>
        <div>
            <label className='form-label-style' htmlFor="ser">Xizmat nomi</label>
            <input className='input-style' type="text" name='ser' placeholder="Hizmat nomi" required/>
        </div>
        <div>
            <label className='form-label-style' htmlFor="ser2">Xizmat Turi</label>
            <select className='input-style' name="ser2" onClick={handleClick}  onChange={(cat)=>{setCategory(cat.target.value)}} defaultValue={"default"}>
                <option value="default" disabled>Hizmat Turni Tanlang</option>
                <option value="new">Yangi Qo'shish</option>
                <option value="1" >Fiziyo Terapiya</option>
                <option value="2" >Fiziyo Terapiya</option>
            </select>
        </div>
        <div>
            <label className='form-label-style' htmlFor="cost">Xizmat Narxi</label>
            <input className='input-style' type="number" name='cost' placeholder="Hizmat Narxi" required/>
        </div>
        <div>
            <label className='form-label-style' htmlFor="ser3">Xona</label>
            <select className='input-style' name="ser3">
                <option value="default" disabled>Xonani Tanlang</option>
                <option value="1" >22 xona</option>
                <option value="2" >12 xona</option>
            </select>
        </div>
        <div>
            <label className='form-label-style' htmlFor="ser4">Shifokor</label>
            <select className='input-style' name="ser4">
                <option value="default" disabled>Shifokorni Tanlang</option>
                <option value="1" >Anvarjon Ortqivo</option>
                <option value="2" >Anvarjon Ortiqov</option>
            </select>
        </div>
        <div>
            <label className='form-label-style' htmlFor="ser5">Status</label>
            <select className='input-style' name="ser5">
                <option value="default" disabled>Statusni Tanlang</option>
                <option value="1" >Faol</option>
                <option value="2" >No Faol</option>
            </select>
        </div>
        <div className='add-employee-textarea'>
            <label className='form-label-style' htmlFor="ser6">Tavsiri</label>
            <textarea className='input-style' name="ser6" placeholder='Tasvirlab bering'></textarea>
        </div>
        <button className='form-btn'>Saqlash</button>
      </form>
    </div>
  )
}

export default index
