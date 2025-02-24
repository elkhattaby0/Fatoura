import React from "react";

interface TaxAuthoritiesProps {
    title:string;
    statustxt:string;
    status:string;
    btn:string;
    note:string;
}
const TaxAuthorities:React.FC<TaxAuthoritiesProps> = ({title, statustxt, status, btn, note}) => {
    return (
        <div className='h-full rounded-xl p-4 border bg-white w-1/3 max-md:w-full mt-4'>
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <div className='flex items-center'>
                {
                    statustxt ?
                    <p
                        className='font-normal text-medium text-black mr-2'
                    >
                        {statustxt + " : "}
                    </p>
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
                }{
                    status ?
                    <p
                        className={`font-bold text-medium ${status.toLocaleLowerCase() === "connected" ? "text-green" : "text-gold"}`}
                    >
                        {status}
                    </p>
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
                }
            </div>
            
            { status.toLocaleLowerCase() !== "connected" &&
                (btn ?
                    <button
                        className='bg-darkBlue hover:bg-skyBlue hover:shadow text-white px-4 py-2 rounded-xl my-2 text-md'
                    >
                        {btn}
                    </button>
                : <div className="animate-pulse rounded-full bg-gray-300 p-4 w-[150px] mt-2"></div>)
            }
            { status.toLocaleLowerCase() !== "connected" &&
                (note ?
                <p
                    className='font-normal text-medium text-black text-sm mr-2'
                >
                    {note}
                </p>
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>)
            }
            
        </div>
    )
}

export default TaxAuthorities;