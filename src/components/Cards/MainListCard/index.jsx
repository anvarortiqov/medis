import { Link } from 'react-router-dom'
import './style.css'
import '../../../pages/Main/style.css'

const index = ({name, year, month, day, number, img, surname, ...props}) => {
  
  return (
    <Link to="patient/personal">
      <li className="main-classlist-item">
        <div className="main-classlist-item_block">
          <img src={img} alt="not-found" />
          <h4>{name}</h4>
        </div>
        <div className="main-classlist-item_block">
          <h4>{surname}</h4>
        </div>
        <div className="main-classlist-item_block">
          <h4 className="main-block_birthday">
            {month}/{day}/{year}
          </h4>
        </div>
        <div className="main-classlist-item_block">
          <h4>{number}</h4>
        </div>
      </li>
    </Link>
  );
}

export default index