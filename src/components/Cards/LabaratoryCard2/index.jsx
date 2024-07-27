import React from 'react'
import { LuClipboardEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Alert from 'sweetalert2'

const index = (props) => {

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

    const {index, name, servicetype, status, date} =props

  return (
    <div className='serviec-card'>
        <div>{index + 1}</div>
        <div>{name}</div>
        <div>{servicetype}</div>
        <div>{date}</div>
        <div>{status}</div>
        <div>
          <div className='service-edit'><LuClipboardEdit /></div>
          <div onClick={HandleAlert} className='service-delete'><MdDelete /></div>
        </div>
    </div>
  )
}

export default index