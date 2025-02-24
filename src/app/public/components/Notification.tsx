import React from 'react';

interface NotificationProps {
    message: string;
    type: 'success' | 'error';
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
    return (
        <div
            className={`fixed z-10 top-10 right-0 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg ${
                type === 'success' ? 'bg-green' : 'bg-red-500'
            } text-white`}
        >
            <p>{message}</p>
        </div>
    );
};

export default Notification;
