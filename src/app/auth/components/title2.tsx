import React from "react";

const Title2:React.FC<{title:string;}> = ({title}) => {
    return (
        <div>
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
        </div>
    )
}

export default Title2;