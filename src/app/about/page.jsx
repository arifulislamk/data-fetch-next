import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight:['400'], subsets: ['latin'] });
export const metadata = {
    title: "About",
    description: "super powerful next app",
    keywords: ['about', 'about-next-app']
  };

  // const getTime = async() => {
  //   const res = await fetch("http://localhost:3000/time", {next: {revalidate: 5}})
  //   const data = await res.json();
  //   return data.currentTime
  // }
const aboutpage = () => {
    // const currentTime =  getTime()
    return (
        <div>
            <h2 className={`${headland.className} text-3xl text-center`} >About Page</h2>
            {/* <h3>Time: {currentTime}</h3> */}
        </div>
    );
};

export default aboutpage;