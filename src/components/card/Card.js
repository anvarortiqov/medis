import Link from "next/link";
import {Button} from "@/components/ui/button";


export const Card = ({ id, img , roomnumber, className, persons, status, price, characteristics}) => {
    return(
        <>
            <Link href="/" className={`box-shadow bg-white rounded-[16px] p-5 ${className}`}  key={id}>
                <img src={img} alt="Room card img"/>
                <div className='room-card-info'>
                    <h1>{roomnumber}-Xona</h1>
                    <ul>
                        <li>{persons}-kishilik</li>
                        <li>{status}</li>
                    </ul>
                </div>
                <div className='room-card-price'>
                    <div>
                        <h4>Qulayliklar</h4>
                        <p>{characteristics}</p>
                    </div>
                    <div>
                        <h4>Narxi:</h4>
                        <p>{price} so'm</p>
                    </div>
                </div>
                <Button className="">Band Qilish</Button>
            </Link>
        </>

    );
};
