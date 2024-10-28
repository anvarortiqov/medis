import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";


export const Card = ({ id, img , roomnumber, className, persons, status, price, characteristics}) => {
    return(
        <>
            <Link href="/" className={`box-shadow bg-white rounded-[16px] p-4 ${className}`}  key={id}>
                <Image
                    aria-hidden
                    src={img}
                    alt="File icon"
                    className="w-full max-h-[180px] object-cover rounded-xl"
                />
                <div className='flex justify-between items-center py-2'>
                    <h1 className="text-[20px] text-text_color">{roomnumber}-Xona</h1>
                    <ul className="flex gap-2">
                        <li className="text-[14px] bg-[#EAE3FF] py-1 px-2 rounded-md">{persons}-kishilik</li>
                        <li className="text-[14px] bg-[#CCF0F3] capitalize py-1 px-2 rounded-md">{status}</li>
                    </ul>
                </div>
                <div className='flex justify-between items-center mb-3'>
                    <div>
                        <h4 className="text-text_color text-[16px]">Qulayliklar</h4>
                        <p className="text-[14px] text=[#4E545F]">{characteristics}</p>
                    </div>
                    <div>
                        <h4 className="text-text_color text-[16px]">Narxi:</h4>
                        <p className="text-[14px] text=[#4E545F]">{price} so'm</p>
                    </div>
                </div>
                <Button className="header-logo px-12 text-[16px] h-10">Band Qilish</Button>
            </Link>
        </>

    );
};
