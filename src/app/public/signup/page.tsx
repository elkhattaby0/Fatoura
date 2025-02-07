import React from "react"
import Link from "next/link";
import { data } from "../../../data"
const dt = data.register

const SignUp: React.FC = () => {
    return (
        <div className="py-16">
            <div className="flex bg-lightGray rounded-xl shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                    backgroundImage:
                    `url(${dt.img})`,
                }}
            ></div> 
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl font-bold text-darkBlue text-center">{dt.txt}</p>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">{dt.name}</label>
                        <input className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" type="text" />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">{dt.email}</label>
                        <input className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" type="email" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-black text-sm font-bold mb-2">{dt.password}</label>
                        </div>
                        <input className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" type="password" />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-black text-sm font-bold mb-2">{dt.confirmPass}</label>
                        </div>
                        <input className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" type="password" />
                    </div>
                    <div className="mt-8">
                        <button className="bg-darkBlue text-white font-bold py-2 px-4 w-full rounded-xl hover:bg-skyBlue">{dt.btn.txt}</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link href={dt.signin.link} className="text-xs text-black uppercase">{dt.signin.txt}</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUp