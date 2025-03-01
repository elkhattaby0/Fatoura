import React from "react";

const BoldParagraph:React.FC<{txt:string;}> = ({txt}) => {
    return (
        <div>
            {
                txt ? 
                <p
                    className="font-semibold text-medium text-black my-2"
                >
                    {txt} :
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
        </div>
    )
}

export default BoldParagraph;