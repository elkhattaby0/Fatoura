import React from "react";
import Image from "next/image";

interface HeaderProps {
    TotalAmount: number;
    TotalPaidAmount: number;
    TotalPendingAmount: number;
}
const currency = " DH";
const Header: React.FC<HeaderProps> = ({ TotalAmount,TotalPaidAmount, TotalPendingAmount  }) => {
    return (
        <div className='flex items-center justify-between mb-4'>
            <div className='border flex justify-between p-8 w-2/3 rounded-xl bg-background'>
                <div className='border-r pr-8'>
                    <div className="flex items-center">
                        <Image 
                            src="/auth/bill.png" alt="Icon" 
                            width={30} height={30}   
                            className="border-2 rounded-full p-0.5 mr-2" 
                        />
                        <p className='text-gray-500 text-sm font-medium'>Total Invoices</p>
                    </div>
                    <h2 
                        className={TotalAmount ? 'text-foreground text-xl font-bold mt-2': "animate-pulse p-2 w-full bg-gray-300 mt-2 rounded-full px-4"}
                    >{TotalAmount ? TotalAmount.toLocaleString("en-US") + currency : ""}</h2>
                </div>
                <div className='border-r pr-8'>
                    <div className="flex items-center">
                        <Image 
                            src="/auth/verified.png" alt="Icon" 
                            width={30} height={30}   
                            className="border-2 rounded-full p-0.5 mr-2" 
                        />
                        <p className='text-gray-500 text-sm font-medium'>Paid Invoices</p>
                    </div>
                    
                    <h2 
                        className={TotalPaidAmount ? 'text-foreground text-xl font-semibold mt-2': "animate-pulse p-2 w-full bg-gray-300 mt-2 rounded-full px-4"}
                    >{TotalPaidAmount ? TotalPaidAmount.toLocaleString("en-US")+ currency : ""}</h2>
                </div>
                <div className='px-4'>
                    <div className="flex items-center">
                        <Image 
                            src="/auth/hourglass.png" alt="Icon" 
                            width={30} height={30}   
                            className="border-2 rounded-full p-0.5 mr-2" 
                        />
                        <p className='text-gray-500 text-sm font-medium'>Pending Invoices</p>
                    </div>
                    <h2 
                        className={TotalPendingAmount ? 'text-foreground text-xl font-semibold mt-2': "animate-pulse p-2 w-full bg-gray-300 mt-2 rounded-full px-4"}
                    >{TotalPendingAmount ? TotalPendingAmount.toLocaleString("en-US") + currency : ""}</h2>
                </div>
            </div>
            <div className='border flex flex-col justify-between px-8 py-6 w-1/4 rounded-xl bg-background'>
                <h2 
                    className='font-bold text-foreground'
                >Total Receivable</h2>
                <p 
                    className={TotalPaidAmount ? 'text-gray-500 text-[12px] font-medium mt-2': "animate-pulse p-2 w-full bg-gray-300 mt-2 rounded-full px-4"}
                >{TotalPaidAmount ? "Total Unpaid Invoices " + TotalPaidAmount.toLocaleString("en-US") + currency : ""}</p>
                {/* <div className="relative w-full mt-2">
                    <input 
                        type="range" min="0" max="100" 
                        value={(TotalPaidAmount * 100) / TotalAmount} 
                        className="w-full appearance-none h-4 rounded-xl bg-white outline-none border
                        [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-xl
                        [&::-webkit-slider-thumb]:hidden [&::-moz-range-thumb]:hidden [&::-ms-thumb]:hidden
                        "
                    />
                    <div 
                        className="absolute top-0.5 left-0 h-4 bg-thirdcolor rounded-xl text-[10px] text-center text-background"
                        style={{ width: `${(TotalPaidAmount * 100) / TotalAmount}%` }}
                    >{((TotalPaidAmount * 100) / TotalAmount).toFixed(2)}%</div>
                </div> */}

            </div>
        </div>
    )
}


export default Header;