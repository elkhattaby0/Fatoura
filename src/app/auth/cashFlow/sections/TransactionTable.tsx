"use client"
import React, { useState } from "react";

interface dataProps {
    date:string; description:string; amount:number, category:string;
}
interface TransactionTableProps {
    headTable:string[];
    data:dataProps[];
    pr:string;
    pg:string;
    nt:string;
    currency:string;
}
const TransactionTable:React.FC<TransactionTableProps> = ({headTable, data, pr,pg,nt, currency}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 4; 

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(data.length / rowsPerPage);
    return (
        <div>
                <table className="w-full border">
                <thead className="bg-lightGray text-center h-8 uppercase">
                    <tr className="font-bold text-[12px] max-md:text-[10px] text-black w-full">
                        {
                            headTable.map(n=> <th className="w-1/4" key={n}>{n}</th>)
                        }
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        currentRows.map(n=> (
                            <tr className="h-8 border border-lightGray text-sm max-md:text-[11px]" key={n.description}>
                                <td className="w-1/4">{n.date}</td>
                                <td className="w-1/4">{n.description}</td>
                                <td className="w-1/4 font-bold">{n.amount} {currency}</td>
                                <td className="w-1/4">{n.category}</td>
                                    
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

export default TransactionTable;