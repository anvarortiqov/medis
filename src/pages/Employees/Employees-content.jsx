import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import './style.css'
import EmployeeCard from "../../components/Cards/EmployeeCard/index"
import { Dropdown, Input } from "../../components/Form";
import Pagination from "../../components/Pagination/index";

const EmployeesContent = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        try {
            axios.get(import.meta.env.VITE_API + "/main_module/hodimlar/").then(response => {
                if (response.status === 200) {
                    setData(response.data.results)
                }
            })
        } catch (error) {
            console.warn(error);
        }
    }, []);

    const dataItem = Data.map((item, index) => <Fragment key={index}>
        <EmployeeCard
            index={index}
            name={`${item.surname} ${item.name.at(0)}.${item.middle_name?.at(0) ?? ""}`}
            number={item.phone}
            position={item.lavozimi ?? "Ko'rsatilmagan"}
            status={item.status}
            data={item}
        />
    </Fragment>)

    return (
        <div className='rahbarlar'>
            <div className='rooms-head '>
                <Input required={{ required: true, message: "Kiriting!" }} placeholder={"Serach..."} />
                <div></div>
                <Dropdown options={[
                    { value: "ACTIVE", label: "ACTIVE" },
                    { value: "DELETED", label: "DELETED" }
                ]} />
            </div>

            <div className='massaj-head'>
                <div>N</div>
                <div>Name</div>
                <div>Position</div>
                <div>Phone Number</div>
                <div>Status</div>
            </div>
            <div className='rahbarlar-content'>
                {Data.length === 0 ? "Yuklanmoqda..." : dataItem.length === 0 ? "Ma'kumot topilmadi" : dataItem}
            </div>
            <div className="pagination">
                <Pagination current={1} total={Data.length} />
                <button className='form-btn pagination-btn-download'><FaDownload /></button>
            </div>
        </div>
    )
}

export default EmployeesContent