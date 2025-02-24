import React from "react"

interface WelcomingProps {
    txt:string;
    name:string;
}
const Welcoming:React.FC<WelcomingProps> = ({txt, name}) => {
    return (
        <div className="h-full rounded-xl p-4 border bg-white flex items-center text-2xl font-bold">
            {
                txt ? <p className="text-black">{txt}</p>
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px]"></div>
            },
            {
                name ? <h3 className="ml-2 text-darkBlue">{name}</h3>
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[100px] ml-2"></div>
            }.
        </div>
    )
}

export default Welcoming;