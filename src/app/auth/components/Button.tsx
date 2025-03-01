'use client';
import React from "react";

interface BottonProps {
    txt:string;
    onClick?:()=> void;
}
const Botton:React.FC<BottonProps> = ({txt, onClick}) => {
    return (
        txt && <button
            className="bg-darkBlue hover:bg-skyBlue hover:shadow text-white px-4 py-2 rounded-xl my-2 text-md"
            onClick={onClick}
        >
            {txt}
        </button>
    )
}

export default Botton;