import React from "react";
import Title2 from "../../components/title2";
import BoldParagraph from "../../components/boldParagraph";
import Botton from "../../components/Button";

const LabelTxtInput:React.FC<{txt:string; inptypet:string;}> = ({txt, inptypet}) => {
    const styles = {
        "label":"block w-full",
        "paragraph":"relative top-0 left-2 px-3 bg-darkBlue rounded-t-xl w-fit text-lightGray ",
        "input":"peer outline-none bg-lightGray py-2 px-4 rounded-xl border border-darkBlue w-full"
    }
    return (
        <label className={styles.label}>
            <p className={styles.paragraph}>{txt}</p>
            <input type={inptypet} className={styles.input} placeholder=" " />
            {/* button checkbox color date datetime-local email file hidden image month number password radio range reset search submit tel text time url week */}
        </label>
    )
}

const LabelTxtDropdown = () => {
    const UserType = [
        {"id":1, "type": "Freelancer"},
        {"id":2, "type": "Small Business"},
    ]
    const styles = {
        "label":"block w-full",
        "paragraph":"relative top-0 left-2 px-3 bg-darkBlue rounded-t-xl w-fit text-lightGray ",
        "select":"peer outline-none bg-lightGray py-2 px-4 rounded-xl border border-darkBlue w-full",
        "option": ""
    }
    return (
        <label className={styles.label}>
            <p className={styles.paragraph}>User Type</p>
            <select className={styles.select}>
                {
                    UserType.map(n=> <option className={styles.option} value={n.id}>{n.type}</option>)
                }                
            </select>
        </label>
    )
}

const ProfileManagement = () => {
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-1/2 max-md:w-full mt-4">
            <Title2 title="Profile Management" />
            <form className="w-full">
                <BoldParagraph txt="Personal/Business Information" />
                <LabelTxtInput txt="Full Name/Business Name" inptypet="text" />
                <LabelTxtInput txt="Email Address" inptypet="email" /> 
                <LabelTxtInput txt="Phone Number" inptypet="tel" /> 
                <LabelTxtInput txt="Address" inptypet="text" /> 
                <BoldParagraph txt="Tax Preferences" />
                <LabelTxtDropdown />
                <Botton txt="Save" />
            </form>
        </div>
    )
}

export default ProfileManagement;