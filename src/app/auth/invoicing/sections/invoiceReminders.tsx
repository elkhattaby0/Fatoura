"use client"
import React, { useState } from 'react';

interface InvoiceRemindersProps {
    title:string;
}
const InvoiceReminders:React.FC<InvoiceRemindersProps> = ({title}) => {
    const [toggle, setToggle] = useState(100)
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-full mt-4">
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <input type="range"
                min="0"
                max="100"
                defaultValue={toggle}
                onClick={()=> toggle ? setToggle(0) : setToggle(100)}
                className="w-[70px] appearance-none h-6 rounded-full bg-darkBlue outline-none shadow
                        [&::-webkit-slider-runnable-track]:bg-darkBlue 
                        [&::-webkit-slider-runnable-track]:h-8 
                        [&::-webkit-slider-runnable-track]:rounded-3xl
                        [&::-webkit-slider-thumb]:p-4 
                        [&::-webkit-slider-thumb]:bg-white
                        [&::-moz-range-thumb]:hidden 
                        [&::-ms-thumb]:hidden"
            />
        </div>
    )
} 

export default InvoiceReminders;