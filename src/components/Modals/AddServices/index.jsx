import './style.css'
import Typography from '../../Typography'
import Form, { Dropdown, Input } from '../../Form'
import { useEffect, useState } from 'react'
import axios from 'axios'

const index = () => {

  const [ServiceType, setServiceType] = useState([{ value: null, label: "Bo'sh" }])
  const [Doctors, setDoctors] = useState([{ value: null, label: "Bo'sh" }])

  const rooms = Array.from({ length: 50 }).map((_, index) => ({ value: index, label: `${index + 1}-xona` }))

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/management/xizmat_type/").then(response => {
        if (response.status < 400) {
          setServiceType(response.data.results?.map(item => ({ value: item.id, label: item.name })));
        }
      }).catch(console.error)
    } catch (error) {
      console.warn(error);
    }
  }, [])

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/main_module/hodimlar/").then(response => {
        if (response.status < 400) {
          setDoctors(response.data.results?.map(item => ({ value: item.id, label: `${item.surname} ${item.name}` })))
        } else {
          setDoctors([{ value: null, label: "Bo'sh" }])
        }
      }).catch(console.error)
    } catch (error) {
      console.warn(error);
    }
  }, [])

  const onFinish = async (values) => {
    try {
      await axios.post(import.meta.env.VITE_API + "/management/xizmat/", values).then(response => {
        if (response.status < 400) {
          console.log(response.statusText);
        }
      }).catch(console.error);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div className='add-services'>
      <div className="add-employee-title">
        <Typography name={"h2"}>Xizmat ma'lumotlari</Typography>
        <Typography name={"text"}>Iltimos har bir maydonga to'liq va to'g'ri ma'lumotlarni kiriting !</Typography>
      </div>

      <hr className='add-employee-line' />

      <Form className={"add-employee-form"} onFinish={onFinish}>

        <div className="add-employee-form-content">
          <div className="add-employee-col">
            <Input required={{ required: true, message: "Kiriting!" }} label={"Xizmat Nomi"} name={"name"} placeholder={"Xizmat Nomini kiriting"} />

            <Dropdown label={"Xona"} name={"room"} multi options={rooms} />
          </div>
          <div className="add-employee-col">
            <Dropdown label={"Xizmat Turi"} name={"type"} options={ServiceType} />

            <Dropdown label={"Shifokor"} name={"doctor"} options={Doctors} />

          </div>
          <div className="add-employee-col">
            <Input label={"Xizmat Narxi"} name={"amount"} placeholder={"Xizmat Narxi"} />

            <Dropdown label={"Status"} name={"status"} options={[
              { value: "ACTIVE", label: "ACTIVE" },
              { value: "PENDING", label: "PENDING" },
              { value: "DELETED", label: "DELETED" },
            ]} />
          </div>
        </div>

        <button className='form-btn' type="submit">Bemor qo'shish</button>
      </Form>
    </div>
  )
}

export default index
