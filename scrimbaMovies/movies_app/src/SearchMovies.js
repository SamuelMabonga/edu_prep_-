import React, {useState} from "react";
import MovieCard from "./MovieCard.js"

export default function SearchMovies() {

  //states - we shall have 2 ie input query, movies
  const [query, setQuery] = useState('');

  // create state for movies, and update the state 
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=ebb6fea526ae6fedd22bbfce0ae8199a&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }catch(err) {
      console.error(err)
    }

    
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie Name</label>
        <input className="imput" type="text" name="query" placeholder="i.e Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}