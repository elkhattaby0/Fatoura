import React from "react";

const Title:React.FC<{title:string; txt:string;}> = ({ title, txt }) => {
    return (
        <div
            className="h-full rounded-xl p-4 border bg-white"
        >
            {
                title ? 
                <h3
                    className='font-bold text-2xl text-darkBlue'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-3 w-[200px]"></div>}
            {
                txt ? 
                <p
                    className='font-normal text-medium text-black'
                >
                    {txt}
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
        </div>
    )
}

export default Title;