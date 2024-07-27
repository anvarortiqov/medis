import React from 'react'
import './style.css'
import RoomImg from '../../assets/images/rooms.png'
import RoomsCard from '../../components/Cards/RoomCard/index'
import BookRoom from '../../components/Modals/BookRoom/index';

const index = () => {


    const BookRoomtHandler = ()=> {
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
        <BookRoom/>
        <div className='rooms-head-box'>
            <div className='rooms-head'>
                <input className='input-style' type="search" placeholder='Search...' />
                <select className='input-style'>
                    <option disabled value="">Choose Category</option>
                    <option value="1">Premium Xonalar</option>
                    <option value="2">2-kishilik Xonalar</option>
                    <option value="4">1-kishilik Xonalar</option>
                    <option value="3">Bo'sh Xonalar</option>
                </select>
                <button className='form-btn' onClick={BookRoomtHandler}>Xona Qo'shish</button>
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
