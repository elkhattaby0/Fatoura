"use client";

import React, { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Header: React.FC = () => {
    const [isShowed, setIsShowed] = useState(false);
    const { t } = useLanguage();
    const dt = t.header

    const Navigation = () => {
        return (
            <ul className="flex justify-between items-center mt-4 font-medium lg:flex-row lg:space-x-8  lg:mt-0
                 bg-lightGray shadow rounded-xl px-4 py-2 max-md:hidden ">
                {dt.Navbar.map((n: {id:number; slug:string; name:string;}) => (
                    <li 
                        key={n.id}
                        className="font-semibold text-darkBlue hover:text-skyBlue "
                        >
                    <Link
                        href={n.slug}
                        className="outline-none"
                    >
                        {n.name}
                    </Link>
                    </li>
                ))}
                </ul>
        )
    }
    const NavigationMobile = () => {
        return (
            <div className={`absolute z-10 top-20 w-full hidden  ${isShowed ? "max-md:flex" : "hidden" }`}>
                <div className="bg-lightGray rounded-xl shadow-md w-full h-fit py-5">
                    <ul>
                        {dt.Navbar.map((n: {id:number; slug:string; name:string;}) => (
                            <li key={n.id} className="py-2">
                            <Link
                                href={n.slug}
                                className="p-6 my-2 text-md font-semibold text-darkBlue hover:text-skyBlue outline-none"
                            >
                                {n.name}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
    const ToggleMenu = () => {
        return (
            <button
                onClick={()=> isShowed ? setIsShowed(false) : setIsShowed(true)}
                className="hidden max-md:flex items-center justify-center size-10 bg-lightGray rounded-xl font-bold text-xl text-darkBlue hover:shadow"
                >
                    {isShowed ? "X" : "☰" }
            </button>
        )
    }

    return (
        <header className="relative h-[80px] w-full  flex justify-center">
        <nav className="h-[80px] w-11/12 py-6 flex absolute z-10 ">
            <div className="flex flex-wrap  items-center justify-between w-full max-w-screen-xl mx-auto ">
                <Link href={dt.logo.slug} className="max-md:w-1/5 flex items-end outline-none">
                    <span className="text-2xl font-bold whitespace-nowrap text-darkBlue">
                        {dt.logo.name}
                        </span>
                </Link>
                <Navigation />
                <NavigationMobile />
                <div className=" max-md:w-3/5 flex items-center justify-end lg:order-2">
                    <Link
                        href={dt.login.slug}
                        className="block relative z-10 py-2 pl-3 pr-4 mr-2 max-md:mr-0 max-md:hidden lg:bg-transparent font-semibold text-darkBlue hover:text-skyBlue outline-none"
                        aria-current="page"
                    >{dt.login.name}</Link>
                    <Link
                        href={dt.signup.slug}
                        className="text-white bg-darkBlue hover:bg-skyBlue font-medium hover:shadow rounded-lg text-sm px-4 lg:px-5 py-2.5 lg:py-2.5 sm:mx-2 lg:mx-2 outline-none"
                        >{dt.signup.name}</Link>
                    <LanguageSwitcher />
                    <ToggleMenu />
                </div>
            </div>
        </nav>

        </header>
    );
};

export default Header;
