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
import {Typography} from "@/components/typography/Typography";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please inter your First name.",
    }),
    price: z.string().min(2, {
        message: "Please inter your Phone Number.",
    }),
})



const AddAnalysisForm = () => {

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
                <Typography type={`h1`} className="text-text_color ">Bemor ma’lumotlari</Typography>
                <Typography className="text-[#6F6C90]  pb-3">Iltimos har bir maydonga to’liq va to’g’ri ma’lumotlarni kiriting !</Typography>
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
                                    <FormLabel>Analiz Nomi</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Analiz Nomini kiriting" {...field} />
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
                                    <FormLabel>Xona</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Xizmat Xonasi</SelectLabel>
                                                    <SelectItem value="22">22-Xona</SelectItem>
                                                    <SelectItem value="63">63-Xona</SelectItem>
                                                    <SelectItem value="21">21-Xona</SelectItem>
                                                    <SelectItem value="44">44-Xona</SelectItem>
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
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Xizmat Narxi</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" placeholder="Xizmat Narxini kiriting" {...field} />
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
                                    <FormLabel>Labarant</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Labarantlar</SelectLabel>
                                                    <SelectItem value="22">Anvar Ortiqov</SelectItem>
                                                    <SelectItem value="63">Ilhomjon Solijonov</SelectItem>
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
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Status</SelectLabel>
                                                    <SelectItem value="22">Active</SelectItem>
                                                    <SelectItem value="22">Pending</SelectItem>
                                                    <SelectItem value="22">Deleted</SelectItem>
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
                                    <FormLabel>Qurulma</FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger  className="h-12 bg-white box-shadow">
                                                <SelectValue placeholder="Select..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Qurulmalar</SelectLabel>
                                                    <SelectItem value="22">Aparat</SelectItem>
                                                    <SelectItem value="22">Aparat</SelectItem>
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Qoshimcha Malumotlar</FormLabel>
                                    <FormControl>
                                        <Textarea className="bg-white box-shadow" placeholder="Matnni kiriting" {...field} />
                                    </FormControl>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div></div>
                        <div></div>
                        <Button className="header-logo" type="submit">Analiz Qo'shish +</Button>
                    </form>
                </Form>
            </main>
        </div>
    );
};

export default AddAnalysisForm;