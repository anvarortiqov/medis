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

const Item = ({ index, onDelete, onAmountChange }) => {
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
    if (service === "doctor" || service === "other") {
      const endpoint =
        service === "doctor"
          ? "/main_module/occupation/"
          : "/management/service/";

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}${endpoint}`,
        );
        if (response.status < 400) {
          setServicesType(
            response.data.results.map((item) => ({
              value: item.id,
              label: item.name,
            })),
          );
          setServiceType(null);
          setDoctor(null);
          setAmount(0);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setServicesType([{ value: null, label: "Bo'sh" }]);
    }
  }, [service]);

  const fetchDoctors = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/main_module/hodimlar/`,
      );
      if (response.status < 400) {
        setDoctors(
          response.data.results.map((item) =>
            item.lavozimi === serviceType
              ? { value: item.id, label: `${item.surname} ${item.name}` }
              : { value: null, label: "Bo'sh" },
          ),
        );
      } else {
        setDoctors([{ value: null, label: "Bo'sh" }]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [serviceType]);

  const fetchAmount = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/management/service/`,
      );
      if (response.status < 400) {
        response.data.results.forEach((item) => {
          if (item.type === serviceType) {
            const newAmount = parseFloat(item.amount);
            setAmount(newAmount);
            onAmountChange(index, newAmount);
            dispatch(
              addService({
                index,
                serviceId: item.id,
                amount: newAmount,
                doctor_name: item.doctor_name,
                service,
                serviceType,
              }),
            );
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [doctor, serviceType, index, onAmountChange]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  useEffect(() => {
    if (doctor) {
      fetchAmount();
    }

    if (!doctor) {
      dispatch(
        removeServiceItem(
          ReceptionStore.services.filter((item) => item.index !== index),
        ),
      );
    }
  }, [doctor, fetchAmount]);

  return (
    <li className="patient-reception-item">
      <Typography name="text" className="patient-reception-item-index">
        {index + 1}
      </Typography>

      <Dropdown
        onChange={setService}
        options={[
          { value: "doctor", label: "Doktor qabuli" },
          { value: "laboratory", label: "Labaratoriya" },
          { value: "other", label: "Boshqa xizmatlar" },
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
  const [addServices, setAddServices] = useState([{ id: 0, amount: 0 }]);
  const ReceptionStore = useSelector((state) => state.reception);
  const EmployeeStore = useSelector((state) => state.user.details);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/public/patient/${id}`,
        );
        if (response.status < 400) {
          setPatient(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatientData();
  }, [id]);

  const onDelete = useCallback(
    (index) => {
      setAddServices((prev) => prev.filter((_, i) => i !== index));
      const filtered = ReceptionStore.services.filter(
        (item) => item.index !== index,
      );
      dispatch(removeServiceItem(filtered));
    },
    [ReceptionStore.services, dispatch],
  );

  const onAmountChange = useCallback((index, newAmount) => {
    setAddServices((prev) => {
      const updated = [...prev];
      updated[index].amount = newAmount;
      return updated;
    });
  }, []);

  const serviceItems = useMemo(
    () =>
      addServices.map((_, index) => (
        <Item
          key={index}
          index={index}
          onDelete={onDelete}
          onAmountChange={onAmountChange}
        />
      )),
    [addServices, onDelete, onAmountChange],
  );

  const onSave = async () => {
    try {
      await axios
        .post(import.meta.env.VITE_API + "/hospital/qabul/", {
          ...ReceptionStore,
          status: "ACTIVE",
          hodim: EmployeeStore.id,
          bemor: id,
        })
        .then(() => {
          dispatch(saveServices());
        })
        .catch(console.error);
    } catch (e) {
      console.warn(e);
    }
  };

  if (!patient) {
    return <Typography name="h2">Yuklanmoqda...</Typography>;
  }

  return (
    <section className="patient-reception">
      <div className="patient-reception-head">
        <div>
          <Typography name="text"># {patient?.id}</Typography>
          <Typography className="patient-reception-title" name="h2">
            {patient?.surname} {patient?.name}
          </Typography>
        </div>
        <div></div>
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
            setAddServices((prev) => [...prev, { id: prev.length, amount: 0 }])
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
