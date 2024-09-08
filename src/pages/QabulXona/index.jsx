import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
import './style.css'
import Typography from '../../components/Typography';
import Form, { Input } from '../../components/Form';
import Image from '../../components/Image';
import { useFilter } from '../../hooks/useFilter';
import Pagination from '../../components/Pagination';

const index = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState([]);
  const [formInput, setFormInput] = useState("");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API + "/public/patient/")
      .then((response) => {
        if (response.status < 400) {
          setFilterData(response.data.results);
        }
      })
      .catch(console.error);
  }, []);

  const { Data } = useFilter({ data: filterData, search: formInput })

  const onFinish = (values) => {
    console.log(values);    
  };

  const handleItemClick = (id) => {
    window.localStorage.setItem("patient-id", id);
    navigate("/qabulxona/patient/personal/" + id);
  };

  const dataItems = Data.map(
    ({ surname, name, middle_name, birthday, phone, extra_phone, id, date_joined }, index) => (
      <li
        onClick={() => handleItemClick(id)}
        className="list-of-patients-item"
        key={id}
      >
        <Typography name="text">{index + 1}</Typography>
        <div className="list-of-patients-item-wrap">
          <div className="list-of-patients-item-img">
            <Image />
          </div>
          <Typography className="list-of-patients-fio" name={"text"}>{surname} {name} {middle_name}</Typography>
        </div>

        <Typography className="list-of-patients-fio" name={"text"}>{moment(birthday).format("DD/MM/YYYY")}</Typography>

        <div>
          {phone || extra_phone ? phone ? <Typography className="list-of-patients-fio" name={"text"}>{phone}</Typography> : <Typography className="list-of-patients-fio" name={"text"}>{extra_phone}</Typography> : "Yo'q"}
        </div>

        <Typography className="list-of-patients-fio" name={"text"}>{moment(date_joined).format("DD/MM/YYYY")}</Typography>
      </li>
    )
  );

  if (pathname !== "/qabulxona") {
    return (
      <section className="list-of-patients">
        <Outlet />
      </section>
    );
  }

  return (
    <section className="list-of-patients">
      <div className="list-of-patients-head">
        <Typography name="h2">Kasallar Ro'yhati:</Typography>
        <button
          onClick={() => navigate("/qabulxona/add-patient")}
          className="form-btn"
          type='button'
        >
          Bemor qo'shish &#43;
        </button>
      </div>

      <Form className="list-of-patients-form" onFinish={onFinish}>
        <Input
          onChange={(event) => setFormInput(event.target.value)}
          placeholder="F.I.Sh. kiriting"
          required
        />
        <Input
          onChange={(event) => setFormInput(event.target.value)}
          htmlType="date"
        />
        <Input
          onChange={(event) => setFormInput(event.target.value)}
          placeholder="Telefon kiriting"
          required
        />
      </Form>

      <div className="list-of-patients-header">
        <div>N</div>
        <div>F.I.Sh</div>
        <div>Tug'ulgan sana/oy/yil</div>
        <div>Telefon raqam</div>
        <div>Ro'yhatdan o'tgan sana</div>
      </div>

      <ul className="list-of-patients-list">
        {Data.length === 0
          ? "Yuklanmoqda..."
          : dataItems.length === 0
            ? "Ma'lumot topilmadi"
            : dataItems}
      </ul>

      <div className="pagination">
        <Pagination current={1} total={Data.length} />
      </div>
    </section>
  );
}

export default index
