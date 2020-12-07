import React, { useContext } from "react";
import MovieListPageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchButton from '../components/buttons/addToWatchlist'

const Top_ratedMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.top_rated.filter((m) => {  // New
    return !("watchlist" in m);
  });


  return (
      <MovieListPageTemplate
        title='Top Rated Movie'
        movies={movies}
        action={movie => <AddToWatchButton movie={movie} />}
        />
        );
      };

export default (Top_ratedMoviePage);