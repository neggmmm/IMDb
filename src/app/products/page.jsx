"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  const [category] = useState([
    "Action",
    "Darama",
    "Comedy",
    "Horror",
    "Romance",
    "Science Fiction",
  ]);
  const handleDelete = (id) => {
    console.log("deleted");
  };
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col">
        {category.map((c) => (
          <div className="p-3 m-3 ml-9 hover:text-red-400">
            <p>{c}</p>
          </div>
        ))}
      </div>
      <div className="col-span-2">
        <Image
          className="w-300 h-130 rounded-2xl m-5"
          src="/ad.jpg"
          height={400}
          width={1200}
          alt="ad"
        />
      </div>
      {movies.map((movie) => (
        <div
          className="flex flex-col justify-between rounded-2xl h-90  
             bg-gradient-to-br from-gray-800 to-gray-900 text-white 
             p-5 m-3 shadow-md hover:shadow-xl 
             transform hover:scale-105 transition-all duration-300"
          key={movie.id}
        >
          <Image className="h-80 w-50" src="/ad.jpg" height={1} width={1} alt={movie.title}/>
          <h1 className="text-xl font-bold mb-2">{movie.title}</h1>
          <div>
            <p className="text-gray-300 text-sm">{movie.description}</p>
          </div>
          <div className="mt-4">
            <button
              onClick={handleDelete}
              className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg 
                 text-white font-semibold shadow 
                 transition-all duration-300 ease-in-out 
                 hover:shadow-blue-500/50"
            >
              Movie Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
