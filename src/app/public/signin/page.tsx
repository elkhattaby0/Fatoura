"use client"
import Link from "next/link";
import React, { useState } from "react"
import { useLanguage } from "@/context/LanguageContext";

const SignIn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInfo({...info, [name]: value.toLowerCase()})
    }
    const stopRefresh = () => {
        if (info.email === "" || info.password === "") {
            return;
        } else {
            document.cookie = `auth=${JSON.stringify(info)}; path=/`;
            return;
        }
    }
    const { t } = useLanguage();
    const dt = t.signin
    return (
        <div className="py-16">
            <div className="flex bg-lightGray rounded-2xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                    backgroundImage:
                    `url(${dt.img})`,
                }}
            ></div> 
                <form className="w-full p-8 lg:w-1/2" onSubmit={stopRefresh}>
                    <h2 className="text-2xl font-bold text-darkBlue text-center">{dt.logo}</h2>
                    <p className="text-xl text-black text-center">{dt.welcoming}</p>
                    <Link href={dt.google.link} className="flex items-center justify-center mt-4 text-white rounded-xl shadow bg-white hover:bg-skyBlue outline-none">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107" />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00" />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50" />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2" />
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-black font-bold">{dt.google.txt}</h1>
                    </Link>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <p className="text-xs text-center text-black uppercase outline-none">{dt.txt}</p>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">{dt.email}</label>
                        <input 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" type="email" 
                            name="email"
                            required
                            value={info.email || ""}
                            onChange={handleSubmit}
                            />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-black text-sm font-bold mb-2">{dt.password}</label>
                            <Link href={dt.forgetpass.link} className="text-xs text-black outline-none">{dt.forgetpass.txt}</Link>
                        </div>
                        <div
                            className="bg-white text-black border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none flex justify-between"
                        >
                            <input className="w-full focus:outline-none focus:shadow-outline" 
                                type={isVisible ? "text" : "password"} 
                                name="password"
                                required
                                value={info.password || ""}
                                onChange={handleSubmit}
                            />
                            <button
                                type="button"
                                onClick={() => setIsVisible((prev) => !prev)}
                                className="bg-lightGray border-2 content-center size-6 rounded-md flex items-center justify-center"
                            >
                                {
                                    isVisible ? 
                                    <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#374151"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z" fill="#374151"></path><path d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z" fill="#374151"></path></g></svg> 
                                    : <svg width="20px" height="20px" viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="#374151" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <circle cx="24" cy="24" r="4"></circle> <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"></path> </g> </g></svg>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="bg-darkBlue text-white font-bold py-2 px-4 w-full rounded-xl hover:bg-skyBlue outline-none">{dt.btn.txt}</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link href={dt.signup.link} className="text-xs text-black uppercase outline-none">{dt.signup.txt}</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignIn;