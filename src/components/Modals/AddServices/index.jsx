
import './style.css'
import { useNavigate } from 'react-router-dom'
import Typography from '../../Typography'
import Form, { Dropdown, Input } from '../../Form'
import axios from "axios"
import { useEffect, useState } from 'react'
import Alert from 'sweetalert2'

const index = () => {

    // const navigate2 = useNavigate();
    // const [category, setCategory] = useState("");

    // const handleClick = ()=> {
    //     if(category == 'new'){
    //         navigate2("../newservicetype")
    //     }else{
    //         console.log("You have a problem with navigate")
    //     }
    // }

    const [UserType, setUserType] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
    try {
        axios.get(import.meta.env.VITE_API + "/public/userType/").then(response => {
        if (response.status < 400) {
            setUserType(() => response.data.results?.map(item => ({ value: item.id, label: item.user_type })))
        }
        })
    } catch (error) {

    }
    }, [])

    const onFinish = async (values) => {
    try {
        await axios.post(import.meta.env.VITE_API + "/public/patient/", {
        ...values, user_type: Number(values.user_type), date_joined: new Date(),
        }).then((response) => {
        if (response.status === 201) {
            Alert.fire({
            title: "Mufaqiyatli qo'shildi!",
            icon: "success",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: `Yo'q`,
            confirmButtonText: "Ha"
            }).then((result) => {

            if (result.isConfirmed) {
                navigate("/qabulxona")
            }
            });
        } else if (response.status >= 400) {
            Alert.fire({
            title: "Xatolik!",
            icon: "error",
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `Yo'q`,
            confirmButtonText: "Ha"
            })
        }
        });

    } catch (error) {
        console.error(error);
    }
    }

  return (
    <div className='add-services'>
      <div className="add-employee-title">
          <Typography name={"h2"}>Xizmat ma’lumotlari</Typography>
          <Typography name={"text"}>Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</Typography>
        </div>

        <hr className='add-employee-line' />

        <Form className={"add-employee-form"} onFininsh={onFinish}>

          <div className="add-employee-form-content">
            <div className="add-employee-col">
              <Input required={{ required: true, message: "Kiriting!" }} label={"Xizmat Nomi"} name={"name"} placeholder={"Xizmat Nomini kiriting"} />

              <Dropdown label={"Xona"} name={"room"} options={[
                { value: "22ROOM", label: "22 Xona" },
                { value: "33ROOM", label: "33 Xona" },
              ]} />
            </div>
            <div className="add-employee-col">
                <Dropdown label={"Xizmat Turi"} name={"type"} options={[
                    { value: "FIZYOTERAIYA", label: "Fizyo Terapia" },
                ]} />
              
              <Dropdown label={"Shifokor"} name={"doctor"} options={[
                { value: "ILHOMJONSOLIJONOV", label: "Ilhomjon Solijonov" },
                { value: "ANVAR ORTIQOV", label: "Anvar Ortiqov" },
              ]} />
              

            </div>
            <div className="add-employee-col">
              <Input label={"Xizmat Narxi"} name={"price"} placeholder={"Xizmat Narxi"} />

              <Dropdown label={"Status"} name={"status"} options={[
                { value: "FAOL", label: "Faol" },
                { value: "NOFAOL", label: "No Faol" },
              ]} />
            </div>
          </div>

          <button className='form-btn' type="submit">Bemor qo'shish</button>
        </Form>
    </div>
  )
}

export default index
