import React from 'react'
import './style.css'
import RoomImg from '../../assets/images/rooms.png'
import RoomsCard from '../../components/Cards/RoomCard/index'
import BookRoom from '../../components/Modals/BookRoom/index';
import { Dropdown, Input } from '../../components/Form';

const index = () => {


    const BookRoomtHandler = () => {
        let patientadd1 = document.querySelector('.book-room')
        patientadd1.classList.toggle('book-room-exist')
    }

    const Rooms = [
        {
            id: 1,
            img: RoomImg,
            roomnumber: 1,
            characteristics: "Wi fi, Tv, Dush",
            status: "band",
            price: 400000,
            persons: 2
        },
        {
            id: 2,
            img: RoomImg,
            roomnumber: 1,
            characteristics: "Wi fi, Tv, Dush",
            status: "band",
            price: 300000,
            persons: 3
        },
        {
            id: 3,
            img: RoomImg,
            roomnumber: 23,
            characteristics: "Wi fi, Tv, Dush",
            status: "band",
            price: 400000,
            persons: 2
        },
        {
            id: 4,
            img: RoomImg,
            roomnumber: 44,
            characteristics: "Wi fi, Tv, Dush",
            status: "band",
            price: 500000,
            persons: 1
        },
        {
            id: 5,
            img: RoomImg,
            roomnumber: 15,
            characteristics: "Wi fi, Tv, Dush",
            status: "band",
            price: 400000,
            persons: 2
        },
        {
            id: 6,
            img: RoomImg,
            roomnumber: 19,
            characteristics: "Wi fi, Tv, Dush",
            status: "bosh",
            price: 400000,
            persons: 2
        }
    ]
    return (
        <div className='rooms-box'>
            <BookRoom />
            <div className='rooms-head-box'>
                <div className='rooms-head rooms-head-wrapper'>
                    <Input required={{required: true, message: "Kiriting!"}}  placeholder={"Serach..."} />

                    <Dropdown options={[
                        { value: "ACTIVE", label: "ACTIVE" },
                        { value: "DELETED", label: "DELETED" }
                    ]} />

                    <label className='rooms-head-btn'>
                        <button className='form-btn' onClick={BookRoomtHandler}>Xona Qo'shish</button>
                    </label>
                </div>
            </div>
            <div className='rooms-content'>
                {Rooms.map(item => (
                    <RoomsCard
                        key={item.id}
                        img={item.img}
                        roomnumber={item.roomnumber}
                        characteristics={item.characteristics}
                        status={item.status}
                        price={item.price}
                        persons={item.persons}
                    />
                ))}
            </div>
        </div>
    )
}

export default index
