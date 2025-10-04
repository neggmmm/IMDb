"use client";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

export default function ProjectGrid({limit}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="grid grid-cols-3">
      {movies.slice(0,limit ? limit:movies.length).map((movie) => (
        <MovieCard
        id={movie.id}
          title={movie.title}
          description={movie.description}
          key={movie.id}
        />
      ))}
    </div>
  );
}
