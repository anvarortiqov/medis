import React, { useEffect, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Image from '../Image'
import Typography from '../Typography'
import moment from 'moment'

const patientinfo = () => {
  const { id } = useParams()
  const [Data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/public/patient/" + id).then(response => {
        if (response.status < 400) {
          setData(response.data)
        }
      })
    } catch (error) {
      console.error(error);
    }
  }, [])

  if (!Data) {
    return <Typography name={"h2"}>Yuklanmoqda...</Typography>
  }

  return (
    <div className='patientdata_left'>
      <div className='patiendata-left_head'>
        <Image src={Data?.image} title={Data?.name} />
        <div className='patientdata_fullname'>
          <h3>{Data?.name}</h3>
          <h4>{Data?.surname}</h4>
        </div>
      </div>
      <div className='patientdata-left_content'>
        <h2 className='patilentdata-left_title'>Bemor Malumotlari</h2>
        <ul className='patientdata-left_info'>
          <li>
            <h3>Ism Familiyasi</h3>
            <h4>{Data?.name} {Data?.surname}</h4>
          </li>
          <li>
            <h3>Telefon Raqmai</h3>
            <h4>{Data?.phone || Data?.extra_phone}</h4>
          </li>
          <li>
            <h3>Tug'ilgan Yili</h3>
            <h4>{moment(Data?.birthday).format("DD.MM.YYYY")}</h4>
          </li>
          <li>
            <h3>Manzil</h3>
            <h4>{Data?.address}</h4>
          </li>
          <li>
            <h3>Kasallik Tarixi</h3>
            <h4>{Data?.history_illness.length === 0 ? "Yo'q" : Data?.history_illness?.join("; ")}</h4>
          </li>
          <li>
            <h3>Oxirgi Qabul</h3>
            <h4>{moment(Data?.last_login).format("DD.MM.YYYY")}</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default patientinfo
