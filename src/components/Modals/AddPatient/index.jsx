import {React} from 'react'
import './style.css'
import Typography from '../../Typography'
import Form, { Dropdown, UploadImage, Input, TextArea } from '../../Form'
import { useEffect, useState } from "react"
import axios from "axios"

const index = () => {
  
  
  const onFinish = async (values) => {
    try {
      await axios.post(import.meta.env.VITE_API + "/main_module/hodimlar/", {
        ...values,
        lavozimi: Number(values?.lavozimi),
        last_login: new Date(),
        date_joined: new Date(),
        user_type: Number(values?.lavozimi),
        age: Number(values?.age)
      }).then((response) => {
        console.log(response);
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/public/userType/").then(response => {
        if (response.status < 400) {
          setUserType(() => [...response?.data?.results]?.map(item => ({ value: item?.id, label: item?.user_type })))
        }
      })
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <div className='add-patinet'>
      <div className='add-patient-container'>
        <div className="add-employee-title">
          <Typography name={"h2"}>Bemor ma’lumotlari</Typography>
          <Typography name={"text"}>Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</Typography>
        </div>

        <hr className='add-employee-line' />

        <Form className={"add-employee-form"} onFininsh={onFinish}>

          <div className="add-employee-form-content">
            <div className="add-employee-col">
              <Input required={{ required: true, message: "Kiriting!" }} label={"Ism"} name={"name"} placeholder={"Ismingizni kiriting"} />
              
              <Input required={{ required: true, message: "Kiriting!" }} label={"Telefon raqam"} name={"phone"} placeholder={"Telefon raqam kiriting"} />
             
            </div>
            <div className="add-employee-col">
              <Input required={{ required: true, message: "Kiriting!" }} label={"Familiya"} name={"surname"} placeholder={"Familiya kiriting"} />

              <Input label={"Tug’ilgan yil,oy,kun"} htmlType='date' name={"birthday"} placeholder={"Tug’ilgan yil,oy,kun"} />

            </div>
            <div className="add-employee-col">
              
              <Input label={"Yashash joyi"} name={"address"} placeholder={"Address"} />
         
            </div>
          </div>

          <button className='form-btn' type="submit">Bemor qo'shish</button>
        </Form>
      </div>
    </div>
  )
}

export default index