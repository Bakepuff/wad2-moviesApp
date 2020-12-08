import React from "react";
import {Link} from "react-router-dom";
import './movieCasts.css'

const MovieCasts = ({casts = []}) => {
  return <>
    <div className={"title"}>Casts</div>
    <div className={"wrap"}>
      {casts.map(cast => (
        <Link className={"casts"} to={`/credit/${cast.credit_id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            alt={cast.name}
          />
          <div className={"name"}>{cast.name}</div>
          <div className={"character"}>{cast.character}</div>
        </Link>
      ))}
    </div>
  </>;
};

export default MovieCasts;
