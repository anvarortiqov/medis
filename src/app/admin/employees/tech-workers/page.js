
"use client";

import '../../reception/index.css'
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
        position: "Elektrik",
        phone: "+998 99 999 99 99",
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        position: "Bog'bon",
        phone: "+998 99 999 99 99",
        status: "Active",
    },
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        position: "Qorovul",
        phone: "+998 99 999 99 99",
        status: "Pending",
    },
]



const TechWorkers = () => {

    const invoice = invoices.map((invoice, index) => (
        <TableRow key={invoice.invoice} className="text-text_color text-[15px]">
            <TableCell className="font-medium">{index+1}</TableCell>
            <TableCell>
                <Link href="#">{invoice.fish}</Link>
            </TableCell>
            <TableCell>
                <Link href="#">{invoice.position}</Link>
            </TableCell>
            <TableCell>{invoice.phone} </TableCell>
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
        <div className="w-full m-auto flex flex-col justify-between">
            <header>
                <div className="grid grid-cols-3 w-full gap-5 py-3 ">
                    <Input className="bg-white box-shadow" type="search" placeholder="Qiirish..."/>
                    <div></div>
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
                </div>
            </header>
            <main className="employee-main ">
                <Table>
                    <TableCaption>A list of Technical Employees in Hospital.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-[#737791] text-[16px] font-medium">
                            <TableHead className="w-[70px]">№</TableHead>
                            <TableHead>F.I.O</TableHead>
                            <TableHead >Lavozim</TableHead>
                            <TableHead>Tel Raqam</TableHead>
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

export default TechWorkers;