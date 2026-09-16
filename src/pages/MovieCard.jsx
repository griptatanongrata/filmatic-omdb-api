import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.imdbID}`} className="movie-card-link">
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
