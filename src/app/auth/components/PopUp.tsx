import React from "react";

const PopUp:React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className="fixed inset-0 top-0 flex justify-end bg-[#21212121] bg-opacity-50z-50 "
        >
            {children}
        </div>
    )
}

export default PopUp;