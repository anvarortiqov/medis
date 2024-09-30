import { useEffect, useState, useCallback, useMemo } from "react";
import "./patient-reception.css";
import Typography from "../../Typography";
import { Dropdown, Input } from "../../Form";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  paidAmount,
  paymentMethod,
  removeServiceItem,
  saveServices,
} from "../../../redux/slices/receptionSlice";

const Item = ({ index, onDelete }) => {
  const dispatch = useDispatch();
  const ReceptionStore = useSelector((state) => state.reception);
  const [service, setService] = useState(null);
  const [serviceType, setServiceType] = useState(null);
  const [servicesType, setServicesType] = useState([
    { value: null, label: "Bo'sh" },
  ]);
  const [doctor, setDoctor] = useState(null);
  const [doctors, setDoctors] = useState([{ value: null, label: "Bo'sh" }]);
  const [amount, setAmount] = useState(0);

  const fetchServices = useCallback(async () => {
    if (!service) return setServicesType([{ value: null, label: "Bo'sh" }]);

    const endpoint =
      service === "ANALYSE_NURSE"
        ? "/main_module/occupation/"
        : "/management/service/";

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}${endpoint}`,
      );
      setServicesType(
        data.results.map((item) => ({ value: item.id, label: item.name })),
      );
    } catch (error) {
      console.error(error);
      setServicesType([{ value: null, label: "Bo'sh" }]);
    }
  }, [service]);

  const fetchDoctors = useCallback(async () => {
    if (!serviceType) return setDoctors([{ value: null, label: "Bo'sh" }]);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/main_module/hodimlar/`,
      );
      setDoctors(
        data.results
          .filter((item) => item.lavozimi === serviceType)
          .map((item) => ({
            value: item.id,
            label: `${item.surname} ${item.name}`,
          })),
      );
    } catch (error) {
      console.error(error);
      setDoctors([{ value: null, label: "Bo'sh" }]);
    }
  }, [serviceType]);

  const fetchAmount = useCallback(async () => {
    if (!doctor) return;

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/management/service/`,
      );
      const serviceItem = data.results.find(
        (item) => item.type === serviceType,
      );
      if (serviceItem) {
        const newAmount = parseFloat(serviceItem.amount);
        setAmount(newAmount);
        dispatch(
          addService({
            type: service,
            data: {
              index,
              serviceId: serviceItem.id,
              amount: newAmount,
              doctor_name: serviceItem.doctor_name,
              serviceType,
              service,
            },
          }),
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [doctor, serviceType, index]);

  useEffect(() => {
    fetchServices();
  }, [service]);

  useEffect(() => {
    fetchDoctors();
  }, [serviceType]);

  useEffect(() => {
    if (doctor) {
      fetchAmount();
    } else {
      ["SERVICES", "ANALYSES", "ANALYSE_NURSE"].forEach((type) => {
        const filtered = ReceptionStore[type.toLowerCase()].filter(
          (item) => item.index !== index,
        );
        dispatch(removeServiceItem({ type, filtered }));
      });
    }
  }, [doctor]);

  return (
    <li className="patient-reception-item">
      <Typography name="text" className="patient-reception-item-index">
        {index + 1}
      </Typography>

      <Dropdown
        onChange={setService}
        options={[
          { value: "ANALYSE_NURSE", label: "Doktor qabuli" },
          { value: "ANALYSES", label: "Labaratoriya" },
          { value: "SERVICES", label: "Boshqa xizmatlar" },
        ]}
      />

      <Dropdown
        onChange={setServiceType}
        disabled={!service}
        options={servicesType}
      />
      <Dropdown
        onChange={setDoctor}
        disabled={!serviceType}
        options={doctors}
      />

      <div className="patient-reception-item-action">
        <Input value={amount} htmlType="number" readOnly placeholder={0} />
        <button onClick={() => onDelete(index)}>
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

const Index = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [addServices, setAddServices] = useState([{ id: 0 }]);
  const ReceptionStore = useSelector((state) => state.reception);
  const EmployeeStore = useSelector((state) => state.user.details);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API}/public/patient/${id}`,
        );
        setPatient(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPatientData();
  }, [id]);

  const onDelete = useCallback(
    (index) => {
      setAddServices((prev) => prev.filter((_, i) => i !== index));

      ["SERVICES", "ANALYSES", "ANALYSE_NURSE"].forEach((type) => {
        const filtered = ReceptionStore[type.toLowerCase()].filter(
          (item) => item.index !== index,
        );
        dispatch(removeServiceItem({ type, filtered }));
      });
    },
    [
      ReceptionStore.services,
      ReceptionStore.analyses,
      ReceptionStore.analyse_nurse,
      dispatch,
    ],
  );

  const serviceItems = useMemo(
    () =>
      addServices.map((_, index) => (
        <Item key={index} index={index} onDelete={onDelete} />
      )),
    [addServices, onDelete],
  );

  const onSave = async () => {
    try {
      console.log(ReceptionStore);
    } catch (e) {
      console.error(e);
    }
  };

  if (!patient) {
    return <Typography name="h2">Yuklanmoqda...</Typography>;
  }

  return (
    <section className="patient-reception">
      <div className="patient-reception-head">
        <Typography name="text"># {patient?.id}</Typography>
        <Typography className="patient-reception-title" name="h2">
          {patient?.surname} {patient?.name}
        </Typography>
        <Input htmlType="reason" placeholder="Qabul Sababi..." />
      </div>

      <header className="patient-reception-header">
        {["№", "Xizmat", "Xizmat turi", "Doktor", "Narxi"].map(
          (text, index) => (
            <Typography key={index} name="text">
              {text}
            </Typography>
          ),
        )}
      </header>

      <div className="patient-reception-body">
        <ul>{serviceItems}</ul>
        <button
          onClick={() =>
            setAddServices((prev) => [...prev, { id: prev.length }])
          }
          className="patient-reception-btn form-btn"
          type="button"
        >
          <FaPlus />
        </button>
      </div>

      <footer className="patient-reception-footer">
        <Input
          value={ReceptionStore.total_amount}
          htmlType="number"
          label="Jami"
          placeholder={0}
          readOnly
        />
        <Dropdown
          onChange={(value) => dispatch(paymentMethod(value))}
          label="To'lov turi"
          options={[
            { value: "CARD", label: "Plastik karta" },
            { value: "CASH", label: "Naxt pul" },
          ]}
        />
        <Input
          onChange={(e) => dispatch(paidAmount(parseFloat(e.target.value)))}
          htmlType="number"
          label="To'landi"
          placeholder={0}
          value={ReceptionStore.paid_amount}
        />
        <button className="form-btn" type="button">
          Promo kod
        </button>
        <button onClick={onSave} className="form-btn" type="button">
          Saqlash
        </button>
        <button
          disabled={ReceptionStore.checkStatus}
          className="form-btn"
          type="button"
        >
          Chek chiqazish
        </button>
      </footer>
    </section>
  );
};

export default Index;
