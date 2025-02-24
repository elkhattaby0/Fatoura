import React from "react";

interface tdProps {id:number; date:string; amount:number; status:string;}



interface TaxDeclarationProps {
    title:string;
    btn:string;
    txt1:string;
    dt1:string;
    txt2:string;
    head:string[];
    body:tdProps[]
}
const TaxDeclaration:React.FC<TaxDeclarationProps> = (
    { title, btn, txt1, dt1, txt2, head, body }
    ) => {
    return (
        <div className='h-full rounded-xl p-4 border bg-white w-1/3 max-md:w-full mt-4'>
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                btn ?
                <button
                    className='bg-darkBlue hover:bg-skyBlue hover:shadow text-white px-4 py-2 rounded-xl my-2 text-md'
                >
                    {btn}
                </button>
                : <div className="animate-pulse rounded-full bg-gray-300 p-4 w-[150px] mt-2"></div>
            }
            {
                txt1 ? 
                <p
                    className='font-semibold text-medium text-black mt-2'
                >
                    {txt1 + " : "}
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                dt1 ? 
                <p
                    className='font-normal text-medium text-black'
                >
                    - {dt1}
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            {
                txt2 ? 
                <p
                    className='font-semibold text-medium text-black my-2'
                >
                    {txt2 + " : "}
                </p> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <table className="w-full">
                <thead className="text-md text-center bg-lightGray border border-lightGray">
                    <tr>
                        {
                            head ?
                                head.map(n=> <th key={n} className="w-1/3">{n}</th>) 
                            : <div
                                className="animate-pulse rounded-full bg-gray-300 p-2 w-[95%] m-2"
                            ></div>
                        }
                    </tr>
                </thead>
                <tbody className="text-sm text-center">
                    {
                        body.map((n)=> (
                            <tr key={n.id} className=" border py-2 border-lightGray">
                                {
                                    n.date ? 
                                        <td className="w-1/3">{n.date}</td>
                                    : <div
                                        className="animate-pulse rounded-full bg-gray-300 p-2 w-[95%] m-2"
                                    ></div>
                                }
                                {
                                    n.amount ? 
                                        <td className="w-1/3">{n.amount}</td>
                                    : <div
                                        className="animate-pulse rounded-full bg-gray-300 p-2 w-[95%] m-2"
                                    ></div>
                                }
                                {
                                    n.status ? 
                                        <td className="w-1/3">{n.status}</td>
                                    : <div
                                        className="animate-pulse rounded-full bg-gray-300 p-2 w-[95%] m-2"
                                    ></div>
                                }
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default TaxDeclaration;