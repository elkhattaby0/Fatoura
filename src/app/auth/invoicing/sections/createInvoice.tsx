"use client"
import React, { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";


interface CreateInvoiceProps {
    title: string;
    btn: string;
    title1: string;
    name: string;
    invoiceDate: string;
    dueDate: string;
    description: string;
    quantity: string;
    price: string;
    total: string;
    notes: string;
    btn1: string;

}
const CreateInvoice: React.FC<CreateInvoiceProps> = ({ title, btn, title1, name, invoiceDate, dueDate, description, quantity, price, total, notes, btn1  }) => {
    const [isOpend, setIsOpend] = useState(false);
    const styles = {
        "paragrapgh": "font-semibold text-md text-black w-full",
        "label": "w-full h-fit py-2 flex max-md:flex-col justify-between items-center max-md:items-start bg- red-500",
        "input": "w-full max-md:w-full max-md:mt-2 bg-lightGray rounded-xl p-2 outline-none border border-darkBlue"
    }
    const [clname, setClname] = useState("");
    const [invDate, setInvDate] = useState("");
    const [dueDt, setDueDt] = useState("");
    const [desc, setDesc] = useState("");
    const [qty, setQty] = useState(0);
    const [prc, setPrc] = useState(0);
    const [ttl, setTtl] = useState(0);
    const [nts, setNts] = useState("");

    useEffect(() => {
        setTtl(qty * prc);
    }, [qty, prc]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`${clname} ${invDate} ${dueDt} ${desc} ${qty} ${prc} ${ttl} ${nts}`);
    }
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-full mt-4">
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
                        onClick={() => setIsOpend(!isOpend)}
                        className='bg-darkBlue hover:bg-skyBlue hover:shadow text-white px-4 py-2 rounded-xl my-2 text-md'
                    >
                        {btn}
                    </button>
                    : <div className="animate-pulse rounded-full bg-gray-300 p-4 w-[150px] mt-2"></div>
            }
            {
                isOpend && (
                <PopUp>
                    <div
                        className="bg-white rounded-xl shadow-2xl p-8 w-1/2 max-md:w-full h-fit 
                   max-h-screen overflow-y-auto"
                    >
                        <div className="flex justify-between  b order-b">
                            <h3 className="font-semibold text-darkBlue text-xl">{title1}</h3>
                            <button
                                className="text-red-500 font-semibold text-[20px] hover:bg-lightGray size-8 rounded-xl"
                                onClick={() => setIsOpend(!isOpend)}
                            >X</button>
                        </div>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{name}</p>
                                <input
                                    type="text" name="client" className={styles.input} value={clname}
                                    onChange={(e) => setClname(e.target.value)}
                                />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{invoiceDate}</p>
                                <input type="date" name="invoiceDate" className={styles.input} value={invDate} onChange={(e) => setInvDate(e.target.value)} />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{dueDate}</p>
                                <input type="date" name="dueDate" className={styles.input} value={dueDt} onChange={(e) => setDueDt(e.target.value)} />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{description}</p>
                                <input type="text" name="description" className={styles.input} value={desc} onChange={(e) => setDesc(e.target.value)} />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{quantity}</p>
                                <input type="number" name="quantity" className={styles.input} value={qty} onChange={(e) => setQty(Number(e.target.value))} />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{price}</p>
                                <input type="number" name="price" className={styles.input} value={prc} onChange={(e) => setPrc(Number(e.target.value))} />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{total}</p>
                                <input type="number" name="total" disabled className={styles.input} value={ttl} />
                            </label>
            
                            <label className={styles.label}>
                                <p className={styles.paragrapgh}>{notes}</p>
                                <textarea name="notes" className={styles.input} value={nts} onChange={(e) => setNts(e.target.value)}></textarea>
                            </label>
            
                            <button type="submit"
                                className="bg-darkBlue hover:bg-skyBlue text-white p-2 mt-2 rounded-xl outline-none"
                            >{btn1}</button>
                        </form>
                    </div>
                </PopUp>
                )
            }
        </div>
    )
}

export default CreateInvoice;