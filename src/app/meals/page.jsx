import Meals from '@/components/Meals';
import React from 'react';
export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "sur powerful next app",
    keywords: ['Meals', 'MEals-next-app']
  };
const mealpage = () => {
    return (
        <div className=' p-12'>
            <h1 className=' text-3xl font-semibold text-cyan-600 '>Choose your meal</h1>
            <p>Choose meal by serching food name</p>
            <Meals />
        </div>
    );
};

export default mealpage;