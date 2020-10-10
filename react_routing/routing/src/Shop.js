import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom"

function Shop() {

  useEffect(() => {
    fetchMovies();
  }, []);

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&page=1'
    );

    const flicks = await data.json();
    console.log(flicks.results);

    setMovies(flicks.results);
  }

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />

          <h1>
            <Link to={`/shop/${movie.id}`}>{movie.title}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Shop;
