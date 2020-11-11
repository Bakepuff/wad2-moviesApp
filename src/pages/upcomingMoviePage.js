import React, { useState, useEffect } from "react";
import MovieListPageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import AddToWatchButton from '../components/buttons/addToWatch'



const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovie().then(movies => {
      setMovies(movies);
    });
  }, []);


  return (
      <MovieListPageTemplate
        title='Discover Movies'
        movies={movies}
        action={movie => <AddToWatchButton movie={movie} />}
        />
        );
      };

export default (UpcomingMoviePage);