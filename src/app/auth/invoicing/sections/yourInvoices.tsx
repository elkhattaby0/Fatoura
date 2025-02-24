"use client"
import React, {useState} from "react";

interface dataTd {
    id:number; name:string; amount:number; date:string; status:number
}
interface YourInvoicesProps {
    title:string;
    headTable:string[];
    data:dataTd[];
    sts:string[];
    pr:string;
    pg:string;
    nt:string;
    currency:string;
}
const YourInvoices:React.FC<YourInvoicesProps> = ({title, headTable, data, sts, pr, pg, nt, currency}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5; 

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);
    
      
    return (
        <div className="h-full rounded-xl p-4 border bg-white w-2/3 max-md:w-full mt-4">
            {
                title ? 
                <h3
                    className='font-bold text-xl text-darkBlue mb-4'
                >
                    {title}
                </h3> 
                : <div className="animate-pulse rounded-full bg-gray-300 p-2 w-[200px] mt-2"></div>
            }
            <table className="w-full border">
                <thead className="bg-lightGray text-center h-8 uppercase">
                    <tr className="font-bold text-[12px] max-md:text-[10px] text-black w-full">
                        {
                            headTable.map(n=> <th className="w-1/6" key={n}>{n}</th>)
                        }
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        currentRows.map(n=> (
                            <tr className="h-8 border border-lightGray text-sm max-md:text-[11px]" key={n.id}>
                                <td className="w-1/6">{n.id}</td>
                                <td className="w-1/6">{n.name}</td>
                                <td className="w-1/6 font-bold">{n.amount} {currency}</td>
                                <td className="w-1/6">{n.date}</td>
                                <td className="w-1/6 font-medium text-[12px] max-md:text-[10px] text-lightGray text-center">
                                    {
                                        n.status === 1 ? <p className="bg-gold rounded-xl my-1 px-2 w-full">{sts[1]}</p> : 
                                        n.status === 2 ? <p className="bg-red-500 rounded-xl my-1 px-2 w-full">{sts[2]}</p> : 
                                        <p className="bg-green rounded-xl px-2 my-1 w-full">{sts[0]}</p>                      
                                    }
                                </td>
                                <td className="w-1/6">
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="flex justify-around items-center mt-4">
                <button className="cursor-pointer hover:bg-lightGray py-2 px-3 hover:shadow rounded-xl" 
                    disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    {pr}
                </button>
                <span>
                    {pg} {currentPage}/{totalPages}
                </span>
                <button className="cursor-pointer hover:bg-lightGray py-2 px-3 hover:shadow rounded-xl"
                    disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    {nt}
                </button>
            </div>
        </div>
    )
}

export default YourInvoices;