"use client";

import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { data } from "../../data"

const dt = data.header

const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    const Lang = () => {
        return (
            <select className="cursor-pointer hover:shadow outline-none text-darkBlue text-sm font-semibold bg-lightGray rounded-xl border px-2 py-2 ml-2">
                <option>EN</option>
                <option>AR</option>
                <option>FR</option>
            </select>
        )
    }

    return (
        <header>
        <nav className="bg- h-[80px] py-6 flex ">
            <div className="flex flex-wrap items-center justify-between w-full max-w-screen-xl px-4 mx-auto w-[87.9%]">
            <Link href={dt.logo.slug} className="flex items-end outline-none">
                <span className="text-2xl font-bold whitespace-nowrap text-darkBlue">{dt.logo.name}</span>
            </Link>
            <div className="flex items-center lg:order-2">
                <Link
                href={dt.login.slug}
                className="block relative z-10 py-2 pl-3 pr-4 mr-2 max-md:mr-0 lg:bg-transparent font-semibold text-darkBlue hover:text-skyBlue outline-none"
                aria-current="page"
                >{dt.login.name}</Link>
                <Link
                href={dt.signup.slug}
                className="text-white bg-darkBlue hover:bg-skyBlue font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 lg:py-2.5 sm:mr-2 lg:mr-0 outline-none"
                >{dt.signup.name}</Link>
                <Lang />
                <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-600 rounded-lg lg:hidden hover:bg-darkBlue"
                aria-controls="mobile-menu-2"
                aria-expanded={isMenuOpen}
                >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                    <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                ) : (
                    <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                )}
                </button>
            </div>
            <div
                className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                isMenuOpen ? "block" : "hidden"
                }`}
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0
                 bg-lightGray rounded-xl px-4 py-2">
                {dt.Navbar.map((n) => (
                    <li key={n.id}>
                    <Link
                        href={n.slug}
                        className="block relative z-10 py-2 pl-3 pr-4 bg-lightGray lg:bg-transparent text-md font-semibold lg:p-0 text-darkBlue hover:text-skyBlue outline-none"
                        aria-current="page"
                    >
                        {n.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </nav>

        <Script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js" strategy="lazyOnload" />
        </header>
    );
};

export default Header;
