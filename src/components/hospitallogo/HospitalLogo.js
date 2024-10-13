
import classNames from "classnames";
import {Package2} from "lucide-react";
import Link from "next/link";
export const HospitalLogo = ({ logo , name, className }) => {
    return(
        <Link href="/" className="flex items-center gap-4 font-medium header-logo w-full justify-center rounded-2xl h-[55px] text-white">
            <Package2 className="h-6 w-6"/>
            <h2 className=" nav-text-size2">{name}</h2>
        </Link>
    );
};
