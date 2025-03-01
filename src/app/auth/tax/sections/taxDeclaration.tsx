import React from "react";
import Title2 from "../../components/title2";
import Button from "../../components/Button";
import SCardTxt from "../../components/sCardTxt";
import BoldParagraph from "../../components/boldParagraph";

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
            <Title2 title={title} />
            <Button txt={btn} />
            <SCardTxt id={1} name={txt1} text={dt1} />
            <BoldParagraph txt={txt2} />
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