import React from "react";


const FormatDate = (dateString:string) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(dateString);
    const month = months[date.getMonth()]; 
    const day = date.getDate(); 
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}

export default FormatDate;  