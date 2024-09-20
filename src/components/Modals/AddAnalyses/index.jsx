import { useEffect, useState } from "react";
import "./style.css";
import Form, { Dropdown, Input, TextArea } from "../../Form";
import axios from "axios";

const index = () => {
  const [Devices, setDevices] = useState([{ value: null, label: "Bo'sh" }]);
  const [Employees, setEmployees] = useState([{ value: null, label: "Bo'sh" }]);

  const rooms = Array.from({ length: 50 }).map((_, index) => ({
    value: index,
    label: `${index + 1}-xona`,
  }));

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get(import.meta.env.VITE_API + "/main_module/hodimlar/")
          .then((response) => {
            if (response.status < 400) {
              setEmployees(() =>
                response.data.results?.map((item) => ({
                  value: item.id,
                  label: `${item.surname} ${item.name}`,
                })),
              );
            }
          })
          .catch(console.error);

        await axios
          .get(import.meta.env.VITE_API + "/management/devices/")
          .then((response) => {
            if (response.status < 400) {
              setDevices(() =>
                response.data.results?.map((item) => ({
                  value: item.id,
                  label: item.name,
                })),
              );
            }
          })
          .catch(console.error);
      } catch (e) {
        console.warn(e);
      }
    };

    fetch();
  }, []);

  const onFinish = async (values) => {
    try {
      axios
        .post(import.meta.env.VITE_API + "/management/service/", values)
        .catch(console.error);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="add-employee">
      <Form onFinish={onFinish}>
        <div className="add-analys-content">
          <div className="add-analys-items">
            <Input
              name={"name"}
              placeholder={"Analiz nomi"}
              label={"Analiz nomi"}
              required={{ required: true, message: "Kiriting!" }}
            />

            <Dropdown
              name={"assistant"}
              options={Employees}
              label={"Laborant"}
            />
            <TextArea name={"text"} label={"Matn"} placeholder={"Text"} />
          </div>

          <div className="add-analys-items">
            <Dropdown name={"room"} label={"Xona"} multi options={rooms} />
            <Dropdown
              name={"status"}
              label={"Xolati"}
              options={[
                { value: "ACTIVE", label: "ACTIVE" },
                { value: "PENDING", label: "PENDING" },
                { value: "DELETED", label: "DELETED" },
              ]}
            />
          </div>
          <div className="add-analys-items">
            <Input
              htmlType="number"
              name={"amount"}
              placeholder={"Summa"}
              label={"Narxi"}
              required={{ required: true, message: "Kiriting!" }}
            />
            <Dropdown
              label={"Qurulma"}
              options={Devices}
              multi
              name={"device"}
            />
          </div>
        </div>

        <button type="submit" className="form-btn">
          Saqlash
        </button>
      </Form>
    </div>
  );
};

export default index;
