"use client"
import React from "react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const FormSection:React.FC = () => {
    const { t } = useLanguage();
    const dt = t.contactLayout

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", form);
      };
    
      
    return (
        <div className="bg-lightGray w-full flex justify-center">
            <div className="w-3/4 py-16 flex justify-between max-md:flex-col ">
                <form onSubmit={handleSubmit} className="w-1/2 max-md:w-full">
                    <h2 className="font-bold text-2xl text-darkBlue">
                        {dt.form.title}
                    </h2>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">
                        {dt.form.name}
                        </label>
                        <input 
                            name="fullName" 
                            placeholder={dt.form.name}
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">
                        {dt.form.email}    
                        </label>
                        <input 
                            name="email" 
                            type="email" 
                            placeholder={dt.form.email}
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">
                            {dt.form.phone}
                        </label>
                        <input 
                            name="phone" 
                            type="tel" 
                            placeholder={dt.form.phone}
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">
                            {dt.form.sjt}
                        </label>
                        <input 
                            name="subject" 
                            placeholder={dt.form.sjt} 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">
                        {dt.form.msg}
                        </label>
                        <textarea 
                            name="message" 
                            placeholder={dt.form.msg} 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-darkBlue text-white font-bold py-2 mt-4 px-4 w-full rounded-xl hover:bg-skyBlue outline-none"
                    >
                        {dt.form.btn}
                    </button>
                </form>
                <div className="w-1/2 max-md:w-full px-16 max-md:pl-0 max-md:mt-10">
                    {
                        dt.contact.map(n=> (
                            <div key={n.id} className="mb-8">
                                <h2 className="font-bold text-xl text-darkBlue mb-2">
                                    {n.title}
                                </h2>
                                <p className="flex flex-col">
                                    <span className="text-black font-medium">{n.txt1}</span>
                                    <span className="text-darkBlue font-bold">{n.txt2}</span>
                                </p>
                            </div>
                        ))
                    }
                    <div>
                        <h2 className="font-bold text-xl text-darkBlue mb-2">
                            {dt.title}
                        </h2>
                        <div className="flex">
                        {
                            dt.socialMedia.map(n=> (
                                <div 
                                    key={n.name}
                                    className="bg-black hover:bg-skyBlue cursor-pointer mx-1 p-2 rounded-xl w-fit"
                                >{n.icon}</div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSection;