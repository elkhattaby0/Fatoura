"use client"
import React from "react";
import { useState } from "react";
import { data } from "../../../../data"
const dt = data.contactLayout

const FormSection:React.FC = () => {
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
            <div className="w-3/4 py-16 flex justify-between max-md:flex-col border ">
                <form onSubmit={handleSubmit} className="w-1/2 max-md:w-full">
                    <h2 className="font-bold text-2xl text-darkBlue">
                        Send Us a Message
                    </h2>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">Full Name</label>
                        <input 
                            name="fullName" 
                            placeholder="Full Name" 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">Email Address</label>
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Email Address" 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">Phone Number - Optional</label>
                        <input 
                            name="phone" 
                            type="tel" 
                            placeholder="Phone Number- Optional" 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">Subject</label>
                        <input 
                            name="subject" 
                            placeholder="Subject" 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none" 
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">Message</label>
                        <textarea 
                            name="message" 
                            placeholder="Message" 
                            onChange={handleChange} 
                            className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-xl py-2 px-4 block w-full appearance-none"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-darkBlue text-white font-bold py-2 mt-4 px-4 w-full rounded-xl hover:bg-skyBlue outline-none"
                    >Send</button>
                </form>
                <div className="w-1/2 max-md:w-full pl-16 max-md:pl-0 max-md:mt-10">
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