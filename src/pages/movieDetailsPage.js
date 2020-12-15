import React, {useEffect, useState,useContext} from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import MovieCasts from "../components/movieCasts"; 
import {getMovieCredits} from '../api/tmdb-api'
import SimilarMovies from "../components/similarMovies"; 
import {rateMovie} from '../api/tmdb-api'
import {message, Rate} from "antd";
import {MoviesContext} from "../contexts/moviesContext";
import 'antd/dist/antd.css'

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  
  const [casts,setCasts] = useState([])
  const context = useContext(MoviesContext);

  useEffect(()=>{
    getMovieCredits(id).then(setCasts)
  },[id])

  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          <div className='rate'>
            Rate: <Rate defaultValue={5} allowHalf count={10} onChange={value => {
            if (!context.user) {
              message.warn('please login')
              props.history.push('/login')
              return
            }
            rateMovie(movie.id, value, context.user.sessionId).then(res => {
              if (res.success) {
                message.success('rate success')
              } else {
                message.error(res.status_message)
              }
            })
          }}/>
          </div>
        </PageTemplate>
        <MovieCasts casts={casts}/>
        <SimilarMovies movieId={id}/>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);