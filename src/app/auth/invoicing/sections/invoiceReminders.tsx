"use client"
import React, { useState } from 'react';
import Title2 from '../../components/title2';

interface InvoiceRemindersProps {
    title:string;
}
const InvoiceReminders:React.FC<InvoiceRemindersProps> = ({title}) => {
    const [toggle, setToggle] = useState(100)
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-full mt-4">
            <Title2 title={title} />
            <input type="range"
                min={0}
                max={100}
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