"use client"
import React, { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";
import Title2 from "../../components/title2";
import Botton from "../../components/Button";


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
        "paragrapgh": "font-semibold text-md text-black w-full ",
        "label": "w-full h-fit py-[3px] flex flex-col justify-between items-start",
        "input": "w-full mt-[1px] bg-lightGray rounded-xl px-4 py-2 outline-none border border-darkBlue"
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
            <Title2 title={title} />
            <Botton txt={btn} onClick={() => setIsOpend(!isOpend)} />
            {
                isOpend && (
                <PopUp>
                    <div
                        className="bg-white shadow-2xl py-4 px-8 w-[500px] max-md:w-full h-full 
                   max-h-screen overflow-y-auto flex flex-col "
                    >
                        <div className="flex justify-between mb-4">
                            <Title2 title={title1} />
                            <button
                                className="flex items-center justify-center bg-lightGray p-[4px] size-7 rounded-xl"
                                onClick={() => setIsOpend(!isOpend)}
                            >
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ff0000"></path> </g></svg>
                            </button>
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
                            <Botton txt={btn1} />
                        </form>
                    </div>
                </PopUp>
                )
            }
        </div>
    )
}

export default CreateInvoice;