import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ moviedetails }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "37adbdf5";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovieDetails(data);
        } else {
          console.error("Error fetching movie details:", data.Error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!movieDetails) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details">
      <img
        src={movieDetails.Poster}
        alt={movieDetails.Title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h1 className="movie-title">{movieDetails.Title}</h1>
        <h2 className="movie-year">{movieDetails.Year}</h2>
        <p className="movie-writer">Writer: {movieDetails.Writer}</p>
        <p className="movie-director">Director: {movieDetails.Director}</p>
        <p className="movie-plot">{movieDetails.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
