import React from "react";
import BoldParagraph from "./boldParagraph";


// SCard : Simple Card for text
const SCardTxt:React.FC<{
    id:number; name:string; text:string;
}> = ({id, name, text}) => {
    return (
        <div key={id} 
            className="w-fit flex flex-wrap p-4 bg-lightGray border border-darkBlue rounded-xl cursor-pointer hover:border-2 leading-[15px]">
            <BoldParagraph txt={name} />

            {
                text && <div className="flex">
                <p className="text-darkBlue text-xl font-bold mx-1">{text}</p>
            </div>
            }
            
        </div>
    )
}

export default SCardTxt;