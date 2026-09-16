import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./pages/Footer";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=37adbdf5`,
    );
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      console.error("No movies found!");
    }
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={fetchMovies} />
        <Routes>
            <Route path="/" element={<MovieList movies={movies} />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
