"use client";
import MovieCard from "./ProjectCard";
import { useEffect, useState } from "react";

export default function ProjectGrid({limit}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/api/projects")
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
