import React, { useEffect } from 'react'
import Alert from 'sweetalert2'
import { LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColor } from '../../../redux/slices/colorsSlice';
import Status from '../../Status';
// import Swal from 'sweetalert2';
import axios from 'axios';

const index = ({ index, name, position, status, number, data, ...props }) => {
  const ColorsStore = useSelector(state => state.colors);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getColor(status))
  }, [status]);

  const handleItem = (id) => {
    navigate("/about-workforce/worker-info/" + id)
  }

  const HandleAlert = (id) => {
    Alert.fire({
      title: "Ush bu hodimni haqiqatdan ham o'chirmoqchimisiz?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Yo'q`,
      confirmButtonText: "Ha",
      cancelButtonText: "Bekor qilish"
    }).then(async (result) => {

      if (result.isConfirmed) {
        await axios.patch(import.meta.env.VITE_API + "/main_module/hodimlar/" + id, {status: "DELETED"}).then((response) => {
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
    // about-workforce/worker-info
    <div className='serviec-card' {...props}>
      <div onClick={() => handleItem(data.id)}>{index + 1}</div>
      <div onClick={() => handleItem(data.id)}>{name}</div>
      <div onClick={() => handleItem(data.id)}>{position}</div>
      <div onClick={() => handleItem(data.id)}>{number}</div>
      <Status color={ColorsStore.color} background={ColorsStore.bg} text={status} />
      <div>
        <div className='service-edit'><LuClipboardEdit /></div>
        <div onClick={() => HandleAlert(data.id)} className='service-delete'><MdDelete /></div>
      </div>
    </div>
  )
}

export default index

