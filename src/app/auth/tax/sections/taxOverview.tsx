import React from "react";

interface TaxOverviewProps {
    title:string; 
    estimated:string; 
    amount:number; 
    currency:string; 
    breakdown:string; 
    vat:string; 
    vatAmount:number; 
    income:string;
    incomeAmount:number;
}
const TaxOverview:React.FC<TaxOverviewProps> = ({ 
    title, estimated, amount, currency, breakdown, vat, vatAmount, income, incomeAmount
    }) => {

    const result: number = incomeAmount * 100 / amount;
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
            {
                estimated ? 
                <p
                    className="font-semibold text-medium text-black"
                >
                    {estimated} :
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <div className="flex items-center">
                {
                    amount ? 
                    <p
                        className='font-semibold text-xl text-black mr-1'
                    >
                        {amount}
                    </p> 
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[70px] mt-2"></div>
                }
                {
                    currency ? 
                    <p
                        className='font-semibold text-xl text-black w-full'
                    >
                        {currency}
                    </p> 
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[70px] mt-2"></div>
                }
            </div>
            <div className="relative w-full mt-2 mb-2 max-md:w-[80%]">
                <input
                    type='range' 
                    min={0} 
                    max={100}
            
                    className="w-full appearance-none h-6 rounded-xl bg-white outline-none border-2 border-darkBlue
                        [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-xl
                        [&::-webkit-slider-thumb]:hidden [&::-moz-range-thumb]:hidden [&::-ms-thumb]:hidden"
                />
                <div 
                    className="absolute top-[0px] left-0 h-6 bg-darkBlue rounded-xl text-[14px] text-center text-white"
                    style={{ width: `${result}%` }}
                    >{(result).toFixed(2)}%</div>
                </div> 
            <div className=''>
                {
                    breakdown ? 
                    <p
                        className='font-semibold text-medium text-black'
                    >
                        {breakdown} :
                    </p> 
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
                }
                {
                    vat ? 
                    <p
                        className='font-normal text-medium text-black'
                    >
                        - {vat + " : " + vatAmount + " " + currency}
                    </p> 
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
                }
                {
                    income ? 
                    <p
                        className='font-normal text-medium text-black'
                    >
                        - {income + " : " + incomeAmount + " " + currency}
                    </p> 
                    : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
                }
            </div>
        </div>
    )
}

export default TaxOverview;