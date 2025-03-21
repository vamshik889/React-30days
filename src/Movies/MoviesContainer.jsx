import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, []);

  const fetchMovies = async () => {
    const data = await fetch("https://www.freetestapi.com/api/v1/movies");
    const moviesData = await data.json();
    setMovies(moviesData);
    console.log(movies);
  };
  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
               rating = {movie.rating}
            />
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default MoviesContainer;
