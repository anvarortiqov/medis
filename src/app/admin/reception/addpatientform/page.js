"use client"

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

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please inter your First name.",
    }),
    surname: z.string().min(2, {
        message: "Please inter your Surname.",
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
    password: z.number().min(2, {
        message: "Please inter your Password.",
    }),
})



const AddPatientForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const [date, setDate] = React.useState()

    return (
        <div className="w-full p-4">
            <header className="mb-8">
                <h1 className="text-text_color text-[25px]">Bemor ma’lumotlari</h1>
                <p className="text-[#6F6C90] text-md pb-3">Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</p>
                <hr></hr>
            </header>

            <main>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-6">
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
                            name="password"
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
                            name="jinsi"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Jinsi</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Jinsi</SelectLabel>
                                                    <SelectItem value="man">Man</SelectItem>
                                                    <SelectItem value="woman">Woman</SelectItem>
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
                            name="jinsi"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Foydalanuvchi Turi</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Foyadalanuvchi Turi</SelectLabel>
                                                    <SelectItem value="admin">admin</SelectItem>
                                                    <SelectItem value="doctor">doctor</SelectItem>
                                                    <SelectItem value="labarant">labarant</SelectItem>
                                                    <SelectItem value="bemor">bemor</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="header-logo" type="submit">Bemor Qo'shish +</Button>
                    </form>
                </Form>
            </main>
        </div>
    );
};

export default AddPatientForm;