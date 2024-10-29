

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
import UploadImage from "@/components/ui/uploadImage";
import {Checkbox} from "@/components/ui/checkbox";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Please inter your First name.",
    }),
})



const Hospital = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const [date, setDate] = React.useState()

    return (
        <div className="w-full">
            <main className="py-3">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Shifohona Nomi</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled
                                               placeholder="Nigoh Shifohonasi"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Viloyat</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled placeholder="Namangan"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Tuman</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled placeholder="Chust"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled
                                               placeholder="Buyuk Ipak Yoli, 57"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled
                                               placeholder="ilhomjonsolijonov@gmail.com"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Telefon Raqam</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled
                                               placeholder="+998 (99) 999 99 99"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Shifohona Stir</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled placeholder="923874289"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Rahbar F.I.O</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled placeholder="I.B.Aliyevich"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Rahbar Tel Raqam</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled
                                               placeholder="+998 (88) 888 88 88"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Rahbar Email</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled
                                               placeholder="example@gmail.com"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Shifokor Hajmi(Necha kishilik)</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled placeholder="2000"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Input className="bg-white box-shadow" disabled placeholder="Ishlayapti"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Logotip</FormLabel>
                                    <FormControl>
                                        <UploadImage
                                            name="image"
                                            multi={true}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col items-center gap-5 mt-4">
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Labaratoria
                            </label>
                            <Checkbox id="terms"/>
                        </div>

                        <div className="flex flex-col items-center gap-5 mt-4">
                            <label
                                htmlFor="terms2"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Statsionar
                            </label>
                            <Checkbox id="terms2"/>
                        </div>

                        <Button className="header-logo" type="submit">Saqlash</Button>
                    </form>
                </Form>
            </main>
        </div>
    );
};

export default Hospital;