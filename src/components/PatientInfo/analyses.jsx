import React from 'react'
import { CiViewTimeline } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


const analyses = () => {
  return (
    <ul className="analyses">
      <div className="analyses_head">
        <div>Analiz Nomi</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <li>
        <div className="analyses_title">Torch Infeksiya</div>
        <div className="analyses_date">10.05.2028</div>
        <div className="analyses_state"><button className="analyses_indicator notsubmitted">Topshirilmadi</button></div>
        <div>
          <div className='analyses-state-view'>
            <CiViewTimeline />
          </div>
          <div className='analyses-state-delete'>
            <MdDeleteOutline />
          </div>
        </div>
      </li>
      <li>
        <div className="analyses_title">Umimiy Qon tekshiruvi</div>
        <div className="analyses_date">20.09.2027</div>
        <div className="analyses_state"><button className="analyses_indicator inprocess">Tayyorlanyapti</button></div>
        <div>
          <div className='analyses-state-view'>
            <CiViewTimeline />
          </div>
          <div className='analyses-state-delete'>
            <MdDeleteOutline />
          </div>
        </div>
      </li>
      <li>
        <div className="analyses_title">Sariq Kasal</div>
        <div className="analyses_date">15.12.2021</div>
        <butto className="analyses_state"><button className="analyses_indicator submitted">Tayyor</button></butto>
        <div>
          <div className='analyses-state-view'>
            <CiViewTimeline />
          </div>
          <div className='analyses-state-delete'>
            <MdDeleteOutline />
          </div>
        </div>
      </li>
    </ul>
  )
}

export default analyses
