import '../../index.css'
import {Typography} from "@/components/typography/Typography";
import {Input} from "@/components/ui/input";
import React from "react";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

const Acceptance = () => {
    return (
        <div>
            <header className="grid grid-cols-3 h-14 gap-3 items-end">
                <div className="flex h-full items-center gap-3">
                    <Typography className="text-text_color text-xl"># 5</Typography>
                    <Typography className="text-text_color text-xl">Anvar Ortiqov</Typography>
                </div>
                <div></div>
                <Input className=" bg-white box-shadow" placeholder="Qabul Sababi..."  />
            </header>
            <main className="acceptance-main-height  mt-1 relative">

                <Button className="header-logo absolute text-[18px] p-0 w-11 rounded-[50%] right-0 bottom-0" type="submit"><FaPlus /></Button>
            </main>
            <footer className="grid grid-cols-3 gap-3">
                <div>
                    <Label htmlForm="all">Jami:</Label>
                    <Input id="all" className="w-full bg-white box-shadow" placeholder="0"/>
                </div>
                <div>
                    <Label htmlForm="pay-type">To'lov turi</Label>
                    <Input id="pay-type" className="w-full bg-white box-shadow" placeholder="0"/>
                </div>
                <div>
                    <Label htmlForm="payed">To'landi</Label>
                    <Input id="payed" className="w-full bg-white box-shadow" placeholder="0"/>
                </div>
                <Button className="header-logo" type="submit">Promo Kod</Button>
                <Button className="header-logo" type="submit">Saqlash</Button>
                <Button className="header-logo" type="submit">Chek chiqazish</Button>
            </footer>
        </div>
    );
};

export default Acceptance;