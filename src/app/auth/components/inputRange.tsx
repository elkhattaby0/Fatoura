import React from "react";

const InputRange:React.FC<{result:number;}> = ({result}) => {
    return (
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
                >{result}%
            </div>
        </div> 
    )
}

export default InputRange;