import './style.css'
import LabaratoryCard2 from '../Cards/LabaratoryCard2/index'
import { FaDownload } from "react-icons/fa6";
import { Dropdown, Input } from '../Form';
import Pagination from '../Pagination/index';

const natijalar = () => {  

  const Massaj = [
    {
      id: 1,
      name: "Ali Yuldashev",
      date: "12,05,2024",
      status: "Tayyor",
      servicetype: "Qon Analizi"
    },
    {
      id: 2,
      name: "Ali Yuldashev",
      date: "12,05,2024",
      status: "In proccess",
      servicetype: "Qon Analizi"
    },
    {
      id: 3,
      name: "Ali Yuldashev",
      date: "12,05,2024",
      status: "Tayyor",
      servicetype: "Qon Analizi"
    },
    {
      id: 4,
      name: "Ali Yuldashev",
      date: "12,05,2024",
      status: "Tayyor",
      servicetype: "Qon Analizi"
    },

  ]

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
        {Massaj.map((item, index) => (
          <LabaratoryCard2
            index={index}
            key={item.id}
            name={item.name}
            date={item.date}
            servicetype={item.servicetype}
            status={item.status}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination current={1} total={3} />
        <button className='form-btn pagination-btn-download'><FaDownload /></button>
      </div>
    </div>
  )
}

export default natijalar
