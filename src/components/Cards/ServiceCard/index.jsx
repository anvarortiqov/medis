import React, { useEffect, useState } from 'react'
import './style.css'
import { LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Alert from 'sweetalert2'
import Status from '../../Status';
import axios from 'axios';
// import Swal from 'sweetalert2';

const index = ({ index, name, doctor, status, price, data }) => {
  const [Doctor, setDoctor] = useState(undefined)

  useEffect(() => {
    try {
      axios.get(import.meta.env.VITE_API + "/main_module/hodimlar/" + doctor).then(response => {
        if (response.status < 400) {
          setDoctor(response.data.surname + " " + response.data.name)
        }
      })
    } catch (error) {

    }
  }, [doctor])

  const HandleAlert = (id) => {
    Alert.fire({
      title: "Bu xizmatni bekor qilmoqchimisiz?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: `Yo'q`,
      confirmButtonText: "Ha",
      // cancelButtonText: "Bekor qilish"

    }).then(async (result) => {

      if (result.isConfirmed) {
        await axios.patch(import.meta.env.VITE_API + "/management/xizmat/" + id, { ...data, status: "DELETED" }).then((response) => {
          // window.location.reload()
          // Swal.fire("Saved!", "", "success");

          console.log(response);

        })

      }
      // else if (result.isDenied) {
      //   Swal.fire("Changes are not saved", "", "info");
      // }
    });
  }

  return (
    <div className='serviec-card'>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{Doctor ?? "Yuklanmoqda..."}</div>
      <div>{price} so'm</div>
      <Status text={status} />
      <div>
        <div className='service-edit'><LuClipboardEdit /></div>
        <div onClick={() => HandleAlert(data.id)} className='service-delete'><MdDelete /></div>
      </div>
    </div>
  )
}

export default index
