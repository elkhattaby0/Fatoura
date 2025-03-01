import React from "react";
import BoldParagraph from "./boldParagraph";


// SCard : Simple Card for amounts
const SCard:React.FC<{
    id:number; name:string; amount:number; currency:string;
}> = ({id, name, amount, currency}) => {
    return (
        <div key={id} 
            className="w-fit flex flex-wrap p-4 bg-lightGray border border-darkBlue rounded-xl cursor-pointer hover:border-2 leading-[15px]">
            <BoldParagraph txt={name} />

            {
                amount && <div className="flex">
                <p className="text-darkBlue text-xl font-bold mx-1">{amount.toLocaleString("en-US")}</p>
                {currency && <p className="text-black font-semibold">{currency}</p>}
            </div>
            }
            
        </div>
    )
}

export default SCard;