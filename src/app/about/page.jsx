import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight:['400'], subsets: ['latin'] });
export const metadata = {
    title: "About",
    description: "super powerful next app",
    keywords: ['about', 'about-next-app']
  };
const aboutpage = () => {
    return (
        <div>
            <h2 className={`${headland.className} text-3xl text-center`} >About Page</h2>
        </div>
    );
};

export default aboutpage;