import React, { useEffect, useState } from 'react'
import "./style.css"
import { FaPlus } from "react-icons/fa6";
import { usePDF } from 'react-to-pdf';
import QabulCard from '../../Cards/QabulCard/index'
import { MdDeleteForever } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { amointService, removeServiceItem, saveServices } from '../../../redux/slices/receptionSlice';


const index = () => {
  const ServicesStore = useSelector(state => state.reception);
  const dispatch = useDispatch();

  const [PaidAmount, setPaidAmount] = useState(0);
  const [open, setOpen] = useState(false)
  const [qabulCount, setqabulCount] = useState(1);
  const [FilteredServices, setFilteredServices] = useState([])
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  const count = Array.from(Array(qabulCount).keys())

  useEffect(() => {
    if (PaidAmount > 0) {
      dispatch(amointService(parseFloat(PaidAmount)))
    }
  }, [PaidAmount])

  useEffect(() => {
    dispatch(removeServiceItem(FilteredServices))
  }, [FilteredServices])

  const HandleOpen = () => setOpen(!open)

  console.log(ServicesStore);

  const onSave = () => {
    dispatch(saveServices())
  }

  const onDelete = (id) => {
    setFilteredServices(ServicesStore.services.filter(item => item.row !== id))
    setqabulCount(prev => (prev - 1) < 1 ? 1 : prev - 1)
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
          count.map((order, index) => {
            if (order == qabulCount - 1) {
              return <QabulCard id={order} delates={<MdDeleteForever onClick={() => onDelete(index)} className='qabul-row-del' />} />
            }
            else {
              return <QabulCard id={order} />
            }
          })
        }
      </div>
      <div className='qabul-row2'>
        <div>
          Hzimat Qo'shish
        </div>
        <button className='qabul-add' onClick={() => setqabulCount(qabulCount + 1)}>
          <FaPlus />
        </button>
      </div>
      <div className='qabul-foot-box'>
        <div className='qabul-foot'>
          <label htmlFor="jami">Jami Narxi:</label>
          <input className='input-style' type="number" id='jami' value={ServicesStore.totalPrice} readOnly />
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
          <label htmlFor="jami">To'langan Summa</label>
          <input required className='input-style' onChange={e => setPaidAmount(e.target.value)} type="number" id='jami' placeholder="0 so'm" />
        </div>
      </div>
      <div className='qabul-btns'>
        <button onClick={HandleOpen} className='form-btn'>Promo Kod</button>
        <button onClick={onSave} className='form-btn'>Saqlash</button>
        <button  style={ServicesStore.checkStatus ? { background: "#fff", color: "#000" } : null} disabled={ServicesStore.checkStatus} className='form-btn' onClick={() => toPDF()}>Check</button>
      </div>
    </div>
  )
}

export default index
