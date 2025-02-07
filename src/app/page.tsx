import React from 'react';
import { redirect } from 'next/navigation';

const RootPage: React.FC = () => {
    redirect('/public/home');
}

export default RootPage;