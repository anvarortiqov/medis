import "./style.css";
import { FaPlus } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import MainListItem from "../../components/Cards/MainListCard/index";
import Mainavatar1 from "../../assets/images/mainlist_avatar.png";
import Mainavatar2 from "../../assets/images/mainlist_avatar2.png";
import Mainavatar3 from "../../assets/images/mainlist_avatar3.png";

function index() {
  const MainInfoList = [
    {
      id: 1,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar1,
    },
    {
      id: 2,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar1,
    },
    {
      id: 3,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar2,
    },
    {
      id: 4,
      name: "ilhomjon",
      surname: "Solijonov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar1,
    },
    {
      id: 5,
      name: "Muslima",
      surname: "Ortiqova",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar3,
    },
    {
      id: 6,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar2,
    },
    {
      id: 7,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar2,
    },
    {
      id: 8,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar3,
    },
    {
      id: 9,
      name: "Anvarjon",
      surname: "Ortiqov",
      year: 1998,
      month: 2,
      day: 18,
      number: 948373745,
      img: Mainavatar1,
    },
  ];



  return (
    <div className="main-page">
      <div className="main-page_head">
        <h1 className="main-page-head_title">Kunlik Statistika</h1>
        <ul className="main-page-head_statistics">
          <li>
            <BsCashCoin className="main-page-head_icon" />
            <h4>Kunlik Tushum(Naqt)</h4>
            <h3>
              10.000.000 <div>so'm</div>
            </h3>
          </li>
          <li>
            <FaMoneyCheckDollar className="main-page-head_icon" />
            <h4>Kunlik Tushum(Karta)</h4>
            <h3>
              10.000.000 <div>so'm</div>
            </h3>
          </li>
          <li>
            <button >
              <FaPlus className="main-acceptence_card-btn" />
            </button>
            <h3>Xizmat Qo'shish</h3>
          </li>
          <li>
            <button>
              <FaPlus className="main-acceptence_card-btn" />
            </button>
            <h3>Hona Qo'shish</h3>
          </li>
          <li>
            <button>
              <FaPlus className="main-acceptence_card-btn" />
            </button>
            <h3>Online navbat</h3>
          </li>
        </ul>
      </div>
      <div className="main-page_bottom">
        <form>
          <input
            className="main-head_from-items input-style"
            type="text"
            placeholder="Ism"
          />
          <input
            className="main-head_from-items input-style"
            type="text"
            placeholder="Familiya"
          />
          <input
            className="main-head_from-items input-style"
            type="date"
            placeholder="Tug'ulgan kun"
          />
          <input
            className="main-head_from-items input-style"
            type="number"
            placeholder="Telefon Raqam"
          />
        </form>
        <ul className="main-bottom_left-classlist">
          {MainInfoList.map((patientitem) => (
            <MainListItem
              key={patientitem.id}
              name={patientitem.name}
              surname={patientitem.surname}
              year={patientitem.year}
              month={patientitem.month}
              day={patientitem.day}
              number={patientitem.number}
              img={patientitem.img}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default index;

