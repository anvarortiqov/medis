'use client'

import React from "react"
import './index.css'
import {Input} from "@/components/ui/input";
import {Typography} from "@/components/typography/Typography";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const invoices = [
    {
        invoice: "INV001",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
    {
        invoice: "INV002",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
    {
        invoice: "INV003",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
    {
        invoice: "INV004",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
    {
        invoice: "INV005",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
    {
        invoice: "INV006",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
    {
        invoice: "INV007",
        fish: "Ortiqov Anvar Olimjon og`li",
        birthday: "03/08/2000",
        phone: "+999 (90) 123 12-12",
        recepted: "03/12/2024",
    },
]

const Reception = () => {

    const [date, setDate] = React.useState()

    const invoice = invoices.map((invoice, index) => (
        <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{index+1}</TableCell>
                <TableCell className="felx gap-3 items-center">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Link href="#">{invoice.fish}</Link>
                    </div>
                </TableCell>
                <TableCell>{invoice.birthday}</TableCell>
                <TableCell>{invoice.phone}</TableCell>
                <TableCell >{invoice.recepted}</TableCell>
        </TableRow>
    ))
    return (
        <div className="w-full m-auto px-4 flex flex-col justify-between min-height">
            <header>
                <div className="w-full flex items-center justify-between py-3">
                    <Typography type='h1' className="text-[26px]">Kasallar Ro'yhati:</Typography>
                    <Link href="#"><Button className="header-logo" type="submit">Bemor Qo'shish</Button></Link>
                </div>

                <div className="flex w-full gap-5 ">
                    <Input className="bg-w
                    hite box-shadow" type="text" placeholder="F.I.O"/>
                    {/*<Input className="bg-white box-shadow" type="date" placeholder="Date"/>*/}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "h-12 w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    <Input className="bg-white box-shadow" type="number" placeholder="Telefonni Kiriting"/>
                </div>
            </header>
            <main className="height-reception-content">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[70px]">№</TableHead>
                            <TableHead>F.I.O</TableHead>
                            <TableHead>Tug'ulgan Sana/Oy/Yil</TableHead>
                            <TableHead>Telefon Raqam</TableHead>
                            <TableHead>Ro'yhatda O'tgan Sana</TableHead>
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
                            <PaginationPrevious href="#" />
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
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </footer>
        </div>
    );
};

export default Reception;
