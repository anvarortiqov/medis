import './style.css'
import LabaratoryCard2 from '../Cards/LabaratoryCard2/index'
import { FaDownload } from "react-icons/fa6";
import { Dropdown, Input } from '../Form';
import Pagination from '../Pagination/index';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';

const natijalar = () => {

  const [Data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/management/analiz/").then(response => {
        if (response.status < 400) {
          setData(response.data?.results)
        }
      }).catch(console.error)
    } catch (error) {
      console.warn(error);
    }
  }, []);

  const item = Data.map((item, index) => (
    <LabaratoryCard2
      index={index}
      key={index}
      name={item.patient_name}
      date={moment(datetime)?.format("DD/MM/YYYY")}
      servicetype={item.service_name}
      status={item.status}
    />
  ))

  return (
    <div className='results-analyses'>
      <div className='rooms-head '>
        <Input required={{ required: true, message: "Kiriting!" }} placeholder={"Serach..."} />
        <div></div>
        <Dropdown options={[
          { value: "ACTIVE", label: "ACTIVE" },
          { value: "DELETED", label: "DELETED" }
        ]} />
      </div>

      <div className='massaj-head'>
        <div>N</div>
        <div>Bemor Ismi</div>
        <div>Servis Turi</div>
        <div>Sana</div>
        <div>Status</div>
      </div>
      <div className='massaj-content'>
        {item.length === 0 ? "Ma'lumot mavjud emas" : item}
      </div>
      <div className="pagination">
        <Pagination current={1} total={Data.length} />
        <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default natijalar
