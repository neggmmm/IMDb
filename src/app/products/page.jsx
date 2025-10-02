"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  const handleDelete = (id) => {
    console.log("deleted");
  };
  return (
    <div className="grid grid-cols-3">
      {movies.map((movie) => (
        <div
          className="flex flex-col justify-between rounded-2xl  h-70 bg-gray-400 p-3 m-3"
          key={movie.id}
        >
          <h1>{movie.title}</h1>
          <div>
            <p className="">{movie.description}</p>
            <p className="text-red-400">${movie.review}</p>
          </div>
          <div>
            <button
              onClick={handleDelete}
              className="bg-red-400 p-2 rounded text-white"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
