import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './style.css'
import { usePDF } from 'react-to-pdf';
import { FaDownload } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";

const index = () => {

    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    
    // ref={contentToPrint}
  return (  
    <div className='payment-info'>
       <div className='payment-content2' ref={targetRef} >
            <h2 className='payment-id'><span>Harajat Id: </span> #la2i7248aus</h2>
            <h1 className='payment-givver'><span>Harjat Nomi: </span> Equipment </h1>
            <h3 className='payment-getter'><span>User Ismi: </span> Anavarjon Ortiqov</h3>
            <h3 className='payment-type'><span>Harajat Turi: </span> Bank</h3>
            <h3 className='paymetn-cost'><span>Harajat Summasi: </span> 20000 so'm</h3>
            <h3 className='payment-date'><span>Harajat Sanasi: </span> 12/12/2024, 16:20</h3>
            <h3 className='pament-status'><span>Harajat Statusi:</span> To'lanan</h3>
       </div>
       <div className='payment-btns'>
        <button className='form-btn'>Saqlash</button>
        <button className='form-btn' onClick={() => toPDF()}><FaDownload /></button>
        <button className='form-btn' onClick={() => {handlePrint(null, () => contentToPrint.current);}}><FaPrint /></button>
       </div>
    </div>
  )
}

export default index
