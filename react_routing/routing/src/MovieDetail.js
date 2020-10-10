import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom"

function MovieDetail({ match }) {

  useEffect(() => {
    fetchMovie()
    
    console.log(match.params.id)
  }, []);

  const [movie, setMovie] = useState({})

  const fetchMovie = async () => {
    const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US`)

    const flick = await fetchMovie.json()

    setMovie(flick)

    console.log('flickkkkk')
    console.log(flick)

    console.log('testing backdrops')
    console.log(flick.backdrop_path)
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>
      <h4>{movie.title}</h4>
    </div>
  );
}

export default MovieDetail;
