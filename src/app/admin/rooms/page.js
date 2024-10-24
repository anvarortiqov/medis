// "use client";
import './index.css'
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import  RoomImg from '../../../assets/img/rooms.png'
import {Card} from "@/components/card/Card";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


const DataRooms = [
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
    },
    {
        id: 7,
        img: RoomImg,
        roomnumber: 19,
        characteristics: "Wi fi, Tv, Dush",
        status: "bosh",
        price: 400000,
        persons: 2
    }
]

const Rooms = () => {

    const room = DataRooms.map((item,) =>(
        <Card
            id={item.id}
            img={item.img}
            price={item.price}
            persons={item.persons}
            characteristics={item.characteristics}
            roomnumber={item.roomnumber}
            status={item.status}
            className=""
        />
    ))

    return (
        <div className="w-full m-auto px-4 flex flex-col justify-between min-height">
            <header>
                <div className="flex w-full gap-5 py-3 ">
                    <Input className="bg-white box-shadow" type="search" placeholder="Qiirish..."/>
                    <Select>
                        <SelectTrigger  className="bg-white box-shadow">
                            <SelectValue placeholder="Xona Turini Tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Xonalar Turi</SelectLabel>
                                <SelectItem value="apple">1-Kishilik</SelectItem>
                                <SelectItem value="banana">2-Kishilik</SelectItem>
                                <SelectItem value="blueberry">Premium</SelectItem>
                                <SelectItem value="grapes">Premium Plus</SelectItem>
                                <SelectItem value="pineapple">Standart</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Link href="#"><Button className="header-logo px-12" type="submit">Xona Qo'shish</Button></Link>
                </div>
            </header>
            <main className="room-content">
                <div className="w-full grid grid-cols-3 gap-5 h-auto">
                    {room}
                </div>
                <footer>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#"/>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis/>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#"/>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </footer>
            </main>
        </div>
    );
};

export default Rooms;
