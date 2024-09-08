import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './style.css'
import Typography from '../../components/Typography';
import Form, { Input } from '../../components/Form';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Image from '../../components/Image';
import axios from 'axios';
import moment from 'moment';
import { useFilter } from '../../hooks/useFilter';
import Pagination from '../../components/Pagination';

const index = () => {

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [Data, setData] = useState([])
  const [FilterData, setFilterData] = useState([])

  const [FormInput, setFormInput] = useState("")

  const { Data: data } = useFilter({ data: FilterData, search: FormInput })

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/public/patient/").then(response => {
        if (response.status < 400) {
          setData([...response.data.results])
          setFilterData([...response.data.results])
        }
      })
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setData(data);

    if (FormInput === "") {
      setData(FilterData)
    }
  }, [data, FormInput])

  const onFinish = async (values) => {
    console.log(values);
  }

  const dataItem = Data?.map(({ surname, name, middle_name, birthday, phone, extra_phone, id, date_joined }, index) => {
    index += 1;

    return (
      <li onClick={() => {
        window.localStorage.setItem("patient-id", id)

        navigate("/qabulxona/patient/personal/" + id)
      }} className="list-of-patients-item" key={index}>
        <Typography name={"text"}>{index}</Typography>

        <div className="list-of-patients-item-wrap">
          <div className="list-of-patients-item-img">
            <Image />
          </div>
          <Typography className="list-of-patients-fio" name={"text"}>{surname} {name} {middle_name}</Typography>
        </div>

        <Typography className="list-of-patients-fio" name={"text"}>{moment(birthday).format("DD/MM/YYYY")}</Typography>

        <div>
          {phone || extra_phone ? phone ? <Typography  className="list-of-patients-fio" name={"text"}>{phone}</Typography> : <Typography name={"text"}>{extra_phone}</Typography> : "Yo'q"}
        </div>

        <Typography  className="list-of-patients-fio" name={"text"}>{moment(date_joined).format("DD/MM/YYYY")}</Typography>
      </li>
    )
  })

  if (pathname !== "/qabulxona") {
    return <section className="list-of-patients">
      <Outlet />
    </section>
  }

  return (
    <section className="list-of-patients">
      <div className='list-of-patients-head'>
        <Typography name={"h2"}>Kasallar Ro'yhati:</Typography>

        <button onClick={() => navigate("/qabulxona/add-patient")} className='form-btn' type="submit">Bemor qo'shish &#43;</button>
      </div>

      <Form className={"list-of-patients-form"} onFininsh={onFinish}>
        <Input onChange={event => setFormInput(event.target.value)} placeholder={"F.I.Sh. kiriting"} required={{ required: true, message: "Kiriting" }} />

        <Input onChange={event => setFormInput(event.target.value)} htmlType='date' />

        <Input onChange={event => setFormInput(event.target.value)} placeholder={"Telefon kiriting"} required={{ required: true, message: "Kiriting" }} />
      </Form>

      <div className='list-of-patients-header'>
        <div>N</div>
        <div>F.I.Sh</div>
        <div>Tug'ulgan sana/oy/yil</div>
        <div>Telefon raqam</div>
        <div>Ro'yhatdan o'tgan sana</div>
      </div>

      <ul className='list-of-patients-list'>
        {Data.length === 0 ? "Yuklanmoqda..." : dataItem.length === 0 ? "Ma'lumot topilmadi" : dataItem}
      </ul>

      <div className="pagination">
        <Pagination current={1} total={Data.length} />
      </div>
    </section>
  )
}

export default index
