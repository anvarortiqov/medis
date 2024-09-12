import "./style.css"
import Typography from '../../Typography'
import Form, { Dropdown, UploadImage, Input, TextArea } from '../../Form'
import { useEffect, useState } from "react"
import axios from "axios"

const index = () => {

  const [UserType, setUserType] = useState([])

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

  return <section className='add-employee'>
    <div className="add-employee-title">
      <Typography name={"h2"}>Hodim ma’lumotlari</Typography>
      <Typography name={"text"}>Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</Typography>
    </div>

    <hr className='add-employee-line' />

    <Form className={"add-employee-form"} onFinish={onFinish}>

      <div className="add-employee-form-content">
        <div className="add-employee-col">
          <Input required={{ required: true, message: "Kiriting!" }} label={"Ism"} name={"name"} placeholder={"Ismingizni kiriting"} />

          <Input required={{ required: true, message: "Kiriting!" }} label={"Foydalanuvchi ismi"} name={"username"} placeholder={"Username kiriting"} />

          <Input required={{ required: true, message: "Kiriting!" }} label={"Telefon raqam"} name={"phone"} placeholder={"Telefon raqam kiriting"} />

          <Input required={{ required: true, message: "Kiriting!" }} label={"Ish staji"} name={"age"} placeholder={"Ish staji"} />

          <Dropdown options={[
            { value: 'ACTIVE', label: 'Active' },
            { value: 'INACTIVE', label: 'Inactive' },
            { value: 'PENDING', label: 'Pending' }
          ]} label={"Status"} name={"status"} />
        </div>
        <div className="add-employee-col">
          <Input required={{ required: true, message: "Kiriting!" }} label={"Familiya"} name={"surname"} placeholder={"Familiya kiriting"} />

          <Input required={{ required: true, message: "Kiriting!" }} htmlType='password' label={"Parol"} name={"password"} placeholder={"Parol kiriting"} />

          <Input label={"Qo'shimcha Telefon raqam"} name={"extra_phone"} placeholder={"Telefon raqam "} />

          <Input label={"Tug’ilgan yil,oy,kun"} htmlType='date' name={"birthday"} placeholder={"Tug’ilgan yil,oy,kun"} />

          <UploadImage name="image"
            multi={true}
            label={'Rasm'} />

        </div>
        <div className="add-employee-col">
          <Input label={"Sharif"} name={"middle_name"} placeholder={"Sharifingiz "} />

          <Input label={"Elektron pochta"} name={"email"} placeholder={"Email "} />

          <Input label={"Yashash joyi"} name={"address"} placeholder={"Address"} />

          <TextArea placeholder={"Qo'shimcha ma'lumot"} name={"about"} label={"Qo'shimcha ma'lumot"} />

          <Dropdown name={"lavozimi"} options={UserType} label={"Lavozimi"} />
        </div>
      </div>

      <button className='form-btn' type="submit">Hodim qo'shish</button>
    </Form>
  </section>
}

export default index
