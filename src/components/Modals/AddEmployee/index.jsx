
import "./style.css"
import Typography from '../../Typography'
import Form, { Dropdown, UploadImage, Input, TextArea } from '../../Form'

const index = () => {

  const handleImageChange = (files) => {
    console.log({ ...formData, images: files });
  };

  const onFinish = values => {
    console.log(values);

  }

  return <section className='add-employee'>
    <div className="add-employee-title">
      <Typography name={"h2"}>Hodim ma’lumotlari</Typography>
      <Typography name={"text"}>Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</Typography>
    </div>

    <hr className='add-employee-line' />

    <Form className={"add-employee-form"} onFininsh={onFinish}>
      <div className="add-employee-col">
        <Input required={{ required: true, message: "Kiriting!" }} label={"Ism"} name={"name"} placeholder={"Ismingizni kiriting"} />

        <Input required={{ required: true, message: "Kiriting!" }} label={"Foydalanuvchi ismi"} name={"username"} placeholder={"Username kiriting"} />

        <Input required={{ required: true, message: "Kiriting!" }} label={"Telefon raqam"} name={"phone"} placeholder={"Telefon raqam kiriting"} />

        <Input required={{ required: true, message: "Kiriting!" }} label={"Ish staji"} name={"age"} placeholder={"Ish staji"} />

        <Dropdown options={[
          { value: 'ACTIVE', label: 'Active' },
          { value: 'INACTIVE', label: 'Inactive' },
          { value: 'PENDING', label: 'Pending' }
        ]} label={"Status"} />
      </div>
      <div className="add-employee-col">
        <Input required={{ required: true, message: "Kiriting!" }} label={"Familiya"} name={"surname"} placeholder={"Familiya kiriting"} />

        <Input required={{ required: true, message: "Kiriting!" }} htmlType='password' label={"Parol"} name={"password"} placeholder={"Parol kiriting"} />

        <Input label={"Qo'shimcha Telefon raqam"} name={"extra_phone"} placeholder={"Telefon raqam "} />

        <Input label={"Tug’ilgan yil,oy,kun"} htmlType='date' name={"birthday"} placeholder={"Tug’ilgan yil,oy,kun"} />

        <UploadImage name="images"
          multi={true}
          onChange={handleImageChange} label={'Rasm'} />

      </div>
      <div className="add-employee-col">
        <Input label={"Sharif"} name={"middle_name"} placeholder={"Sharifingiz "} />

        <Input label={"Elektron pochta"} name={"email"} placeholder={"Email "} />

        <Input label={"Yashash joyi"} name={"address"} placeholder={"Address"} />

        <TextArea placeholder={"Qo'shimcha ma'lumot"} name={"about"} label={"Qo'shimcha ma'lumot"} />

        <Dropdown options={[
          { value: 'GINEKOLOG', label: 'Ginekolog' },
          { value: 'LOR', label: 'Lor' }
        ]} label={"Lavozimi"} />
      </div>
    </Form>
  </section>
}

export default index
