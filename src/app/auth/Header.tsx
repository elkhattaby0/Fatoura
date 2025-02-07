import Image from "next/image";
import React from "react";

const Headre: React.FC = () => {
    interface UserProps {
        img: string;
        type: string;
        name: string;
    }
    const UserInfo: React.FC<UserProps> = ({ img, type, name }) => {
        return (
            <div className="flex items-center bg-white py-1 px-4 my-2 rounde border-l">
                <div className="rounded-full flex items-center justify-center overflow-hidden">
                    <Image 
                        src={img} 
                        alt="Avatar" 
                        width={10} 
                        height={10} 
                        className={`w-9 h-9 object-cover rounded-full border ${img ? "" : "animate-pulse bg-gray-300"}`} 
                    />
                </div>
                
                <div className="ml-3">
                    <h3 className={`${type ? "" : "animate-pulse bg-gray-300 p-2 w-1/2 rounded-full mb-1"} font-bold text-[12px] text-thirdcolor uppercase`}>{type}</h3>
                    <h2 className={`${name ? "" : "animate-pulse bg-gray-300 p-2 w-[100px] rounded-full"} font-medium text-[13px] text-foreground`}>{name}</h2>
                </div>
            </div>
        );
    };
    
    return (
        <div className="bg-white rounded-xl border px-4 mt-4 w-full flex justify-between items-center">
            <div 
                className="flex items-center rounded-xl border px-4 py-2 bg-background"
            >
                <Image src="/auth/search.png" alt="Search" height={20} width={25} />
                <input type="text" placeholder="Search" 
                className="border-l-2 pl-2 ml-2 outline-none bg-background"/>
            </div>
            <UserInfo 
                img="/heroabout.jpg" type="Admin" name="Mo Salah"  
            />
        </div>
    )
}

export default Headre;