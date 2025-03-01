import React from "react";
import Title2 from "../../components/title2";
import BoldParagraph from "../../components/boldParagraph";

const ProfileManagement = () => {
    return (
        <div className="h-fit rounded-xl p-4 border bg-white w-full mt-4">
            <Title2 title="Profile Management" />
            <BoldParagraph txt="Personal/Business Information" />
            <BoldParagraph txt="Tax Preferences" />

        </div>
    )
}

export default ProfileManagement;