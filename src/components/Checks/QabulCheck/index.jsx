import React from 'react'
import './style.css'
import { MdDone } from "react-icons/md";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const index = () => {

    const targetRef = useRef();

  return (
    <div className='qabul-check'>
        <div className='qabul-check-content'  ref={targetRef}>
            <div className='done-icon'>
                <MdDone />
            </div>
            <p className='qabul-success-p'>Payment Success!</p>
            <h1 className='qabul-total'>1 000 000 So'm</h1>
            <ul className='qabul-check-lists'>
                <li className='qabul-check-list'>
                    <h2>To'lov Id</h2>
                    <h3>#xjnf98hwd7d87</h3>
                </li>
                <li className='qabul-check-list'>
                    <h2>To'lovchi ismi</h2>
                    <h3>Ali Yunusov</h3>
                </li>
                <li className='qabul-check-list'>
                    <h2>To'lov turi</h2>
                    <h3>Naxt</h3>
                </li>
                <li className='qabul-check-list'>
                    <h2>To'lov summasi</h2>
                    <h3>1 000 000 So'm</h3>
                </li>
            </ul> 
            <div className='qabul-check-services'>
                <div className='qabul-check-service'>
                    <div>Xizmatlar</div>
                    <div>Xizmat Narxi</div>
                </div>
                <div className='qabul-check-service'>
                    <div>Analiz Topshirish</div>
                    <div>200 000 So'm</div>
                </div>
                <div className='qabul-check-service'>
                    <div>Analiz Topshirish</div>
                    <div>200 000 So'm</div>
                </div>
            </div>
        </div>     
        <button  onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Check</button>  
    </div>
  )
}

export default index
