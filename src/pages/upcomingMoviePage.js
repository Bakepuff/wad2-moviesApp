import React, { useState, useEffect } from "react";
import MovieListPageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import AddToFavoriteButton from '../components/buttons/addToFavorites'



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
        action={movie => <AddToFavoriteButton movie={movie} />}
        />
        );
      };

export default (UpcomingMoviePage);