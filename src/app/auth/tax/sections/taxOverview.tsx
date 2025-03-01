import React from "react";
import Title2 from "../../components/title2";
import BoldParagraph from "../../components/boldParagraph";
import SCard from "../../components/sCard";
import InputRange from "../../components/inputRange";

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
            <Title2 title={title} />
            <SCard id={1} name={estimated} amount={amount} currency={currency} />
            <InputRange result={result} />  
            <BoldParagraph txt={breakdown} />
            <div className='flex flex-wrap gap-2'>
                <SCard id={1} name={vat} amount={vatAmount} currency={currency} />
                <SCard id={2} name={income} amount={incomeAmount} currency={currency} />
            </div>
        </div>
    )
}

export default TaxOverview;