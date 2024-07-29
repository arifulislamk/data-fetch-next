"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const Meals = () => {
  const [searchText, setSearchText] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
      );
      const data = await res.json();
      setMeals(data?.meals);
      setError("");
    } catch (error) {
      setError("No Data Found");
    }
  };

  const handleinput = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <input
        onChange={handleinput}
        className=" p-4 outline-none bg-cyan-300 border-transparent text-slate-800 "
        type="text"
        name=""
        placeholder="search meals.."
        id=""
      />
      <button onClick={() => loadData()} className=" p-4 bg-cyan-600">
        Search
      </button>
      <div className="grid grid-cols-3 mt-12 gap-12">
        {meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div key={meal?.idMeal} className=" border border-gray-500 p-3">
              <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500} />
              <h6>{meal?.strMeal}</h6>
              <p>{meal?.strInstructions}</p>
            </div>
          ))}
        {error && <h6>No Data Found</h6>}
      </div>
    </div>
  );
};

export default Meals;
