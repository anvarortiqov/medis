import React from 'react'
import Alert from 'sweetalert2'
import { LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const index = (props) => {
  
  const navigate = useNavigate();

    const handleClick = ()=> {
        navigate("../../about-workforce/worker-info")
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

    const {index, name, position, status, number} = props

  return (
    <Link onClick={handleClick} className='serviec-card'>
        <div>{index + 1}</div>
        <div>{name}</div>
        <div>{position}</div>
        <div>+998 {number}</div>
        <div>{status}</div>
        <div>
          <div className='service-edit'><LuClipboardEdit /></div>
          <div onClick={HandleAlert} className='service-delete'><MdDelete /></div>
        </div>
    </Link>
  )
}

export default index

