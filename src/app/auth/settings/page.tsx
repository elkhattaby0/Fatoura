import React from "react";
import Title from "../components/title";
import ProfileManagement from "./sections/profileManagement";

export default function Settings() {
    return (
        <div>
            <Title
                title="Settings"
                txt="Manage your profile and preferences."
            />
            <ProfileManagement />
        </div>
    )
}