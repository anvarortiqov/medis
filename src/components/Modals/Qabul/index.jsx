import React, { useEffect, useMemo, useState } from 'react'
import "./patient-reception.css"
import Typography from '../../Typography';
import { Dropdown, Input } from '../../Form';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addService, paidAmount, paymentMethod, removeServiceItem, saveServices } from '../../../redux/slices/receptionSlice';

const Item = ({ ServicesType, Doctors, index, onDelete }) => {
  const dispatch = useDispatch()

  const [Service, setService] = useState(null);
  const [ServiceType, setServiceType] = useState(null);
  const [Doctor, setDoctor] = useState()
  const [Amount, setAmount] = useState(0);

  const doctors = useMemo(() => {
    return Doctors?.map(item => {
      if (item.value === ServiceType) {
        return item
      }
    })
  }, [ServiceType])

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_API}/management/service/${Doctor}`).then(response => {
        setAmount(response.data.amount);

        if (response.status < 400) {

          dispatch(
            addService({
              serviceId: response.data.id,
              doctor_name: response.data.doctor_name,
              service: Service,
              type: ServiceType,
              amount: parseFloat(response.data.amount),
              index,
            })
          );
        }
      }).catch(console.error)
    } catch (error) {
      console.error(error)
    }
  }, [Doctor])

  return (
    <li className="patient-reception-item">
      <Typography name="text" className="patient-reception-item-index">
        {index + 1}
      </Typography>

      <Dropdown
        onChange={value => setService(value)}
        options={[
          { value: 'doctor', label: "Doktor qabuli" },
          { value: 'laboratory', label: "Labaratoriya" },
          { value: 'other', label: "Boshqa xizmatlar" },
        ]}
      />

      <Dropdown onChange={value => setServiceType(value)} disabled={!Service} options={ServicesType} />
      <Dropdown onChange={value => setDoctor(value)} disabled={!ServiceType} options={doctors} />

      <div className="patient-reception-item-action">
        <Input value={Amount} htmlType="number" readOnly placeholder={0} />
        <button onClick={() => onDelete(index)}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

const Index = () => {
  const { id } = useParams();
  const [Patient, setPatient] = useState(null);
  const [AddServices, setAddServices] = useState([{ id: 0 }]);
  const [Doctors, setDoctors] = useState([]);
  const [Services, setServices] = useState([]);
  const [ServicesType, setServicesType] = useState([]);

  const ReceptionStore = useSelector((state) => state.reception);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/public/patient/${id}`)
      .then((response) => response.status < 400 && setPatient(response.data))
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/management/service/`)
      .then((response) => {
        if (response.status >= 400) return;

        const results = response.data.results || [];
        setDoctors(results.map(({ id, doctor_name }) => ({ value: id, label: doctor_name })));
        setServices(results.map(({ type, name }) => ({ value: type, label: name })));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API}/management/service_type/`)
      .then((response) => {
        if (response.status >= 400) return;

        setServicesType(response.data.results?.map(({ id, name }) => ({ value: id, label: name })));
      })
      .catch(console.error);
  }, []);

  const onDelete = (index) => {
    setAddServices((prev) => prev.filter((_, i) => i !== index));

    const filtered = ReceptionStore.services.filter(item => item.index !== index);

    dispatch(removeServiceItem(filtered))
  };

  const serviceItem = AddServices.map((_, index) => (
    <Item
      key={index}
      index={index}
      Doctors={Doctors}
      Services={Services}
      ServicesType={ServicesType}
      onDelete={onDelete}
    />
  ))

  if (!Patient) {
    return <Typography name="h2">Yuklanmoqda...</Typography>;
  }

  return (
    <section className="patient-reception">
      <div className='patient-reception-head'>
        <div>
          <Typography name="text"># {Patient?.id}</Typography>
          <Typography className="patient-reception-title" name="h2">
            {Patient?.surname} {Patient?.name}
          </Typography>
        </div>
        <div></div>
        <Input  htmlType="reason"  placeholder="Qabul Sababi..."  />
      </div>

      <header className="patient-reception-header">
        {["№", "Xizmat", "Xizmat turi", "Doktor", "Narxi"].map((text, index) => (
          <Typography key={index} name="text">
            {text}
          </Typography>
        ))}
      </header>

      <div className="patient-reception-body">
        <ul>
          {serviceItem}
        </ul>

        <button
          onClick={() => setAddServices((prev) => [...prev, { id: prev.length }])}
          className="patient-reception-btn form-btn"
          type="button"
        >
          <FaPlus />
        </button>
      </div>

      <footer className="patient-reception-footer">
        <Input value={ReceptionStore.totalPrice} htmlType="number" label="Jami" placeholder={0} readOnly />
        <Dropdown
          onChange={(value) => dispatch(paymentMethod(value))}
          label="To'lov turi"
          options={[
            { value: "Card", label: "Card" },
            { value: "Naxt pul", label: "Naxt pul" },
          ]}
        />
        <Input
          onChange={(e) => dispatch(paidAmount(parseFloat(e.target.value)))}
          htmlType="number"
          label="To'landi"
          placeholder={0}
        />
        <button className="form-btn" type="button">
          Promo kod
        </button>
        <button onClick={() => dispatch(saveServices())} className="form-btn" type="button">
          Saqlash
        </button>
        <button disabled={ReceptionStore.checkStatus} className="form-btn" type="button">
          Chek chiqazish
        </button>
      </footer>
    </section>
  );
};

export default Index;
