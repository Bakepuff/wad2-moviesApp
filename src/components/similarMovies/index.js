import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import  './similarMovies.css' 
import {getSimilarMovies} from '../../api/tmdb-api'

const SimilarMovies = ({movieId}) => {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    getSimilarMovies(movieId).then(setMovies)
  },[movieId])
  return <>
    <div className={"title"}>Similar Movies</div>
    <div className={"wrap"}>
      {movies.map(movie => (
        <Link className={"card3"} to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={"name"}>{movie.title}</div>
          <div className={"character"}>{movie.original_language}</div>
        </Link>
      ))}
    </div>
  </>;
};

export default SimilarMovies;
