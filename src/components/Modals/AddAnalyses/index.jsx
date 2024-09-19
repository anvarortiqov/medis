import { useState } from 'react'
import './style.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { SlashCommand } from 'ckeditor5-premium-features';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import Form, { Dropdown, Input } from '../../Form';

const index = () => {
  
  const [plaboratoryAssistant, setPlaboratoryAssistant] = useState([{ value: null, label: "Bo'sh" }])

  const rooms = Array.from({ length: 50 }).map((_, index) => ({ value: index, label: `${index + 1}-xona` }))

  const onFinish = async (values) => {
    try {
      console.log(values)
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div className='add-employee'>
      <Form onFinish={onFinish}>

        <div className="add-analys-content">
          <div className='add-analys-items'>
            <Input name={"name"} placeholder={"Analiz nomi"} label={"Analiz nomi"} required={{ required: true, message: "Kiriting!" }} />

            <Dropdown name={"assistant"} options={plaboratoryAssistant} label={"Laborant"} />

            <Input htmlType='date' name={"date"} placeholder={"Sana"} label={"Qo'shilgan sana"} required={{ required: true, message: "Kiriting!" }} />
          </div>

          <div className='add-analys-items'>

            <Dropdown label={"Xona"} multi options={rooms} />

            <CKEditor
              editor={ClassicEditor}
              config={{
                toolbar: {
                  items: ['undo', 'redo', '|', 'bold', 'italic'],
                },
                plugins: [
                  Bold, Essentials, Italic, Mention, Paragraph, SlashCommand, Undo
                ],
                licenseKey: '<YOUR_LICENSE_KEY>',
                mention: {
                  // Mention configuration
                },
                initialData: '<p>Shablon!</p>',
              }}
            />
          </div>
          <div className='add-analys-items'>
            <Input htmlType='number' name={"amount"} placeholder={"Summa"} label={"Narxi"} required={{ required: true, message: "Kiriting!" }} />

            <Dropdown name={"status"} label={"Xolati"} options={[
              { value: "ACTIVE", label: "ACTIVE" },
              { value: "PENDING", label: "PENDING" },
              { value: "DELETED", label: "DELETED" },
            ]} />
          </div>
        </div>

        <button type='submit' className='form-btn'>Saqlash</button>
      </Form>
    </div>
  )
}

export default index
