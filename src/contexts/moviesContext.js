import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovie, getTop_ratedMovie } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "save-user":
      return {
        ...state,
        user:action.payload.user
      };
    case "add-favorite":
      return {
        ...state,
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        top_rated: [...state.top_rated],
      };
    case "add-watchlist":
      return {
        ...state,
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        top_rated: [...state.top_rated],
      };
    case "load":
      return {...state,movies: action.payload.movies, upcoming: [...state.upcoming], top_rated: [...state.top_rated]};
    case "load-upcoming":
      return {...state,upcoming: action.payload.movies, movies: [...state.movies], top_rated: [...state.top_rated]};
    case "load-top_rated":
      return {...state,top_rated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming]};
    case "add-review":
      return {
        ...state,
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? {...m, review: action.payload.review}
            : m
        ),
        upcoming: [...state.upcoming],
        top_rated: [...state.top_rated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {user:undefined,movies: [], upcoming: [], top_rated: []});

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  const addToWatchlist = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };
  const saveUser = (user) => {
    dispatch({type: "save-user", payload: {user}});
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovie().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTop_ratedMovie().then((movies) => {
      dispatch({ type: "load-top_rated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        user: state.user,
        movies: state.movies,
        upcoming: state.upcoming,
        top_rated: state.top_rated,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchlist: addToWatchlist,
        saveUser: saveUser,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;