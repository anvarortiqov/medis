import React, { useEffect } from 'react'
import Alert from 'sweetalert2'
import { LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getColor } from '../../../redux/slices/colorsSlice';
import Status from '../../Status';


const index = ({ index, name, position, status, number, ...props }) => {
  const ColorsStore = useSelector(state => state.colors);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColor(status))
  }, [status]);

  const navigate = useNavigate();

    const handleClick = ()=> {
        navigate("../../about-workforce")
    }


  const HandleAlert = () => {
    Alert.fire({
      title: "Do you want to delete this item?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: `Yes`,
      confirmButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <div className='serviec-card'>
      <div>{index + 1}</div>
      <div>{name}</div>
      <div>{position}</div>
      <div>+998 {number}</div>
      <Status color={ColorsStore.color} background={ColorsStore.bg} text={status} />
      <div>
        <div className='service-edit'><LuClipboardEdit /></div>
        <div onClick={HandleAlert} className='service-delete'><MdDelete /></div>
      </div>
    </div>

  )
}

export default index

