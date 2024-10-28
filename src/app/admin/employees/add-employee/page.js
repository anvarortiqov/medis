"use client"

import "../../rooms/index.css"
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Calendar as CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Typography} from "@/components/typography/Typography";
import {Textarea} from "@/components/ui/textarea";
import UploadImage from "@/components/ui/uploadImage";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please inter your First name.",
    }),
    surname: z.string().min(2, {
        message: "Please inter your Surname.",
    }),
    midname: z.string().min(2, {
        message: "Please inter your Middle Name.",
    }),
    address: z.string().min(2, {
        message: "Please inter your Address.",
    }),
    phone: z.number().min(2, {
        message: "Please inter your Phone Number.",
    }),
    username: z.string().min(2, {
        message: "Please inter your Username.",
    }),

})



const AddEmployee = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const [date, setDate] = React.useState()

    return (
        <div className="w-full flex flex-col gap-2 add-employees-main mt-2">
            <header className="flex flex-col gap-2">
                <Typography className="text-text_color text-[25px]">Bemor ma’lumotlari</Typography>
                <Typography className="text-[#6F6C90]">Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</Typography>
                <hr></hr>
            </header>

            <main>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-5">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ism</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Ismingizni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Familiyia</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Familiyangizni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="midname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sharif</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Sharifingizni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Foydalanuvchi Ismi</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Username kiriting!" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ism"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Parol</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Parolni kiriting!" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ism"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" className="bg-white box-shadow" placeholder="Email kiriting!" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefon Raqam</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Telefon Raqamingizni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Qoshimcha Tel Raqam</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Telefon Raqamingizni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Yashash Manzili</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Manzilingizni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ish Staji</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Ish shtaji " {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ism"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tug'gulgan kun</FormLabel>
                                    <FormControl>
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
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="jinsi"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Status</SelectLabel>
                                                    <SelectItem value="active">Actice</SelectItem>
                                                    <SelectItem value="inactive">InActive</SelectItem>
                                                    <SelectItem value="pending">Pending</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ism"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Qo'shimcha Malumotlar</FormLabel>
                                    <FormControl>
                                        <Textarea className="bg-white box-shadow" placeholder="Qoshimcha Malumotlar " {...field}></Textarea>
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ism"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rasm</FormLabel>
                                    <FormControl>
                                        <UploadImage
                                            name="image"
                                            multi={true}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lavozim"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Lavozim</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Lavozimlar</SelectLabel>
                                                    <SelectItem value="admin">Admin</SelectItem>
                                                    <SelectItem value="doctor">Doctor</SelectItem>
                                                    <SelectItem value="labarant">Labarant </SelectItem>
                                                    <SelectItem value="bemor">Bemor </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="header-logo mb-8" type="submit">Bemor Qo'shish +</Button>
                    </form>
                </Form>
            </main>
        </div>
    );
};

export default AddEmployee;