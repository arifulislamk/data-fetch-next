"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const rounter = useRouter()
    const handleLogin = () => {
        rounter.push("/login")
    }
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Gallery",
            path: "/gallery"
        }
    ]
    return (
        <div className=' p-4 bg-cyan-600 flex justify-between items-center'>
            <h6 className=' text-cyan-100'>Data Next</h6>
            <ul className=' flex justify-between items-center space-x-3 '>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} className='text-cyan-100 hover:text-white'>{link.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Navbar;