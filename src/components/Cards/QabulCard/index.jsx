import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addService } from '../../../redux/slices/receptionSlice';

const index = ({ id, delates }) => {

  const [Services, setServices] = useState([]);
  const [Service, setService] = useState(undefined);
  const [ServiceType, setServiceType] = useState(undefined);
  const [Amount, setAmount] = useState(0)
  
  const ServicesStore = useSelector(state => state.reception);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 0; i < Services.length; i++) {
      const element = Services[i];

      if (element.name === Service) {
        setAmount(element.amount);

        dispatch(addService({
          id: element.id,
          service: Service,
          type: ServiceType,
          amount: element.amount,
          row: id
        }))

        break
      }
    }
  }, [Service])

  useEffect(() => {
    axios.get(import.meta.env.VITE_API + "/management/service/").then(response => {

      setServices(response.data.results)
    })
  }, [])

  const servicesItem = Services?.map((item, index) => {
    return <option value={item.name} key={index}>{String(item.name)?.toUpperCase()}</option>
  })

  const servicesType = Services?.map((item, index) => {
    return <option value={item.type} key={index}>{String(item.type)?.toUpperCase()}</option>
  });  

  return (
    <div className='qabul-row' id={id} >
      <div>
        {id + 1}
      </div>
      <div>
        <select onChange={e => setService(e.target.value)} className='input-style' id="qabul">
          <option value="default">Choose Qabul</option>
          {servicesItem}
        </select>
      </div>
      <div>
        <select onChange={e => setServiceType(e.target.value)} className='input-style' id="qabulturi">
          <option value="default">Choose Qabul Turi</option>
          {servicesType}
        </select>
      </div>
      <div>
        <input className='input-style' type="number" id='qabulnarxi' value={Amount} disabled />
      </div>
      <div className='qabul-row-last'>
        {delates}
      </div>
    </div>
  )
}

export default index
