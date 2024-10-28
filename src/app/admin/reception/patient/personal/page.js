import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {Typography} from "@/components/typography/Typography";

const Personal = () => {
    return (
        <div className="flex flex-col gap-5">
            <header className="flex items-center gap-5 py-5">
                <Avatar className="h-14 w-14">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <Typography className="text-[21px] text-text_color font-medium">Anvar</Typography>
                    <Typography className="text-[#5D5FEF] text-[14px]">Ortiqov</Typography>
                </div>
            </header>
            <main>
                <Typography className="text-[19px] font-medium pb-6 text-text_color">Bemor Malumotlari</Typography>
                <ul className="w-[70%] grid grid-cols-2 gap-5 justify-between font-medium">
                    <li className="flex flex-col">
                        <Typography className="text-text_color text-[16px]">Ism Familiyasi</Typography>
                        <Typography className="text-[#737791] text-[14px]">Anvar Oriqov</Typography>
                    </li>
                    <li className="flex flex-col">
                        <Typography className="text-text_color text-[16px]">Telefon Raqam</Typography>
                        <Typography className="text-[#737791] text-[14px]">+998 99 887 75 67</Typography>
                    </li>
                    <li className="flex flex-col">
                        <Typography className="text-text_color text-[16px]">Tug'ulgan Yil</Typography>
                        <Typography className="text-[#737791] text-[14px]">10.10.1998</Typography>
                    </li>
                    <li className="flex flex-col">
                        <Typography className="text-text_color text-[16px]">Manzil</Typography>
                        <Typography className="text-[#737791] text-[14px]">Chust</Typography>
                    </li>
                    <li className="flex flex-col">
                        <Typography className="text-text_color text-[16px]">Kasallik Tarihi</Typography>
                        <Typography className="text-[#737791] text-[14px]">Yoq</Typography>
                    </li>
                    <li className="flex flex-col">
                        <Typography className="text-text_color text-[16px]">Oxirgi Qabul</Typography>
                        <Typography className="text-[#737791] text-[14px]">04.08.2024</Typography>
                    </li>
                </ul>
            </main>
        </div>
    );
};

export default Personal;