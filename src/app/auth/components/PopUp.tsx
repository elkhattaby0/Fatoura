import React from "react";

const PopUp:React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div
            className="fixed inset-0 top-0 bg-[#21212121] bg-opacity-50 flex justify-center items-center z-50 py-4"
        >
            {children}
        </div>
    )
}

export default PopUp;