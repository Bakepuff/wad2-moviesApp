import React, { useContext } from "react";
import MovieListPageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchButton from '../components/buttons/addToWatch'



const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("watch" in m);
  });


  return (
      <MovieListPageTemplate
        title='Discover Movies'
        movies={movies}
        action={movie => <AddToWatchButton movie={movie} />}
        />
        );
      };

export default (UpcomingMoviePage);