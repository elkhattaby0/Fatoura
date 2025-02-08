import React from "react";
import Image from "next/image";

// import PieChart from "./Pie";
const currency = " DH";
interface HeaderProps {
    TotalAmount: number;
    // TotalPaidAmount: number;
    // TotalPendingAmount: number;
}

const Header: React.FC<HeaderProps> = ({ TotalAmount }) => {
    return (
        <div className='flex items-center justify-between mb-4'>
                <div className='border flex flex-col justify-between p-8 rounded-xl bg-gray-50'> 
                    <div className="flex items-center">
                        <Image 
                            src="/auth/bill.png" alt="Icon" 
                            width={30} height={30}   
                            className="border-2 rounded-full p-0.5 mr-2" 
                        />
                        <p className='text-gray-500 text-sm font-medium'>Total Expenses</p>
                    </div>
                    <h2 
                        className={TotalAmount ? 'text-foreground text-xl font-semibold mt-2': "animate-pulse p-2 w-full bg-gray-300 mt-2 rounded-full px-4"}
                    >{TotalAmount ? TotalAmount.toLocaleString("en-US") + currency : ""}</h2>
                </div>
                <div className="w-50">
                    {/* <PieChart infoTable={infoTable}/> */}
                </div>
        </div>
    )
}


export default Header;