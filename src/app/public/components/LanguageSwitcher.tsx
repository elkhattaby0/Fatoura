"use client";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
    const { language, changeLanguage  } = useLanguage();
    return (
        <select 
            className="cursor-pointer hover:shadow outline-none text-darkBlue text-sm font-semibold bg-lightGray rounded-xl border px-2 py-2.5 mx-1"
            value={language}  
            onChange={(e) => changeLanguage(e.target.value)}  
        >
            <option value="en">EN</option>
            <option value="ar">AR</option>
            {/* <option>FR</option> */}
        </select>
    )
}

export default LanguageSwitcher