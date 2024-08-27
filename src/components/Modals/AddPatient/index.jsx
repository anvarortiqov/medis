import './style.css'
import Typography from '../../Typography'
import Form, { Dropdown, Input } from '../../Form'
import axios from "axios"
import { useEffect, useState } from 'react'
import Alert from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const index = () => {

  const [UserType, setUserType] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/public/userType/").then(response => {
        if (response.status < 400) {
          setUserType(() => response.data.results?.map(item => ({ value: item.id, label: item.user_type })))
        }
      })
    } catch (error) {

    }
  }, [])

  const onFinish = async (values) => {
    try {
      await axios.post(import.meta.env.VITE_API + "/public/patient/", {
        ...values, user_type: Number(values.user_type), date_joined: new Date(),
      }).then((response) => {
        if (response.status === 201) {
          Alert.fire({
            title: "Mufaqiyatli qo'shildi!",
            icon: "success",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Yo'q`,
            confirmButtonText: "Ha"
          }).then((result) => {

            if (result.isConfirmed) {
              navigate("/qabulxona")
            }
          });
        } else if (response.status >= 400) {
          Alert.fire({
            title: "Xatolik!",
            icon: "error",
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Yo'q`,
            confirmButtonText: "Ha"
          })
        }
      });

    } catch (error) {
      console.error(error);
    }
  }

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

              <Input required={{ required: true, message: "Kiriting!" }} htmlType='password' label={"Parol"} name={"password"} placeholder={"Parol kiriting"} />

            </div>
            <div className="add-employee-col">
              <Input required={{ required: true, message: "Kiriting!" }} label={"Familiya"} name={"surname"} placeholder={"Familiya kiriting"} />

              <Input label={"Tug’ilgan yil,oy,kun"} htmlType='date' name={"birthday"} placeholder={"Tug’ilgan yil,oy,kun"} />

              <Dropdown label={"Jinsi"} name={"sex"} options={[
                { value: "Man", label: "Man" },
                { value: "Woman", label: "Woman" },
              ]} />

            </div>
            <div className="add-employee-col">

              <Input label={"Yashash joyi"} name={"address"} placeholder={"Address"} />

              <Input required={{ required: true, message: "Kiriting!" }} label={"Foydalanuvchi nomi"} name={"username"} placeholder={"Username kiriting"} />

              <Dropdown name={"user_type"} label={"Foydalanuvchi turi"} options={UserType} />
            </div>
          </div>

          <button className='form-btn' type="submit">Bemor qo'shish</button>
        </Form>
      </div>
    </div>
  )
}

export default index