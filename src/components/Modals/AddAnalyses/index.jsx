import {useState} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { SlashCommand } from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';


const index = () => {


  const navigate = useNavigate();
    const [category, setCategory] = useState("default");

    const handleClick = ()=> {
        if(category == 'new'){
            navigate("../newequipment")
        }else{
            console.log("You have a problem with navigate")
        }
    }


  return (
    <div className='add-employee'>
      <form className='add-analys-content'>
        <div>
          <label className='form-label-style' htmlFor="name">Analiz Nomi</label>
          <input className='input-style' type="text" name='name' placeholder='Analiz nomini kiriting' required />  
        </div>    
        <div>
          <label className='form-label-style' htmlFor="vaqt">Tahminiy Vaqt</label>
          <input className='input-style' type="text" name='vaqt' placeholder='Tahminiy vaqt kiriting' required />  
        </div>    
        <div>
          <label className='form-label-style' htmlFor="cost">Narxi</label>
          <input className='input-style' type="number" name='cost' placeholder='Narhini kiriting' required />  
        </div>    
        <div>
          <label className='form-label-style' htmlFor="lab">Labarant</label>
          <select  className='input-style't name="lab" >
            <option value="default" disabled>Labaranti tanlang</option>
            <option value="1">Anvarjon Ortiqov</option>
            <option value="2">Anvarjon Ortiqov</option>
            <option value="3">Anvarjon Ortiqov</option>
            <option value="4">Anvarjon Ortiqov</option>
          </select>
        </div>          
        <div>
          <label className='form-label-style' htmlFor="lab">Takshiruv qurilmalar</label>
          <select className='input-style' name="lab" onClick={handleClick}  onChange={(cat)=>{setCategory(cat.target.value)}} defaultValue={"default"}>
            <option value="default" disabled>Qurilmani tanlang</option>
            <option value="new">Yangi Qo'shish</option>
            <option value="1">EMRT</option>
            <option value="2">UZI</option>
          </select>
        </div>  
        <div>
          <label className='form-label-style' htmlFor="lab">Xona</label>
          <select className='input-style' name="lab" >
            <option value="default" disabled>Xonani tanlang</option>
            <option value="1">22 xona</option>
            <option value="2">12 xona</option>
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
        <div>
          <label className='form-label-style' htmlFor="date">Qo'shilgan sana</label>
          <input className='input-style' type="date" name='date' placeholder='Sanani kiriting' required />  
        </div>
        <div>
          {/* <label className='form-label-style' htmlFor="file">Shablon</label> */}
          <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, SlashCommand, Undo
                ],
                licenseKey: '<YOUR_LICENSE_KEY>',
                mention: { 
                    // Mention configuration
                },
                initialData: '<p>Shablon!</p>',
            } }
          /> 
        </div>
        <button className='form-btn'>Saqlash</button> 
      </form>
    </div>
  )
}

export default index
