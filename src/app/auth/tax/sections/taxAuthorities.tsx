import React from "react";
import Title2 from "../../components/title2";
import Button from "../../components/Button";

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
            <Title2 title={title} />
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
            
            { 
                status.toLocaleLowerCase() !== "connected" && <Button txt={btn} />
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