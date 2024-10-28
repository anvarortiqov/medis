"use client";

import '../rooms/index.css'
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";

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
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import React from "react";

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const invoices = [
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Deleted",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Deleted",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Pending",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        service: "Test",
        price: 20000,
        status: "Active",
    },
]



const Services = () => {

    const invoice = invoices.map((invoice, index) => (
        <TableRow key={invoice.invoice} className="text-text_color text-[15px]">
            <TableCell className="font-medium">{index+1}</TableCell>
            <TableCell>
                <Link href="#">{invoice.service}</Link>
            </TableCell>
            <TableCell>
                <Link href="#">{invoice.fish}</Link>
            </TableCell>
            <TableCell>{invoice.price} so'm</TableCell>
            <TableCell>
                <div className={`py-2 text-center text-white rounded ${
                    invoice.status === 'Active'
                        ? 'bg-[#24c18f]'
                        : invoice.status === 'Pending'
                            ? 'bg-[#ad6005]'
                            : invoice.status === 'Deleted'
                                ? 'bg-red-500'
                                : ''
                    }`}
                >
                    {invoice.status}
                </div>
            </TableCell>
            <TableCell className="text-center">
                <Button className="h-10 text-[16px]  text-white bg-[#24c18f]">
                    <FaEdit />
                </Button>
            </TableCell>
            <TableCell className="">
                <Button className="h-10 text-[16px] text-white bg-red-500">
                    <MdDeleteForever />
                </Button>
            </TableCell>
        </TableRow>
    ))

    return (
        <div className="w-full m-auto px-4 flex flex-col justify-between min-height">
            <header>
                <div className="flex w-full gap-5 py-3 ">
                    <Input className="bg-white box-shadow" type="search" placeholder="Qiirish..."/>
                    <Select>
                        <SelectTrigger className="bg-white box-shadow">
                            <SelectValue placeholder="Xizmat Turini Tanlang"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Xizmat Turi</SelectLabel>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="deleted">Deleted</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Link href="services/addservice"><Button className="header-logo px-12" type="submit">Xizmat Qo'shish</Button></Link>
                </div>
            </header>
            <main className="services-main">
                <Table>
                    <TableCaption>A list of your recent Services.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-[#737791] text-[16px] font-medium">
                            <TableHead className="w-[70px]">№</TableHead>
                            <TableHead >Xizmat Nomi</TableHead>
                            <TableHead>F.I.O</TableHead>
                            <TableHead>Narx</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoice}
                    </TableBody>
                </Table>
            </main>
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
        </div>
    );
};

export default Services;
