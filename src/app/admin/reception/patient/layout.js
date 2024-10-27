"use client";

import '../index.css'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
    { title: "Bemor" , path: "personal" },
    { title: "Analiz", path: "analiz" },
    { title: "Kasallik tarixi", path: "sickhistory" },
    { title: "Statsionar", path: "statsionar" },
    { title: "Qabul", path: "qabul" }
];

export default function PatientLayout({ children }) {
    const pathname = usePathname();
    const currentSegment = pathname.split("/").pop();

    return (
        <div className="flex flex-col justify-between">
            <header className="w-full px-4 h-14 flex justify-center items-end">
                <div className="w-full px-[0.55rem] py-[0.55rem] bg-white shadow rounded-md grid grid-cols-5 gap-5 justify-between">
                    {navLink.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={` flex justify-center items-center py-[0.3rem] rounded ${
                                currentSegment === link.path ? "header-logo text-[#fff] " : "text-text_color "
                            }`}
                        >

                            {link.title}
                        </Link>
                    ))}
                </div>
            </header>
            <main className="px-4 height-patient-screen">
                {children}
            </main>
        </div>
    );
}

