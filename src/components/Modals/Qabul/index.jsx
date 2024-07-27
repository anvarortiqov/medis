import React, { useState } from 'react'
import "./style.css"
import { FaPlus } from "react-icons/fa6";
import { usePDF } from 'react-to-pdf';
import QabulCard from '../../Cards/QabulCard/index'
import { MdDeleteForever } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";


const index = () => {

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  const [qabulCount, setqabulCount]=useState(1)

  const count=Array.from(Array(qabulCount).keys())
  
  const [open, setOpen] = useState(false)
  const HandleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className='qabul'>
      {/* promokod */}
      <div className={`promokod-box ${open ? "promokod-box-active" : ""}`}>
        <label className='form-label-style' htmlFor="promo">PromoKod <span onClick={HandleOpen} className='promokod-cancel'><MdCancel /></span></label>
        <input required className='input-style' type="text" id='promo' placeholder='Promokodni Kiriting' />
        <button onClick={HandleOpen} className='form-btn'>Saqlash</button>
      </div>
      {/* promokod */}
      <div className='qabul-head'>
        <h2>#983274has723</h2>
        <h1>Qabul: Olimov Ali</h1>
      </div>
      <div className='qabul-con' ref={targetRef}> 
        <div className='qabul-row'>
          <div>
          <label className='form-label-style' htmlFor="qabul">N</label>
          </div>
          <div>
            <label className='form-label-style' htmlFor="qabul">Xizmat</label>
          </div>
          <div>
            <label className='form-label-style' htmlFor="qabulturi">Xizmat Turi</label>
          </div>
          <div>
            <label className='form-label-style' htmlFor="qabulnarxi">Xizmat Narxi:</label>
          </div>
        </div>
        {
          count.map(order=>{
            if(order==qabulCount-1){
              return <QabulCard id={order} delates={<MdDeleteForever className='qabul-row-del' />}/>
            }
            else{
              return <QabulCard id={order} />
            }
          })
        }
      </div>
      <div className='qabul-row2'>
          <div>
            Hzimat Qo'shish
          </div>
          <button className='qabul-add' onClick={()=>setqabulCount(qabulCount+1)}>
            <FaPlus />
          </button>
      </div>
      <div className='qabul-foot-box'>
        <div className='qabul-foot'>
          <label  htmlFor="jami">Jami Narxi:</label>
          <input className='input-style' type="number" id='jami' value="20000" disabled />
        </div>
        <div className='qabul-foot'>
          <label htmlFor="type">To'lov turi</label>
          <select className='input-style' id="type" required>
            <option value="default" disabled>To'lov turi</option>
            <option value="cash">Naxt</option>
            <option value="kart">Cart</option>
          </select>
        </div>
        <div className='qabul-foot'>
          <label  htmlFor="jami">To'langan Summa</label>
          <input required className='input-style' type="number" id='jami' placeholder="0 so'm" />
        </div>
      </div>
      <div className='qabul-btns'>
        <button onClick={HandleOpen} className='form-btn'>Promo Kod</button>
        <button type='submit' className='form-btn'>Saqlash</button>
        <button className='form-btn'  onClick={() => toPDF()}>Check</button>
      </div>
    </div>
  )
}

export default index
